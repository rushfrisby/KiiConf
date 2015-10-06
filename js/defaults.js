var APP = APP || {};

APP.keyDefaults = {
'A': { y: 13, x: 17, w: 4, h: 4 },
'B': { y: 17, x: 35, w: 4, h: 4 },
'C': { y: 17, x: 27, w: 4, h: 4 },
'D': { y: 13, x: 25, w: 4, h: 4 },
'E': { y: 9, x: 24, w: 4, h: 4 },
'F': { y: 13, x: 29, w: 4, h: 4 },
'G': { y: 13, x: 33, w: 4, h: 4 },
'H': { y: 13, x: 37, w: 4, h: 4 },
'I': { y: 9, x: 44, w: 4, h: 4 },
'J': { y: 13, x: 41, w: 4, h: 4 },
'K': { y: 13, x: 45, w: 4, h: 4 },
'L': { y: 13, x: 49, w: 4, h: 4 },
'M': { y: 17, x: 43, w: 4, h: 4 },
'N': { y: 17, x: 39, w: 4, h: 4 },
'O': { y: 9, x: 48, w: 4, h: 4 },
'P': { y: 9, x: 52, w: 4, h: 4 },
'Q': { y: 9, x: 16, w: 4, h: 4 },
'R': { y: 9, x: 28, w: 4, h: 4 },
'S': { y: 13, x: 21, w: 4, h: 4 },
'T': { y: 9, x: 32, w: 4, h: 4 },
'U': { y: 9, x: 40, w: 4, h: 4 },
'V': { y: 17, x: 31, w: 4, h: 4 },
'W': { y: 9, x: 20, w: 4, h: 4 },
'X': { y: 17, x: 23, w: 4, h: 4 },
'Y': { y: 9, x: 36, w: 4, h: 4 },
'Z': { y: 17, x: 19, w: 4, h: 4 },
'1': { y: 5, x: 14, w: 4, h: 4 },
'2': { y: 5, x: 18, w: 4, h: 4 },
'3': { y: 5, x: 22, w: 4, h: 4 },
'4': { y: 5, x: 26, w: 4, h: 4 },
'5': { y: 5, x: 30, w: 4, h: 4 },
'6': { y: 5, x: 34, w: 4, h: 4 },
'7': { y: 5, x: 38, w: 4, h: 4 },
'8': { y: 5, x: 42, w: 4, h: 4 },
'9': { y: 5, x: 46, w: 4, h: 4 },
'0': { y: 5, x: 50, w: 4, h: 4 },

'SPACE': { y: 21, x: 25, w: 25, h: 4, label: '[&nbsp;]' }, 'SPACEBAR': { y: 21, x: 25, w: 25, h: 4, label: '[&nbsp;]' },
'ENTER': { y: 13, x: 61, w: 9, h: 4, label: '↵' },
'ESC': { y: 0, x: 10, w: 4, h: 4 }, 'ESCAPE': { y: 0, x: 10, w: 4, h: 4, label: 'ESC' },
'BACKSPACE': { y: 5, x: 62, w: 8, h: 4, label: 'BKSP' },
'TAB': { y: 9, x: 10, w: 6, h: 4 },
'CAPSLOCK': { y: 13, x: 10, w: 7, h: 4, label: 'CAPSLK', group: 'standard' }, 'CAPS LOCK': { y: 13, x: 10, w: 7, h: 4, label: 'CAPSLK' },
'PRINTSCREEN': { y: 0, x: 0, w: 4, h: 4, label: 'PRSC', group: 'standard' }, 'PRINT SCREEN': { y: 0, x: 0, w: 4, h: 4, label: 'PRSC' },
'SCROLLLOCK': { y: 0, x: 0, w: 4, h: 4, label: 'SCLK', group: 'standard' }, 'SCROLL LOCK': { y: 0, x: 0, w: 4, h: 4, label: 'SCLK' },
'PAUSE': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'INSERT': { y: 0, x: 0, w: 4, h: 4, label: 'INS', group: 'standard' },
'HOME': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'PAGEUP': { y: 0, x: 0, w: 4, h: 4, label: 'PGUP', group: 'standard' }, 'PAGE UP': { y: 0, x: 0, w: 4, h: 4, label: 'PGUP' },
'DELETE': { y: 0, x: 0, w: 4, h: 4, label: 'DEL', group: 'standard' },
'END': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'PAGEDOWN': { y: 0, x: 0, w: 4, h: 4, label: 'PGDN', group: 'standard' }, 'PAGE DOWN': { y: 0, x: 0, w: 4, h: 4, label: 'PGDN' },
'LEFT': { y: 0, x: 0, w: 4, h: 4, label: '←', group: 'standard' },
'RIGHT': { y: 0, x: 0, w: 4, h: 4, label: '→', group: 'standard' },
'UP': { y: 0, x: 0, w: 4, h: 4, label: '↑', group: 'standard' },
'DOWN': { y: 0, x: 0, w: 4, h: 4, label: '↓', group: 'standard' },
'NUMLOCK': { y: 0, x: 0, w: 4, h: 4, label: 'NMLK', group: 'standard' }, 'NUM LOCK': { y: 0, x: 0, w: 4, h: 4, label: 'NMLK' },
'LCTRL': { y: 21, x: 10, w: 5, h: 4, group: 'standard' }, 'LEFT CTRL': { y: 21, x: 10, w: 5, h: 4, label: 'LCTRL' }, 'CTRL': { y: 21, x: 10, w: 5, h: 4, label: 'LCTRL' }, 'CONTROL': { y: 21, x: 10, w: 5, h: 4, label: 'LCTRL' }, 'LEFT CONTROL': { y: 21, x: 10, w: 5, h: 4, label: 'LCTRL' },
'LSHIFT': { y: 17, x: 10, w: 9, h: 4, label: 'L⇑', group: 'standard' }, 'LEFT SHIFT': { y: 17, x: 10, w: 9, h: 4, label: 'L⇑' }, 'SHIFT': { y: 17, x: 10, w: 9, h: 4, label: 'L⇑' },
'LALT': { y: 21, x: 20, w: 5, h: 4, group: 'standard' }, 'LEFT ALT': { y: 21, x: 20, w: 5, h: 4 }, 'ALT': { y: 21, x: 20, w: 5, h: 4 }, 'ALTERNATE': { y: 21, x: 20, w: 5, h: 4 }, 'LEFT ALTERNATE': { y: 21, x: 20, w: 5, h: 4 },
'LGUI': { y: 21, x: 15, w: 5, h: 4, group: 'standard' }, 'LEFT GUI': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'GUI': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'SUPER': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'LEFT SUPER': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'WINDOWS': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'LEFT WINDOWS': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'WIN': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' }, 'LEFT WIN': { y: 21, x: 15, w: 5, h: 4, label: 'LGUI' },
'RCTRL': { y: 21, x: 55, w: 5, h: 4, group: 'standard' }, 'RIGHT CTRL': { y: 21, x: 55, w: 5, h: 4, label: 'RCTRL' }, 'RIGHT CONTROL': { y: 21, x: 55, w: 5, h: 4, label: 'RCTRL' },
'RSHIFT': { y: 17, x: 59, w: 11, h: 4, label: 'R⇑', group: 'standard' }, 'RIGHT SHIFT': { y: 17, x: 59, w: 11, h: 4, label: 'R⇑' },
'RALT': { y: 21, x: 50, w: 5, h: 4, group: 'standard' }, 'RIGHT ALT': { y: 21, x: 50, w: 5, h: 4, label: 'RALT' }, 'RIGHT ALTERNATE': { y: 21, x: 50, w: 5, h: 4, label: 'RALT' },
'RGUI': { y: 21, x: 55, w: 5, h: 4, group: 'standard' }, 'RIGHT GUI': { y: 21, x: 55, w: 5, h: 4, label: 'RGUI' }, 'RIGHT SUPER': { y: 21, x: 55, w: 5, h: 4, label: 'RGUI' }, 'RIGHT WINDOWS': { y: 21, x: 55, w: 5, h: 4, label: 'RGUI' }, 'RIGHT WIN': { y: 21, x: 55, w: 5, h: 4, label: 'RGUI' },

'-': { y: 5, x: 54, w: 4, h: 4 }, 'MINUS': { y: 5, x: 54, w: 4, h: 4, label: '-' },
'=': { y: 5, x: 58, w: 4, h: 4 }, 'EQUALS': { y: 5, x: 58, w: 4, h: 4, label: '=' }, 'EQUAL': { y: 5, x: 58, w: 4, h: 4, label: '=' },
'[': { y: 9, x: 56, w: 4, h: 4 }, 'LEFT BRACE': { y: 9, x: 56, w: 4, h: 4, label: '[' }, 'LBRACE': { y: 9, x: 56, w: 4, h: 4, label: '[' },
']': { y: 9, x: 60, w: 4, h: 4 }, 'RIGHT BRACE': { y: 9, x: 60, w: 4, h: 4, label: ']' }, 'RBRACE': { y: 9, x: 60, w: 4, h: 4, label: ']' },
'\\': { y: 9, x: 64, w: 6, h: 4 }, 'BACKSLASH': { y: 9, x: 64, w: 6, h: 4, label: '\\' },
'#': { y: 0, x: 0, w: 4, h: 4 }, 'NUMBER': { y: 0, x: 0, w: 4, h: 4, label: '#' }, 'HASH': { y: 0, x: 0, w: 4, h: 4, label: '#' },
';': { y: 13, x: 53, w: 4, h: 4 }, 'SEMICOLON': { y: 13, x: 53, w: 4, h: 4, label: ';' },
'\'': { y: 13, x: 57, w: 4, h: 4 }, 'QUOTE': { y: 13, x: 57, w: 4, h: 4, label: '\'' }, 'SINGLE QUOTE': { y: 13, x: 57, w: 4, h: 4, label: '\'' },
'`': { y: 5, x: 10, w: 4, h: 4 }, 'BACKTICK': { y: 5, x: 10, w: 4, h: 4, label: '`' },
',': { y: 17, x: 47, w: 4, h: 4 }, 'COMMA': { y: 17, x: 47, w: 4, h: 4, label: ',' },
'.': { y: 17, x: 51, w: 4, h: 4 }, 'PERIOD': { y: 17, x: 51, w: 4, h: 4, label: '.' },
'/': { y: 17, x: 55, w: 4, h: 4 }, 'SLASH': { y: 17, x: 55, w: 4, h: 4, label: '/' },

'F1': { y: 0, x: 18, w: 4, h: 4, group: 'standard' },
'F2': { y: 0, x: 22, w: 4, h: 4, group: 'standard' },
'F3': { y: 0, x: 26, w: 4, h: 4, group: 'standard' },
'F4': { y: 0, x: 30, w: 4, h: 4, group: 'standard' },
'F5': { y: 0, x: 36, w: 4, h: 4, group: 'standard' },
'F6': { y: 0, x: 40, w: 4, h: 4, group: 'standard' },
'F7': { y: 0, x: 44, w: 4, h: 4, group: 'standard' },
'F8': { y: 0, x: 48, w: 4, h: 4, group: 'standard' },
'F9': { y: 0, x: 54, w: 4, h: 4, group: 'standard' },
'F10': { y: 0, x: 58, w: 4, h: 4, group: 'standard' },
'F11': { y: 0, x: 62, w: 4, h: 4, group: 'standard' },
'F12': { y: 0, x: 66, w: 4, h: 4, group: 'standard' },
'F13': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'F14': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'F15': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'F16': { y: 0, x: 0, w: 4, h: 4, group: 'standard' },
'F17': { y: 0, x: 0, w: 4, h: 4 },
'F18': { y: 0, x: 0, w: 4, h: 4 },
'F19': { y: 0, x: 0, w: 4, h: 4 },
'F20': { y: 0, x: 0, w: 4, h: 4 },
'F21': { y: 0, x: 0, w: 4, h: 4 },
'F22': { y: 0, x: 0, w: 4, h: 4 },
'F23': { y: 0, x: 0, w: 4, h: 4 },
'F24': { y: 0, x: 0, w: 4, h: 4 },

'P/': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD SLASH': { y: 0, x: 0, w: 4, h: 4 },
'P*': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD ASTERIX': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD ASTERISK': { y: 0, x: 0, w: 4, h: 4 },
'P-': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD MINUS': { y: 0, x: 0, w: 4, h: 4 },
'P+': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD PLUS': { y: 0, x: 0, w: 4, h: 4 },
'PENTER': { y: 0, x: 0, w: 4, h: 8, label: 'P↵', group: 'numpad' }, 'KEYPAD ENTER': { y: 0, x: 0, w: 4, h: 8 },
'P1': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 1': { y: 0, x: 0, w: 4, h: 4 },
'P2': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 2': { y: 0, x: 0, w: 4, h: 4 },
'P3': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 3': { y: 0, x: 0, w: 4, h: 4 },
'P4': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 4': { y: 0, x: 0, w: 4, h: 4 },
'P5': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 5': { y: 0, x: 0, w: 4, h: 4 },
'P6': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 6': { y: 0, x: 0, w: 4, h: 4 },
'P7': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 7': { y: 0, x: 0, w: 4, h: 4 },
'P8': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 8': { y: 0, x: 0, w: 4, h: 4 },
'P9': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 9': { y: 0, x: 0, w: 4, h: 4 },
'P0': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD 0': { y: 0, x: 0, w: 4, h: 4 },
'P.': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD PERIOD': { y: 0, x: 0, w: 4, h: 4 },
'P,': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' },
'P=': { y: 0, x: 0, w: 4, h: 4, group: 'numpad' }, 'KEYPAD EQUAL': { y: 0, x: 0, w: 4, h: 4 },

'ISO/': { y: 0, x: 0, w: 4, h: 4 }, 'ISO SLASH': { y: 0, x: 0, w: 4, h: 4 },
'APP': { y: 0, x: 0, w: 4, h: 4 },

'EXEC': { y: 0, x: 0, w: 4, h: 4 },
'HELP': { y: 0, x: 0, w: 4, h: 4 },
'MENU': { y: 0, x: 0, w: 4, h: 4 },
'SELECT': { y: 0, x: 0, w: 4, h: 4 },
'STOP': { y: 0, x: 0, w: 4, h: 4 },
'AGAIN': { y: 0, x: 0, w: 4, h: 4 },
'UNDO': { y: 0, x: 0, w: 4, h: 4 },
'CUT': { y: 0, x: 0, w: 4, h: 4 },
'COPY': { y: 0, x: 0, w: 4, h: 4 },
'PASTE': { y: 0, x: 0, w: 4, h: 4 },
'FIND': { y: 0, x: 0, w: 4, h: 4 },

'CONS:MUTE': { y: 0, x: 0, w: 4, h: 4, label: 'MUTE', group: 'multimedia' },
'CONS:VOLUMEUP': { y: 0, x: 0, w: 4, h: 4, label: 'VOL+', group: 'multimedia' }, 'CONS:VOLUME UP': { y: 0, x: 0, w: 4, h: 4 },
'CONS:VOLUMEDOWN': { y: 0, x: 0, w: 4, h: 4, label: 'VOL-', group: 'multimedia' }, 'CONS:VOLUME DOWN': { y: 0, x: 0, w: 4, h: 4 },
'CONS:PAUSEPLAY': { y: 0, x: 0, w: 4, h: 4, label: 'PL/PS', group: 'multimedia' },
'CONS:PLAY': { y: 0, x: 0, w: 4, h: 4, label: 'PLAY', group: 'multimedia' },
'CONS:PAUSE': { y: 0, x: 0, w: 4, h: 4, label: 'PAUSE', group: 'multimedia' },
'CONS:FASTFORWARD': { y: 0, x: 0, w: 4, h: 4, label: 'FF', group: 'multimedia' },
'CONS:REWIND': { y: 0, x: 0, w: 4, h: 4, label: 'RW', group: 'multimedia' },
'CONS:SCANNEXTTRACK': { y: 0, x: 0, w: 4, h: 4, label: 'NEXT', group: 'multimedia' },
'CONS:SCANPREVIOUSTRACK': { y: 0, x: 0, w: 4, h: 4, label: 'PREV', group: 'multimedia' },
'CONS:STOP': { y: 0, x: 0, w: 4, h: 4, label: 'STOP', group: 'multimedia' },
'CONS:EJECT': { y: 0, x: 0, w: 4, h: 4, label: 'EJECT', group: 'multimedia' },
'CONS:CALCULATOR': { y: 0, x: 0, w: 4, h: 4, label: 'CALC', group: 'multimedia' },
'CONS:INTERNETBROWSER': { y: 0, x: 0, w: 4, h: 4, label: 'WEB', group: 'multimedia' },
'CONS:FILEBROWSER': { y: 0, x: 0, w: 4, h: 4, label: 'FILES', group: 'multimedia' },

'SYS:POWERDOWN': { y: 0, x: 0, w: 4, h: 4, label: 'POWER', group: 'multimedia' },
'SYS:SLEEP': { y: 0, x: 0, w: 4, h: 4, label: 'SLEEP', group: 'multimedia' },
'SYS:WAKEUP': { y: 0, x: 0, w: 4, h: 4, label: 'WAKEUP', group: 'multimedia' },

'CAPSTOGGLELOCK': { y: 0, x: 0, w: 4, h: 4 }, 'CAPS TOGGLE LOCK': { y: 0, x: 0, w: 4, h: 4 },
'NUMTOGGLELOCK': { y: 0, x: 0, w: 4, h: 4 }, 'NUM TOGGLE LOCK': { y: 0, x: 0, w: 4, h: 4 },
'SCROLLTOGGLELOCK': { y: 0, x: 0, w: 4, h: 4 }, 'SCROLL TOGGLE LOCK': { y: 0, x: 0, w: 4, h: 4 },

'KEYPAD AS400 EQUAL': { y: 0, x: 0, w: 4, h: 4 },
'INTER1': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI1': { y: 0, x: 0, w: 4, h: 4 },
'INTER2': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI2': { y: 0, x: 0, w: 4, h: 4 }, 'KANA': { y: 0, x: 0, w: 4, h: 4 },
'INTER3': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI3': { y: 0, x: 0, w: 4, h: 4 }, 'YEN': { y: 0, x: 0, w: 4, h: 4 },
'INTER4': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI4': { y: 0, x: 0, w: 4, h: 4 }, 'HENKAN': { y: 0, x: 0, w: 4, h: 4 },
'INTER5': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI5': { y: 0, x: 0, w: 4, h: 4 }, 'MUHENKAN': { y: 0, x: 0, w: 4, h: 4 },
'INTER6': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI6': { y: 0, x: 0, w: 4, h: 4 },
'INTER7': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI7': { y: 0, x: 0, w: 4, h: 4 }, 'BYTETOGGLE': { y: 0, x: 0, w: 4, h: 4 }, 'BYTE TOGGLE': { y: 0, x: 0, w: 4, h: 4 },
'INTER8': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI8': { y: 0, x: 0, w: 4, h: 4 },
'INTER9': { y: 0, x: 0, w: 4, h: 4 }, 'KANJI9': { y: 0, x: 0, w: 4, h: 4 },
'LANG1': { y: 0, x: 0, w: 4, h: 4 }, 'HANGULENGLISH': { y: 0, x: 0, w: 4, h: 4 }, 'HANGUL ENGLISH': { y: 0, x: 0, w: 4, h: 4 },
'LANG2': { y: 0, x: 0, w: 4, h: 4 }, 'HANJA': { y: 0, x: 0, w: 4, h: 4 }, 'EISU': { y: 0, x: 0, w: 4, h: 4 },
'LANG3': { y: 0, x: 0, w: 4, h: 4 }, 'KATAKANA': { y: 0, x: 0, w: 4, h: 4 },
'LANG4': { y: 0, x: 0, w: 4, h: 4 }, 'HIRAGANA': { y: 0, x: 0, w: 4, h: 4 },
'LANG5': { y: 0, x: 0, w: 4, h: 4 }, 'ZENKAKUHANKAKU': { y: 0, x: 0, w: 4, h: 4 }, 'ZENKAKU HANKAKU': { y: 0, x: 0, w: 4, h: 4 },
'LANG6': { y: 0, x: 0, w: 4, h: 4 },
'LANG7': { y: 0, x: 0, w: 4, h: 4 },
'LANG8': { y: 0, x: 0, w: 4, h: 4 },
'LANG9': { y: 0, x: 0, w: 4, h: 4 },
'ALTERASE': { y: 0, x: 0, w: 4, h: 4 }, 'ALT ERASE': { y: 0, x: 0, w: 4, h: 4 },
'SYSREQATT': { y: 0, x: 0, w: 4, h: 4 }, 'SYSREQ': { y: 0, x: 0, w: 4, h: 4 }, 'SYSTEM REQUEST': { y: 0, x: 0, w: 4, h: 4 },
'CANCEL': { y: 0, x: 0, w: 4, h: 4 },
'CLEAR': { y: 0, x: 0, w: 4, h: 4 },
'PRIOR': { y: 0, x: 0, w: 4, h: 4 },
'RETURN': { y: 0, x: 0, w: 4, h: 4 },
'SEP': { y: 0, x: 0, w: 4, h: 4 }, 'SEPARATOR': { y: 0, x: 0, w: 4, h: 4 },
'OUT': { y: 0, x: 0, w: 4, h: 4 },
'OPER': { y: 0, x: 0, w: 4, h: 4 },
'CLEAR AGAIN': { y: 0, x: 0, w: 4, h: 4 },
'CRSEL PROPS': { y: 0, x: 0, w: 4, h: 4 },
'EXSEL': { y: 0, x: 0, w: 4, h: 4 },

'P00': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD 00': { y: 0, x: 0, w: 4, h: 4 },
'P000': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD 000': { y: 0, x: 0, w: 4, h: 4 },
'1000SEP': { y: 0, x: 0, w: 4, h: 4 }, 'THOUSANDSEPARATOR': { y: 0, x: 0, w: 4, h: 4 }, 'THOUSAND SEPARATOR': { y: 0, x: 0, w: 4, h: 4 },
'DECIMALSEP': { y: 0, x: 0, w: 4, h: 4 }, 'DECIMALSEPARATOR': { y: 0, x: 0, w: 4, h: 4 }, 'DECIMAL SEPARATOR': { y: 0, x: 0, w: 4, h: 4 },
'CURRENCY': { y: 0, x: 0, w: 4, h: 4 }, 'CURRENCYUNIT': { y: 0, x: 0, w: 4, h: 4 }, 'CURRENCY UNIT': { y: 0, x: 0, w: 4, h: 4 },
'CURRENCYSUB': { y: 0, x: 0, w: 4, h: 4 }, 'CURRENCYSUBUNIT': { y: 0, x: 0, w: 4, h: 4 }, 'CURRENCY SUB UNIT': { y: 0, x: 0, w: 4, h: 4 },
'P(': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD LEFT PARENTHESES': { y: 0, x: 0, w: 4, h: 4 },
'P)': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD RIGHT PARENTHESES': { y: 0, x: 0, w: 4, h: 4 },
'P{': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD LEFT BRACE': { y: 0, x: 0, w: 4, h: 4 },
'P}': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD RIGHT BRACE': { y: 0, x: 0, w: 4, h: 4 },
'PTAB': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD TAB': { y: 0, x: 0, w: 4, h: 4 },
'PBACKSPACE': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD BACKSPACE': { y: 0, x: 0, w: 4, h: 4 },
'PA': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD A': { y: 0, x: 0, w: 4, h: 4 },
'PB': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD B': { y: 0, x: 0, w: 4, h: 4 },
'PC': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD C': { y: 0, x: 0, w: 4, h: 4 },
'PD': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD D': { y: 0, x: 0, w: 4, h: 4 },
'PE': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD E': { y: 0, x: 0, w: 4, h: 4 },
'PF': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD F': { y: 0, x: 0, w: 4, h: 4 },
'PXOR': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD XOR': { y: 0, x: 0, w: 4, h: 4 },
'P^': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD CHEVRON': { y: 0, x: 0, w: 4, h: 4 },
'P%': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD PERCENT': { y: 0, x: 0, w: 4, h: 4 },
'P<': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD LESSTHAN': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD LESS THAN': { y: 0, x: 0, w: 4, h: 4 },
'P>': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD GREATERTHAN': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD GREATER THAN': { y: 0, x: 0, w: 4, h: 4 },
'P&': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD BITAND': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD BIT AND': { y: 0, x: 0, w: 4, h: 4 },
'P&&': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD AND': { y: 0, x: 0, w: 4, h: 4 },
'P|': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD BITOR': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD BIT OR': { y: 0, x: 0, w: 4, h: 4 },
'P||': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD OR': { y: 0, x: 0, w: 4, h: 4 },
'P:': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD COLON': { y: 0, x: 0, w: 4, h: 4 },
'P#': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD NUMBER': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD HASH': { y: 0, x: 0, w: 4, h: 4 },
'PSPACE': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD SPACE': { y: 0, x: 0, w: 4, h: 4 },
'P@': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD AT': { y: 0, x: 0, w: 4, h: 4 },
'P!': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD EXCLAIM': { y: 0, x: 0, w: 4, h: 4 },
'PMEMSTORE': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMSTORE': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY STORE': { y: 0, x: 0, w: 4, h: 4 },
'PMEMRECALL': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMRECALL': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY RECALL': { y: 0, x: 0, w: 4, h: 4 },
'PMEMCLEAR': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMCLEAR': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY CLEAR': { y: 0, x: 0, w: 4, h: 4 },
'PMEMADD': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMADD': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY ADD': { y: 0, x: 0, w: 4, h: 4 },
'PMEMSUB': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMSUB': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY SUB': { y: 0, x: 0, w: 4, h: 4 },
'PMEMMULT': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMMULT': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY MULTIPLY': { y: 0, x: 0, w: 4, h: 4 },
'PMEMDIV': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMDIV': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD MEMORY DIVIDE': { y: 0, x: 0, w: 4, h: 4 },
'P+/-': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD PLUSMINUS': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD PLUS MINUS': { y: 0, x: 0, w: 4, h: 4 },
'PCLEAR': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD CLEAR': { y: 0, x: 0, w: 4, h: 4 },
'PCLEARENTRY': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD CLEARENTRY': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD CLEAR ENTRY': { y: 0, x: 0, w: 4, h: 4 },
'PBINARY': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD BINARY': { y: 0, x: 0, w: 4, h: 4 },
'POCTAL': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD OCTAL': { y: 0, x: 0, w: 4, h: 4 },
'PDECIMAL': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD DECIMAL': { y: 0, x: 0, w: 4, h: 4 },
'PHEX': { y: 0, x: 0, w: 4, h: 4 }, 'KEYPAD HEX': { y: 0, x: 0, w: 4, h: 4 },

'#:None': { label: 'NONE', group: 'special' },

'NLayer': { y: 28, x: 0, w: 4, h: 4, label: 'NEXT-ƒ' },'NEXT LAYER': { y: 28, x: 0, w: 4, h: 4, label: 'NEXT-ƒ', group: 'special' },
'PLayer': { y: 28, x: 4, w: 4, h: 4, label: 'PREV-ƒ' },'PREV LAYER': { y: 28, x: 4, w: 4, h: 4, label: 'PREV-ƒ', group: 'special' },

'FUN1': { y: 28, x: 0, w: 4, h: 4, label: 'ƒ1', group: 'special' }, 'FUNCTION1': { y: 28, x: 0, w: 4, h: 4, label: 'ƒ1' }, 'FUN': { y: 28, x: 0, w: 4, h: 4, label: 'ƒ1' },
'FUN2': { y: 28, x: 4, w: 4, h: 4, label: 'ƒ2', group: 'special' }, 'FUNCTION2': { y: 28, x: 4, w: 4, h: 4, label: 'ƒ2' },
'FUN3': { y: 28, x: 8, w: 4, h: 4, label: 'ƒ3', group: 'special' }, 'FUNCTION3': { y: 28, x: 8, w: 4, h: 4, label: 'ƒ3' },
'FUN4': { y: 28, x: 12, w: 4, h: 4, label: 'ƒ4', group: 'special' }, 'FUNCTION4': { y: 28, x: 12, w: 4, h: 4, label: 'ƒ4' },
'FUN5': { y: 28, x: 16, w: 4, h: 4, label: 'ƒ5', group: 'special' }, 'FUNCTION5': { y: 28, x: 16, w: 4, h: 4, label: 'ƒ5' },
'FUN6': { y: 28, x: 20, w: 4, h: 4, label: 'ƒ6', group: 'special' }, 'FUNCTION6': { y: 28, x: 20, w: 4, h: 4, label: 'ƒ6' },
'FUN7': { y: 28, x: 24, w: 4, h: 4, label: 'ƒ7', group: 'special' }, 'FUNCTION7': { y: 28, x: 24, w: 4, h: 4, label: 'ƒ7' },
'FUN8': { y: 28, x: 28, w: 4, h: 4, label: 'ƒ8' }, 'FUNCTION8': { y: 28, x: 28, w: 4, h: 4, label: 'ƒ8' },
'FUN9': { y: 28, x: 32, w: 4, h: 4, label: 'ƒ9' }, 'FUNCTION9': { y: 28, x: 32, w: 4, h: 4, label: 'ƒ9' },
'FUN10': { y: 28, x: 36, w: 4, h: 4, label: 'ƒ10' }, 'FUNCTION10': { y: 28, x: 36, w: 4, h: 4, label: 'ƒ10' },
'FUN11': { y: 28, x: 40, w: 4, h: 4, label: 'ƒ11' }, 'FUNCTION11': { y: 28, x: 40, w: 4, h: 4, label: 'ƒ11' },
'FUN12': { y: 28, x: 44, w: 4, h: 4, label: 'ƒ12' }, 'FUNCTION12': { y: 28, x: 44, w: 4, h: 4, label: 'ƒ12' },
'FUN13': { y: 28, x: 48, w: 4, h: 4, label: 'ƒ13' }, 'FUNCTION13': { y: 28, x: 48, w: 4, h: 4, label: 'ƒ13' },
'FUN14': { y: 28, x: 52, w: 4, h: 4, label: 'ƒ14' }, 'FUNCTION14': { y: 28, x: 52, w: 4, h: 4, label: 'ƒ14' },
'FUN15': { y: 28, x: 56, w: 4, h: 4, label: 'ƒ15' }, 'FUNCTION15': { y: 28, x: 56, w: 4, h: 4, label: 'ƒ15' },
'FUN16': { y: 28, x: 60, w: 4, h: 4, label: 'ƒ16' }, 'FUNCTION16': { y: 28, x: 60, w: 4, h: 4, label: 'ƒ16' },

'LCK1': { y: 28, x: 0, w: 4, h: 4, label: 'LOCK-1', group: 'special' }, 'LOCK1': { y: 28, x: 0, w: 4, h: 4, label: 'LOCK-1' }, 'LCK': { y: 28, x: 0, w: 4, h: 4, label: 'LOCK-1' },
'LCK2': { y: 28, x: 4, w: 4, h: 4, label: 'LOCK-2', group: 'special' }, 'LOCK2': { y: 28, x: 4, w: 4, h: 4, label: 'LOCK-2' },
'LCK3': { y: 28, x: 8, w: 4, h: 4, label: 'LOCK-3', group: 'special' }, 'LOCK3': { y: 28, x: 8, w: 4, h: 4, label: 'LOCK-3' },
'LCK4': { y: 28, x: 12, w: 4, h: 4, label: 'LOCK-4', group: 'special' }, 'LOCK4': { y: 28, x: 12, w: 4, h: 4, label: 'LOCK-4' },
'LCK5': { y: 28, x: 16, w: 4, h: 4, label: 'LOCK-5', group: 'special' }, 'LOCK5': { y: 28, x: 16, w: 4, h: 4, label: 'LOCK-5' },
'LCK6': { y: 28, x: 20, w: 4, h: 4, label: 'LOCK-6', group: 'special' }, 'LOCK6': { y: 28, x: 20, w: 4, h: 4, label: 'LOCK-6' },
'LCK7': { y: 28, x: 24, w: 4, h: 4, label: 'LOCK-7', group: 'special' }, 'LOCK7': { y: 28, x: 24, w: 4, h: 4, label: 'LOCK-7' },
'LCK8': { y: 28, x: 28, w: 4, h: 4, label: 'LOCK-8' }, 'LOCK8': { y: 28, x: 28, w: 4, h: 4, label: 'LOCK-8' },
'LCK9': { y: 28, x: 32, w: 4, h: 4, label: 'LOCK-9' }, 'LOCK9': { y: 28, x: 32, w: 4, h: 4, label: 'LOCK-9' },
'LCK10': { y: 28, x: 36, w: 4, h: 4, label: 'LOCK-10' }, 'LOCK10': { y: 28, x: 36, w: 4, h: 4, label: 'LOCK-10' },
'LCK11': { y: 28, x: 40, w: 4, h: 4, label: 'LOCK-11' }, 'LOCK11': { y: 28, x: 40, w: 4, h: 4, label: 'LOCK-11' },
'LCK12': { y: 28, x: 44, w: 4, h: 4, label: 'LOCK-12' }, 'LOCK12': { y: 28, x: 44, w: 4, h: 4, label: 'LOCK-12' },
'LCK13': { y: 28, x: 48, w: 4, h: 4, label: 'LOCK-13' }, 'LOCK13': { y: 28, x: 48, w: 4, h: 4, label: 'LOCK-13' },
'LCK14': { y: 28, x: 52, w: 4, h: 4, label: 'LOCK-14' }, 'LOCK14': { y: 28, x: 52, w: 4, h: 4, label: 'LOCK-14' },
'LCK15': { y: 28, x: 56, w: 4, h: 4, label: 'LOCK-15' }, 'LOCK15': { y: 28, x: 56, w: 4, h: 4, label: 'LOCK-15' },
'LCK16': { y: 28, x: 60, w: 4, h: 4, label: 'LOCK-16' }, 'LOCK16': { y: 28, x: 60, w: 4, h: 4, label: 'LOCK-16' },

'LAT1': { y: 28, x: 0, w: 4, h: 4, label: 'LATCH-1', group: 'special' }, 'LATCH1': { y: 28, x: 0, w: 4, h: 4, label: 'LATCH-1' }, 'LAT': { y: 28, x: 0, w: 4, h: 4, label: 'LATCH-1' },
'LAT2': { y: 28, x: 4, w: 4, h: 4, label: 'LATCH-2', group: 'special' }, 'LATCH2': { y: 28, x: 4, w: 4, h: 4, label: 'LATCH-2' },
'LAT3': { y: 28, x: 8, w: 4, h: 4, label: 'LATCH-3', group: 'special' }, 'LATCH3': { y: 28, x: 8, w: 4, h: 4, label: 'LATCH-3' },
'LAT4': { y: 28, x: 12, w: 4, h: 4, label: 'LATCH-4', group: 'special' }, 'LATCH4': { y: 28, x: 12, w: 4, h: 4, label: 'LATCH-4' },
'LAT5': { y: 28, x: 16, w: 4, h: 4, label: 'LATCH-5', group: 'special' }, 'LATCH5': { y: 28, x: 16, w: 4, h: 4, label: 'LATCH-5' },
'LAT6': { y: 28, x: 20, w: 4, h: 4, label: 'LATCH-6', group: 'special' }, 'LATCH6': { y: 28, x: 20, w: 4, h: 4, label: 'LATCH-6' },
'LAT7': { y: 28, x: 24, w: 4, h: 4, label: 'LATCH-7', group: 'special' }, 'LATCH7': { y: 28, x: 24, w: 4, h: 4, label: 'LATCH-7' },
'LAT8': { y: 28, x: 28, w: 4, h: 4, label: 'LATCH-8' }, 'LATCH8': { y: 28, x: 28, w: 4, h: 4, label: 'LATCH-8' },
'LAT9': { y: 28, x: 32, w: 4, h: 4, label: 'LATCH-9' }, 'LATCH9': { y: 28, x: 32, w: 4, h: 4, label: 'LATCH-9' },
'LAT10': { y: 28, x: 36, w: 4, h: 4, label: 'LATCH-10' }, 'LATCH10': { y: 28, x: 36, w: 4, h: 4, label: 'LATCH-10' },
'LAT11': { y: 28, x: 40, w: 4, h: 4, label: 'LATCH-11' }, 'LATCH11': { y: 28, x: 40, w: 4, h: 4, label: 'LATCH-11' },
'LAT12': { y: 28, x: 44, w: 4, h: 4, label: 'LATCH-12' }, 'LATCH12': { y: 28, x: 44, w: 4, h: 4, label: 'LATCH-12' },
'LAT13': { y: 28, x: 48, w: 4, h: 4, label: 'LATCH-13' }, 'LATCH13': { y: 28, x: 48, w: 4, h: 4, label: 'LATCH-13' },
'LAT14': { y: 28, x: 52, w: 4, h: 4, label: 'LATCH-14' }, 'LATCH14': { y: 28, x: 52, w: 4, h: 4, label: 'LATCH-14' },
'LAT15': { y: 28, x: 56, w: 4, h: 4, label: 'LATCH-15' }, 'LATCH15': { y: 28, x: 56, w: 4, h: 4, label: 'LATCH-15' },
'LAT16': { y: 28, x: 60, w: 4, h: 4, label: 'LATCH-16' }, 'LATCH16': { y: 28, x: 60, w: 4, h: 4, label: 'LATCH-16' },

// No longer used, symbolic names are more useful
/*
'#:layerLock( 1 )': { label: 'LOCK-1', group: 'special' },
'#:layerLock( 2 )': { label: 'LOCK-2', group: 'special' },
'#:layerLock( 3 )': { label: 'LOCK-3', group: 'special' },
'#:layerLock( 4 )': { label: 'LOCK-4', group: 'special' },
'#:layerLock( 5 )': { label: 'LOCK-5', group: 'special' },
'#:layerLock( 6 )': { label: 'LOCK-6', group: 'special' },
'#:layerLock( 7 )': { label: 'LOCK-7', group: 'special' },

'#:layerLatch( 1 )': { label: 'LATCH-1', group: 'special' },
'#:layerLatch( 2 )': { label: 'LATCH-2', group: 'special' },
'#:layerLatch( 3 )': { label: 'LATCH-3', group: 'special' },
'#:layerLatch( 4 )': { label: 'LATCH-4', group: 'special' },
'#:layerLatch( 5 )': { label: 'LATCH-5', group: 'special' },
'#:layerLatch( 6 )': { label: 'LATCH-6', group: 'special' },
'#:layerLatch( 7 )': { label: 'LATCH-7', group: 'special' },

'#:layerShift( 1 )': { label: 'SHIFT-1', group: 'special' },
'#:layerShift( 2 )': { label: 'SHIFT-2', group: 'special' },
'#:layerShift( 3 )': { label: 'SHIFT-3', group: 'special' },
'#:layerShift( 4 )': { label: 'SHIFT-4', group: 'special' },
'#:layerShift( 5 )': { label: 'SHIFT-5', group: 'special' },
'#:layerShift( 6 )': { label: 'SHIFT-6', group: 'special' },
'#:layerShift( 7 )': { label: 'SHIFT-7', group: 'special' },
*/

// Simple Shift combinations
"#:'!'": { label: '!', group: 'simple macros' },
//"#:'@'": { label: '@', group: 'simple macros' },
"#:'#'": { label: '#', group: 'simple macros' },
"#:'$'": { label: '$', group: 'simple macros' },
"#:'%'": { label: '%', group: 'simple macros' },
"#:'^'": { label: '^', group: 'simple macros' },
"#:'&'": { label: '&', group: 'simple macros' },
"#:'*'": { label: '*', group: 'simple macros' },
"#:'('": { label: '(', group: 'simple macros' },
"#:')'": { label: ')', group: 'simple macros' },
"#:'_'": { label: '_', group: 'simple macros' },
"#:'+'": { label: '+', group: 'simple macros' },
//"#:'{'": { label: '{', group: 'simple macros' },
//"#:'}'": { label: '}', group: 'simple macros' },
//"#:'|'": { label: '|', group: 'simple macros' },
"#:'<'": { label: '<', group: 'simple macros' },
"#:'>'": { label: '>', group: 'simple macros' },
//"#:'?'": { label: '?', group: 'simple macros' },

};

APP.keyCodes = {
8: "BACKSPACE",
9: "TAB",
13: "ENTER",
16: "SHIFT",
17: "CTRL",
18: "ALT",
19: "PAUSE",
20: "CAPSLOCK",
27: "ESCAPE",
32: "SPACE",
33: "PAGEUP",
34: "PAGEDOWN",
35: "END",
36: "HOME",
37: "LEFT",
38: "UP",
39: "RIGHT",
40: "DOWN",
45: "INSERT",
46: "DELETE",
48: "0",
49: "1",
50: "2",
51: "3",
52: "4",
53: "5",
54: "6",
55: "7",
56: "8",
57: "9",
65: "A",
66: "B",
67: "C",
68: "D",
69: "E",
70: "F",
71: "G",
72: "H",
73: "I",
74: "J",
75: "K",
76: "L",
77: "M",
78: "N",
79: "O",
80: "P",
81: "Q",
82: "R",
83: "S",
84: "T",
85: "U",
86: "V",
87: "W",
88: "X",
89: "Y",
90: "Z",
91: "LGUI",
92: "RGUI",
93: "SELECT",
96: "NUMPAD 0",
97: "NUMPAD 1",
98: "NUMPAD 2",
99: "NUMPAD 3",
100: "NUMPAD 4",
101: "NUMPAD 5",
102: "NUMPAD 6",
103: "NUMPAD 7",
104: "NUMPAD 8",
105: "NUMPAD 9",
106: "MULTIPLY",
107: "ADD",
109: "SUBTRACT",
110: "DECIMALSEP",
111: "DIVIDE",
112: "F1",
113: "F2",
114: "F3",
115: "F4",
116: "F5",
117: "F6",
118: "F7",
119: "F8",
120: "F9",
121: "F10",
122: "F11",
123: "F12",
144: "NUMLOCK",
145: "SCROLLLOCK",
186: "SEMICOLON",
187: "EQUAL",
188: "COMMA",
189: "MINUS",
190: "PERIOD",
191: "SLASH",
192: "BACKTICK",
219: "LBRACE",
220: "BACKSLASH",
221: "RBRACE",
222: "QUOTE",

// special cases

1016: "LSHIFT",
1017: "LCTRL",
1018: "LALT",
1091: "LGUI",

2016: "RSHIFT",
2017: "RCTRL",
2018: "RALT",
2092: "RGUI",

};
