document.addEventListener('DOMContentLoaded', function () {
    const sbtn = document.getElementById('sbtn')
    const cbtn = document.getElementById('cbtn')
    const code = document.getElementById('code')
    const code2 = document.getElementById('code2')
    const settingsModal = document.getElementById('settingsModal')
    const themebox = document.getElementById('theme')
    const fontSizeSlider = document.getElementById('fontSize')
    const fontSizeVal = document.getElementById('fontSizeVal')
    const fontSizeCode = document.getElementById('fontSizeCode')

    code.disabled = false
    cbtn.style.display = 'none'
    sbtn.style.display = 'inline-block'
    code.focus()
    code2.style.display = 'none'

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    (function () {
        if (localStorage.getItem('theme') === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    })();
    (function () {
        if(localStorage.getItem('fontSize') === null) {
            fontSizeCode.style.fontSize = '16px'
            fontSizeVal.innerHTML = '16px'
        } else {
            code.style.fontSize = localStorage.getItem('fontSize').toString()+'px'
            code2.style.fontSize = localStorage.getItem('fontSize').toString()+'px'
            fontSizeVal.innerHTML = localStorage.getItem('fontSize')
            fontSizeCode.style.fontSize = localStorage.getItem('fontSize').toString()+'px'
        }
    })()

    themebox.addEventListener('change', toggleTheme, false)
    fontSizeSlider.addEventListener('input', function () {
        fontSizeVal.innerHTML = this.value
        fontSizeCode.style.fontSize = this.value + 'px'
    })
    fontSizeSlider.addEventListener('change', function () {
        localStorage.setItem('fontSize', this.value)
    })

    const params = new URLSearchParams(window.location.search)
    if(params.has('settings')) {
        code.disabled = true
        sbtn.style.display = 'none'
        settingsModal.style.display = 'block'
        code.style.display = 'none'
        code2.style.display = 'none'
        fontSizeCode.innerHTML = hljs.highlight('console.log("Hello!")', {language: 'js'}).value
    }

    function copy() {
        navigator.clipboard.writeText(window.location.href).then(function () {alert('Copied to clipboard!')})
    }
    cbtn.addEventListener('click', copy)
    function save() {
        const base64 = btoa(code.value)
        location.hash = base64
        location.reload()
    }
    sbtn.addEventListener('click', save)
    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
    }
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
    }
    const lookupTypeByExtension = function (ext) {
        return extensionMap[ext] || ext
    }
    const b64 = location.hash.substr(1)
    if (b64) {
        const decoded = atob(b64)
        code.disabled = true
        code.style.display = 'none'
        code2.style.display = 'block'
        code2.innerHTML = escapeHTML(decoded)
        sbtn.style.display = 'none'
        cbtn.style.display = 'inline-block'
        if (params.has('lang')) {
            if (params.get('lang') === null || params.get('lang') === '') return
            const lang = params.get('lang').toLowerCase()
            code2.innerHTML = hljs.highlight(decoded, {
                language: lookupTypeByExtension(lang),
                ignoreIllegals: true,
            }).value
            document.title = lang ? 'Rpaste - Base64 - ' + lang : 'txt'
            return
        } else {
            hljs.highlightElement(code2)
            return
        }
    }
})