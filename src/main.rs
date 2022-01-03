#[macro_use] extern crate rocket;
use rocket::data::{Data, ToByteUnit};
use rocket::tokio::fs::{self, File};
use rocket::Config;
use rocket::response::content::RawHtml;
use std::io::Result;
use uuid::Uuid;

#[launch]
fn rocket() -> _ {
    let config: Config = Config {port: 8080, cli_colors: false, ..Config::release_default()};
    rocket::custom(&config).mount("/", routes![index1, delete, get1]).mount("/api", routes![index, upload, get])
}

#[get("/")]
fn index1() -> RawHtml<String> {
    RawHtml(include_str!("static/index.html").to_string())
}

#[get("/<_id>")]
fn get1(_id: &str) -> RawHtml<String> {
    RawHtml(include_str!("static/get.html").to_string())
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world! This is pasting service api. for website use /
        POST /api/upload data=<file/text>
        GET /api/<id> Return file content as text. Useful for curl.
        GET /<id> Show paste content in the website.
        DELETE /api/<id> Delete paste by id
    "
}

#[post("/", data = "<paste>")]
async fn upload(paste: Data<'_>) -> Result<String> {
    let key = Uuid::new_v4().to_string();
    let bytes =  128.kibibytes();
    paste.open(bytes).into_file(format!("upload/{}", key)).await?;
    Ok(format!("http://localhost:8080/{}\n", key))
}

#[get("/<key>")]
async fn get(key: &str) -> Option<File> {
    File::open(format!("upload/{key}", key = key)).await.ok()
}

#[delete("/<key>")]
async fn delete(key: &str) -> Option<()> {
    fs::remove_file(format!("upload/{key}", key = key)).await.ok()
}
