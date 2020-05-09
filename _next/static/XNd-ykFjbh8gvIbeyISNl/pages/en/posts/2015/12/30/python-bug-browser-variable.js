(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r("q1tI"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"===typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=l(e.components);return(o.a.createElement(p.Provider,{value:t},e.children))},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||f[u]||a;return r?o.a.createElement(m,i({ref:t},p,{components:r})):o.a.createElement(m,i({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[u]="string"===typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},F1kR:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r("wx14"),o=r("Ff2n"),a=r("q1tI"),c=r.n(a),i=r("7ljp"),b=(c.a.createElement,{title:"Python and BROWSER environment variable are not friends (yet?)",cover:"/images/python-bug-browser-variable/cover.gif"}),p={meta:b},l="wrapper";function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Yesterday I wanted to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify"}),"HTML-CSS-JS Prettify")," on my Sublime Text, and it didn't work. I opened the console and I saw this:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AttributeError: 'MacOSXOSAScript' object has no attribute 'basename'.")),Object(i.b)("p",null,"Oh but? It wasn't the first time I had this error and I didn't know why: on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1012443"}),"Firefox"),", and on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mkdocs/mkdocs/issues/465"}),"MkDocs"),"."),Object(i.b)("p",null,"So where does this bug come from? It comes from ",Object(i.b)("inlineCode",{parentName:"p"},"webbrowser")," python lib."),Object(i.b)("p",null,"You just have to start ",Object(i.b)("inlineCode",{parentName:"p"},"$ python -c 'import webbrowser; webbrowser.open(\"http://kud.io\")'")," to get it."),Object(i.b)("p",null,"See the tracelog:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'Traceback (most recent call last):\n  File "<string>", line 1, in <module>\n  File "/usr/local/Cellar/python/2.7.11/Frameworks/Python.framework/Versions/2.7/lib/python2.7/webbrowser.py", line 669, in <module>\n    cmd = _synthesize(cmdline, -1)\n  File "/usr/local/Cellar/python/2.7.11/Frameworks/Python.framework/Versions/2.7/lib/python2.7/webbrowser.py", line 94, in _synthesize\n    if controller and name.lower() == controller.basename:\nAttributeError: \'MacOSXOSAScript\' object has no attribute \'basename\'\n')),Object(i.b)("p",null,"And why do you get that so? Because you defined the BROWSER environment variable, like this for instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'export FIREFOXNIGHTLY_BIN="/Applications/FirefoxNightly.app/Contents/MacOS/firefox"\nexport BROWSER=$FIREFOXNIGHTLY_BIN\n')),Object(i.b)("p",null,"It's already ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bugs.python.org/issue24955"}),"logged and will be fixed")," but for the moment either you ",Object(i.b)("strong",{parentName:"p"},"patch your ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/python-git/python/blob/master/Lib/webbrowser.py#L94"}),"webbrowser.py"))," or you ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/kud/my/commit/b78b46441a64c185a6178d3bd707e22b9a236cb7"}),"comment the export of BROWSER")),"."))}s.isMDXComponent=!0},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},PMUq:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/posts/2015/12/30/python-bug-browser-variable",function(){return r("F1kR")}])},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}},[["PMUq",0,1]]]);