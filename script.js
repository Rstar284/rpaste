'use strict';
const sbtn = document.getElementById('sbtn');
const cbtn = document.getElementById('cbtn');
const sebtn = document.getElementById('sebtn');
const gbbtn = document.getElementById('gbbtn');
const cpbtn = document.getElementById('rbtn');
const code = document.getElementById('code');
const code2 = document.getElementById('code2');
const settingsModal = document.getElementById('settingsModal');
const themebox = document.getElementById('theme');
const fontSizeSlider = document.getElementById('fontSize');
const fontSizeVal = document.getElementById('fontSizeVal');
const fontSizeCode = document.getElementById('fontSizeCode');
const tabSpaceSelect = document.getElementById('tabSpaceSelect');
const themeSelect = document.getElementById('themeSelect');
const shortcutModal = document.getElementById('shortcutsModal');

console.log('UwU OwO UwU OwO UwU OwO UwU'); // a little easter egg hehe

code.disabled = false;
cbtn.style.display = 'none';
sbtn.style.display = 'inline-block';
sebtn.style.display = 'inline-block';
cpbtn.style.display = 'none';
gbbtn.style.display = 'inline-block';
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
	link.href = `themes/${theme}.css`;
	document.head.appendChild(link);
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
if (localStorage.getItem('fontSize') === null) {
	fontSizeCode.style.fontSize = '16px';
	fontSizeVal.textContent = '16px';
	fontSizeSlider.value = 16;
} else {
	code.style.fontSize = localStorage.getItem('fontSize').toString() + 'px';
	code2.style.fontSize = localStorage.getItem('fontSize').toString() + 'px';
	fontSizeVal.textContent = localStorage.getItem('fontSize') + 'px';
	fontSizeCode.style.fontSize =
		localStorage.getItem('fontSize').toString() + 'px';
	fontSizeSlider.value = localStorage.getItem('fontSize');
}
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

themebox.addEventListener('change', toggleTheme, false);
fontSizeSlider.addEventListener('input', function () {
	fontSizeVal.textContent = this.value + 'px';
	fontSizeCode.style.fontSize = this.value + 'px';
});
fontSizeSlider.addEventListener('change', function () {
	localStorage.setItem('fontSize', this.value);
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
	await navigator.clipboard.writeText(code2.textContent);
	alert('Copied Content to clipboard!');
}
cpbtn.addEventListener('click', copyPaste, false);

// copy the URL
async function copy() {
	await navigator.clipboard.writeText(window.location.href);
	alert('Copied URL to clipboard!');
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
		if (params.has('lang')) {
			if (params.get('lang') === null || params.get('lang') === '') return;
			const lang = params.get('lang').toLowerCase();
			code2.innerHTML = await hljs.highlight(decoded, {
				language: lookupLangByExtension(lang),
				ignoreIllegals: true,
			}).value;
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
