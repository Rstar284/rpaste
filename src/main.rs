#[macro_use] extern crate rocket;
use rocket::data::{Data, ToByteUnit};
use rocket::tokio::fs::{self, File};
use rocket::Config;
use rocket::response::{content::RawHtml, Redirect};
use std::io::Result;
use uuid::Uuid;
use serde_json::{Value, from_str};
use std::fs as fs_std;
use reqwest;

#[launch]
fn rocket() -> _ {
    let config: Config = Config {port: 8080, cli_colors: false, ..Config::release_default()};
    rocket::custom(&config).mount("/", routes![index1, get1]).mount("/api", routes![index, upload, get, delete, disre, discall]).mount("/settings", routes![settings])
}

#[get("/")]
fn index1() -> RawHtml<String> {
    RawHtml(include_str!("static/index.html").to_string())
}

#[get("/<_id>?<_lang>")]
fn get1(_id: &str, _lang: Option<String>) -> RawHtml<String> {
    RawHtml(include_str!("static/get.html").to_string())
}

#[get("/")]
fn settings() -> RawHtml<String> {
    RawHtml(include_str!("static/settings.html").to_string())
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

#[get("/login/discord")]
async fn disre() -> Redirect {
    let confdata = fs_std::read_to_string("config.json").unwrap();
    let conf: Value = from_str(&confdata).unwrap();
    let client_id = conf["DIS_CLIENT_ID"].as_str().unwrap();
    Redirect::to(format!("https://discord.com/api/oauth2/authorize?client_id={}&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fdiscord&response_type=code&scope=identify%20email", client_id))
}

#[get("/discord?<code>")]
async fn discall(code: &str) -> Result<String> {
    let confdata = fs_std::read_to_string("config.json").unwrap();
    let conf: Value = from_str(&confdata).unwrap();
    let client_id = conf["DIS_CLIENT_ID"].as_str().unwrap();
    let client_secret = conf["DIS_C_SECRET"].as_str().unwrap();
    let clientr = reqwest::Client::new();
    let res = clientr.post(format!("https://discord.com/api/oauth2/token?grant_type=authorization_code&client_id={}&client_secret={}&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fdiscord&code={}", client_id, client_secret, code))
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Content-Length", "3")
        .send()
        .await
        .unwrap();
    let text = res.text().await.unwrap();
    let json: Value = from_str(&text).unwrap();
    Ok(json["access_token"].as_str().unwrap().to_string())
}

#[delete("/<key>")]
async fn delete(key: &str) -> Option<()> {
    fs::remove_file(format!("upload/{key}", key = key)).await.ok()
}
