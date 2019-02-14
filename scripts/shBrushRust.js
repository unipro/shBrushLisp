/*
 * SyntaxHighlighter 3.0 brush for Rust.
 * - forked from https://silight.hatenablog.jp/entry/2015/06/18/211724
 */

;(function() {
    // CommonJS
    SyntaxHighlighter = (SyntaxHighlighter
                         || (typeof require !== 'undefined'
                             ? require('shCore').SyntaxHighlighter
                             : null));

    function Brush() {
        var datatypes = 'u8 i8 u16 i16 u32 i32 u64 i64 f32 f64 '
                      + 'isize usize bool char str Box '
                      + 'Option Result String Vec Some None Ok Err';

        var keywords = 'abstract alignof as become box '
                     + 'break const continue crate do '
                     + 'else enum extern false final '
                     + 'fn for if impl in '
                     + 'let loop macro match mod '
                     + 'move mut offsetof override priv '
                     + 'proc pub pure ref return '
                     + 'Self self sizeof static struct '
                     + 'super trait true type typeof '
                     + 'unsafe unsized use virtual where '
                     + 'while yield';

        var functions = 'drop default from';

        var macros = 'assert assert_eq cfg column concat concat_idents '
                     + 'debug_assert debug_assert_eq env file format '
                     + 'format_args include include_bytes include_str '
                     + 'line module_path option_env panic print println '
                     + 'scoped_thread_local select stringify thread_local '
                     + 'try unimplemented unreachable vec write writeln';

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLineCComments,
              css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.multiLineCComments,
              css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString,
              css: 'string' },
            { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,
              css: 'string' },
            { regex: XRegExp('r(#*)"([^\\\\"]|\\\\.)*\\1"', 'gs'), // raw string
              css: 'string' },
            { regex: /b"([^\\"\n]|\\.)*"/g, css: 'string' }, // byte string
            { regex: /^ *#\!\[[^\]]+\]/gm, css: 'preprocessor' },
            { regex: new RegExp(this.getKeywords(datatypes), 'gm'),
              css: 'keyword' },
            { regex: new RegExp('(' + this.getKeywords(macros) + ')\!', 'gm'),
              css: 'keyword' },
            { regex: new RegExp(this.getKeywords(functions), 'gm'),
              css: 'functions' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'),
              css: 'keyword' }
        ];
    };

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['rust', 'rs'];

    SyntaxHighlighter.brushes.Rust = Brush;

    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
