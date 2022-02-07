'use strict';
document.addEventListener('DOMContentLoaded', async function () {
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

	console.log('UwU OwO UwU OwO UwU OwO UwU'); // a little easter egg hehe

	code.disabled = false;
	cbtn.style.display = 'none';
	sbtn.style.display = 'inline-block';
	sebtn.style.display = 'inline-block';
	cpbtn.style.display = 'none';
	gbbtn.style.display = 'inline-block';
	code.focus();
	code2.style.display = 'none';

	const b64 = location.hash.substr(1);
	const params = new URLSearchParams(window.location.search);

	function setTheme(themeName) {
		localStorage.setItem('theme', themeName);
		document.documentElement.className = themeName;
	}
	function toggleTheme() {
		if (localStorage.getItem('theme') === 'dark') {
			setTheme('light');
			themebox.checked = false;
		} else {
			setTheme('dark');
			themebox.checked = true;
		}
	}
	(function () {
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
	})();
	(function () {
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
	})();

	themebox.addEventListener('change', toggleTheme, false);
	fontSizeSlider.addEventListener('input', function () {
		fontSizeVal.textContent = this.value + 'px';
		fontSizeCode.style.fontSize = this.value + 'px';
	});
	fontSizeSlider.addEventListener('change', function () {
		localStorage.setItem('fontSize', this.value);
	});
	function goToSettings() {
		params.append('settings', '');
		window.location.search = params.toString();
	}
	function goBack() {
		if (params.has('settings')) {
			params.delete('settings');
			window.location.search = params.toString();
		} else {
			window.location.href = window.location.href
				.replace(window.location.hash, '')
				.replace(window.location.search, '');
		}
	}
	sebtn.addEventListener('click', goToSettings, false);
	gbbtn.addEventListener('click', goBack, false);
	async function copyPaste() {
		await navigator.clipboard.writeText(code2.textContent);
		alert('Copied Content to clipboard!');
	}
	cpbtn.addEventListener('click', copyPaste, false);
	if (params.has('settings')) {
		settingsModal.style.display = 'block';
	}

	async function copy() {
		await navigator.clipboard.writeText(window.location.href);
		alert('Copied URL to clipboard!');
	}
	cbtn.addEventListener('click', copy);
	async function save() {
		let base64;
		try {
			base64 = await btoa(code.value);
		} catch (e) {
			base64 = '';
			alert("Couldn't encode the text. Please try again.");
			console.log(e);
		}
		location.hash = base64;
		location.reload();
	}
	sbtn.addEventListener('click', save);
	document.addEventListener('keydown', function (e) {
		e = e || event || window.event;
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
			if (params.has('settings')) {
				return;
			}
			goToSettings();
		}
		if (e.ctrlKey && key === 'ArrowLeft') {
			e.preventDefault();
			goBack();
		}
	});
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
	const lookupTypeByExtension = function (ext) {
		return extensionMap[ext] || ext;
	};
	if (b64) {
		let decoded;
		try {
			decoded = await atob(b64);
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
				language: lookupTypeByExtension(lang),
				ignoreIllegals: true,
			}).value;
			document.title = lang ? 'Rpaste - Base64 - ' + lang : 'txt';
			document.head.querySelector('meta[name="title"]').content = lang
				? 'Rpaste - Base64 - ' + lang
				: 'txt';
			return;
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
});
