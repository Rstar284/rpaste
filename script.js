'use strict';
const sbtn = document.getElementById('sbtn');
const cbtn = document.getElementById('cbtn');
const sebtn = document.getElementById('sebtn');
const gbbtn = document.getElementById('gbbtn');
const cpbtn = document.getElementById('rbtn');
const rcbtn = document.getElementById('rcbtn');
const code = document.getElementById('code');
const code2 = document.getElementById('code2');
const output = document.getElementById('output');
const submitbtn = document.getElementById('submit');
const settingsModal = document.getElementById('settingsModal');
const themebox = document.getElementById('theme');
const fontSizeSlider = document.getElementById('fontSize');
const fontSizeVal = document.getElementById('fontSizeVal');
const fontSizeCode = document.getElementById('fontSizeCode');
const tabSpaceSelect = document.getElementById('tabSpaceSelect');
const themeSelect = document.getElementById('themeSelect');
const shortcutModal = document.getElementById('shortcutsModal');
const fontSelect = document.getElementById('fontSelect');

console.log('UwU OwO UwU OwO UwU OwO UwU'); // a little easter egg hehe

code.disabled = false;
cbtn.style.display = 'none';
sbtn.style.display = 'inline-block';
sebtn.style.display = 'inline-block';
cpbtn.style.display = 'none';
gbbtn.style.display = 'none';
rcbtn.style.display = 'none';
code.focus();
code2.style.display = 'none';

const b64 = location.hash.split('#')[1];
const params = new URLSearchParams(window.location.search);

// add theme class to the document
const setTheme = (themeName) => {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
};

// switch theme
const toggleTheme = () => {
	if (localStorage.getItem('theme') === 'dark') {
		setTheme('light');
		themebox.checked = false;
	} else {
		setTheme('dark');
		themebox.checked = true;
	}
};

// set tab size in local storage
const setTab = (tab) => localStorage.setItem('tab', tab);

// set theme in local storage
const setColorScheme = (theme) => {
	localStorage.setItem('colorscheme', theme);
	document.body.className = theme;
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `themes/${theme}.css`;
	document.head.appendChild(link);
};

// set font in localstorage
const setFont = (font) => {
	localStorage.setItem('font', font);
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
	document.head.appendChild(link);
	document.body.style.fontFamily = `${font.replace('+', ' ')}, monospace`;
	code.style.fontFamily = `${font.replace('+', ' ')}, monospace`;
	code2.style.fontFamily = `${font.replace('+', ' ')}, monospace`;
	fontSizeCode.style.fontFamily = `${font.replace('+', ' ')}, monospace`;
	output.style.fontFamily = `${font.replace('+', ' ')}, monospace`;
};

// on page load set the theme
if (localStorage.getItem('theme') === null) {
	setTheme('dark');
	themebox.checked = true;
} else if (localStorage.getItem('theme') === 'dark') {
	setTheme('dark');
	themebox.checked = true;
} else {
	setTheme('light');
	themebox.checked = false;
}
// set font size from local storage
function setFontSize() {
	if (localStorage.getItem('fontSize') === null) {
		fontSizeCode.style.fontSize = '16px';
		fontSizeVal.textContent = '16px';
		fontSizeSlider.value = 16;
	} else {
		code.style.fontSize = localStorage.getItem('fontSize').toString() + 'px';
		code2.style.fontSize = localStorage.getItem('fontSize').toString() + 'px';
		output.style.fontSize = localStorage.getItem('fontSize').toString() + 'px';
		fontSizeVal.textContent = localStorage.getItem('fontSize') + 'px';
		fontSizeCode.style.fontSize =
			localStorage.getItem('fontSize').toString() + 'px';
		fontSizeSlider.value = localStorage.getItem('fontSize');
		const nums = document.getElementsByClassName('hljs-ln-n');
		for (let i = 0; i < nums.length; i++) {
			nums[i].style.fontSize =
				localStorage.getItem('fontSize').toString() + 'px';
		}
	}
}

setFontSize();

(function () {
	// set tab size from local storage
	if (localStorage.getItem('tab') === null) {
		setTab(2);
	} else {
		setTab(localStorage.getItem('tab'));
		for (let option of tabSpaceSelect.options) {
			if (option.value === localStorage.getItem('tab')) {
				option.selected = true;
				return;
			}
		}
	}
})();
(function () {
	// set theme from local storage
	if (localStorage.getItem('colorscheme') === null) {
		setColorScheme('atom-one');
	} else {
		setColorScheme(localStorage.getItem('colorscheme'));
		for (let option of themeSelect.options) {
			if (option.value === localStorage.getItem('colorscheme')) {
				option.selected = true;
				return;
			}
		}
	}
})();

(function () {
	// set font from local storage
	if (localStorage.getItem('font') === null) {
		setFont('Fira+Mono');
	} else {
		setFont(localStorage.getItem('font'));
		for (let option of fontSelect.options) {
			if (option.value === localStorage.getItem('font')) {
				option.selected = true;
				return;
			}
		}
	}
})();

themebox.addEventListener('change', toggleTheme, false);
fontSizeSlider.addEventListener('input', function () {
	fontSizeVal.textContent = this.value + 'px';
	fontSizeCode.style.fontSize = this.value + 'px';
});
fontSizeSlider.addEventListener('change', function () {
	localStorage.setItem('fontSize', this.value);
	setFontSize();
});
tabSpaceSelect.addEventListener('change', function () {
	let dropdown = document.querySelectorAll('.drop-tab');
	dropdown.forEach((item) => {
		item.addEventListener('click', () => {
			setTab(item.value);
		});
	});
});
themeSelect.addEventListener('change', function () {
	let dropdown2 = document.querySelectorAll('.drop-theme');
	dropdown2.forEach((item) => {
		item.addEventListener('click', () => {
			setColorScheme(item.value);
		});
	});
});
fontSelect.addEventListener('change', function () {
	let dropdown3 = document.querySelectorAll('.drop-font');
	dropdown3.forEach((item) => {
		item.addEventListener('click', () => {
			setFont(item.value);
		});
	});
});

// functions to show/hide settings modal
const hideSettings = () => (settingsModal.style.display = 'none');
const showSettings = () => {
	if (settingsModal.style.display === 'block') {
		hideSettings();
		return;
	}
	settingsModal.style.display = 'block';
};

// hide shortcuts modal
const hideShortcuts = () => (shortcutsModal.style.display = 'none');

// show shortcuts modal
const showShortcuts = () => {
	if (shortcutModal.style.display === 'block') {
		hideShortcuts();
		return;
	}
	shortcutModal.style.display = 'block';
};

// go back to the main page
const goBack = () =>
	(window.location.href = window.location.href
		.replace(window.location.hash, '')
		.replace(window.location.search, ''));

sebtn.addEventListener('click', showSettings, false);
gbbtn.addEventListener('click', goBack, false);

// copy paste content to clipboard
async function copyPaste() {
	try {
		const lncode = document.getElementsByClassName('hljs-ln-code');
		let content;
		for(let i = 0; i < lncode.length; i++) {
			content === undefined ? (content = lncode.item(0).textContent) : (content += '\n' + lncode[i].textContent);
			// content += lncode.item(item).textContent + '\n';
		}
		await navigator.clipboard.writeText(content);
		alert('Copied Content to clipboard!')
	} catch (err) {
		alert("Failed to copy to clipboard!");
		console.error(err);
	}
}
cpbtn.addEventListener('click', copyPaste, false);

const shortyPost = async () => {
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Accept', 'text/plain');
	const req = await fetch('https://link.what-is.ml/api/new', {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({url: window.location.href}),
	});
	return await req.text();
};

// intermediate function to stop stupid broswers from being dumb
async function _copy() {
	if (localStorage.getItem('shorty') === null) {
		const prompt = confirm(
			'Would you like to use link-shorty as a link shortener?'
		);
		if (prompt === true) {
			localStorage.setItem('shorty', 'true');
			const text = await shortyPost();
			try {
				await navigator.clipboard.writeText(text);
				alert('Copied URL to clipboard!');
			} catch (e) {
				alert('Failed to copy to clipboard!');
				console.error(e);
			}
		} else {
			localStorage.setItem('shorty', 'false');
			alert(
				'To allow you to copy the link you must click the copy button again. browsers are dumb :>'
			);
		}
	} else if (localStorage.getItem('shorty') === 'true') {
		await shortyPost().then((res) => {
			try {
				navigator.clipboard.writeText(res);
				alert('Copied URL to clipboard!');
			} catch (e) {
				alert('Failed to copy to clipboard!');
				console.error(e);
			}
		});
	} else {
		try {
			await navigator.clipboard.writeText(window.location.href);
			alert('Copied URL to clipboard!');
		} catch (e) {
			alert('Failed to copy to clipboard!');
			console.error(e);
		}
	}
}

// copy the URL
async function copy() {
	await _copy();
}
cbtn.addEventListener('click', copy);

// save the paste
async function save() {
	let base64;
	try {
		base64 = btoa(code.value);
	} catch (e) {
		base64 = '';
		alert("Couldn't encode the text. Please try again.");
		console.log(e);
	}
	location.hash = base64;
	location.reload();
}
sbtn.addEventListener('click', save);

const getRuntimes = () => {
	return fetch('https://emkc.org/api/v2/piston/runtimes').then((res) => {
		if (!res.ok) {
			console.error(res.error());
			alert('There was an error: ' + res.error());
			return;
		}
		return res.json();
	});
};

const postCode = async (body) => {
	return fetch('https://emkc.org/api/v2/piston/execute', {
		method: 'POST',
		body: body,
	}).then((res) => {
		if (!res.ok) {
			console.error(res.error());
			alert('There was an error: ' + res.error());
			return;
		}
		return res.json();
	});
};

const showOutput = () => {
	output.parentElement.parentElement.style.display = 'block';
	code2.style.right = '50%';
};

// Display Markdown
async function displayMd() {
	const md = window.markdownit({
		html: true,
		linkify: true,
		typographer: true,
		highlight: async (str, lang) => {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return await hljs.highlight(str, {language: lang}).value;
				} catch (e) {
					console.error(e);
				}
			}
			return str;
		},
	});
	showOutput();
	output.innerHTML = await md.render(code2.textContent);
}

async function runCode() {
	if (!code2.textContent) {
		return;
	}
	if (
		params.get('lang') === 'txt' ||
		params.get('lang') === 'md' ||
		params.get('lang') === 'html' ||
		params.get('lang') === 'xml'
	) {
		displayMd();
		return;
	}
	showOutput();
	let args = prompt(
		'Enter args to pass to the program (seprate with spaces)',
		''
	);
	args = args ? (args.length > 0 ? args.split(' ') : [' ']) : [''];
	const stdin = prompt('Enter input to pass to the program', '');
	output.textContent = '';
	getRuntimes().then((res) => {
		for (let i = 0; i < res.length; i++) {
			if (
				params.get('lang') === res[i].language ||
				res[i].aliases.includes(params.get('lang'))
			) {
				let body = {
					language: res[i].language,
					version: res[i].version,
					files: [
						{
							content: code2.textContent,
						},
					],
					stdin: stdin,
					args: args,
					compile_timeout: 50000,
					run_timeout: 50000,
					compile_memory_limit: -1,
					run_memory_limit: -1,
				};
				body = JSON.stringify(body);
				postCode(body).then((postres) => {
					if ('compile' in postres) {
						const comp_stderr =
							postres.compile.stderr.length > 0
								? postres.compile.stderr
								: 'No Error';
						const comp_stdout =
							postres.compile.stdout.length > 0
								? postres.compile.stdout
								: 'No Output';
						output.textContent = `Compilation Output:\n Stdout: ${comp_stdout}\n Stderr: ${comp_stderr}\n Exit code: ${postres.compile.code}\n\n`;
					}
					const run_stderr =
						postres.run.stderr.length > 0
							? [
									postres.run.stderr.slice(0, postres.run.stderr.indexOf(':')),
									postres.run.stderr.slice(postres.run.stderr.indexOf(':') + 1),
							  ]
							: 'No Error';
					const run_stdout =
						postres.run.stdout.length > 0 ? postres.run.stdout : 'No Output';
					output.textContent += `Execution Output:\n Stdout: ${run_stdout}\n Stderr: ${run_stderr}\n Exit code: ${postres.run.code}`;
				});
			}
		}
	});
}

rcbtn.addEventListener('click', runCode);

// Set keybindings
document.addEventListener('keydown', (e) => {
	e = e || window.event || event;
	const key = e.key;
	if (e.ctrlKey && key === 's') {
		e.preventDefault();
		save();
	}
	if (e.ctrlKey && e.shiftKey && key === 'L') {
		e.preventDefault();
		copy();
	}
	if (e.ctrlKey && e.shiftKey && key === 'C') {
		e.preventDefault();
		copyPaste();
	}
	if (e.ctrlKey && e.shiftKey && key === 'S') {
		e.preventDefault();
		showSettings();
	}
	if (e.ctrlKey && key === 'ArrowLeft') {
		e.preventDefault();
		goBack();
	}
	if (e.ctrlKey && key === '.') {
		e.preventDefault();
		showShortcuts();
	}
	if (e.ctrlKey && e.shiftKey && key === 'R') {
		e.preventDefault();
		runCode();
	}
});

// tab key presses
code.addEventListener('keydown', (e) => {
	e = e || window.event || event;
	const space = ' '.repeat(localStorage.getItem('tab'));
	if (e.key !== 'Tab') return;
	e.preventDefault();
	if (document.selection) {
		code.focus();
		const sel = document.selection.createRange();
		sel.text = space;
		code.focus();
	} else if (code.selectionStart || code.selectionStart === 0) {
		const val = code.value;
		const start = code.selectionStart;
		const end = code.selectionEnd;
		const scrollTop = code.scrollTop;
		code.value = val.slice(0, start) + space + val.substring(start, val.length);
		code.focus();
		code.selectionStart = start + space.length;
		code.selectionEnd = start + space.length;
		code.scrollTop = scrollTop;
	} else {
		code.value += space;
		code.focus();
	}
});

// valid extensions
const extensionMap = {
	rb: 'ruby',
	py: 'python',
	pl: 'perl',
	php: 'php',
	scala: 'scala',
	go: 'go',
	xml: 'xml',
	html: 'xml',
	htm: 'xml',
	css: 'css',
	js: 'javascript',
	vbs: 'vbscript',
	lua: 'lua',
	pas: 'delphi',
	java: 'java',
	cpp: 'cpp',
	cc: 'cpp',
	m: 'objectivec',
	vala: 'vala',
	sql: 'sql',
	sm: 'smalltalk',
	lisp: 'lisp',
	ini: 'ini',
	diff: 'diff',
	bash: 'bash',
	sh: 'bash',
	tex: 'tex',
	erl: 'erlang',
	hs: 'haskell',
	md: 'markdown',
	txt: '',
	coffee: 'coffee',
	swift: 'swift',
};

// get lang by extension
const lookupLangByExtension = (ext) => extensionMap[ext] || ext;
// decode the hash and highlight it. then set it to the code element
(async function () {
	if (b64) {
		let decoded;
		try {
			decoded = atob(b64);
		} catch (e) {
			alert('Invalid Base64!');
			console.log(e);
			return;
		}
		code.disabled = true;
		code.style.display = 'none';
		code2.style.display = 'block';
		sbtn.style.display = 'none';
		cbtn.style.display = 'inline-block';
		cpbtn.style.display = 'inline-block';
		rcbtn.style.display = 'inline-block';
		gbbtn.style.display = 'inline-block';
		if (params.has('lang')) {
			if (params.get('lang') === null || params.get('lang') === '') return;
			if (!hljs.getLanguage(params.get('lang'))) {
				return;
			}
			const lang = params.get('lang').toLowerCase();
			code2.innerHTML = await hljs.highlight(decoded, {
				language: lookupLangByExtension(lang),
				ignoreIllegals: true,
			}).value;
			await hljs.lineNumbersBlock(code2, {singleLine: true});
			document.title = lang ? 'Rpaste - Base64 - ' + lang : 'txt';
		} else {
			const highlight = await hljs.highlightAuto(decoded);
			if (highlight.language === undefined) {
				params.append('lang', 'txt');
			} else {
				params.append('lang', highlight.language);
			}
			window.location.search = params.toString();
			return;
		}
	}
})();
