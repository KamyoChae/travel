(function(window){var svgSprite='<svg><symbol id="icon-xiala" viewBox="0 0 1031 1024"><path d="M515.2 768c-6.4 0-19.2-6.4-25.6-12.8l-480-512c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l480 512c12.8 12.8 12.8 32 0 44.8C534.4 768 528 768 515.2 768z"  ></path><path d="M515.2 768c-6.4 0-12.8 0-19.2-6.4-12.8-12.8-12.8-32 0-44.8l480-505.6c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-480 505.6C534.4 761.6 528 768 515.2 768z"  ></path></symbol><symbol id="icon-fanhuishangyizhang" viewBox="0 0 1024 1024"><path d="M704 992c-9 0-18-3.8-24.3-11.2l-384-448c-10.3-12-10.3-29.7 0-41.6l384-448c11.5-13.4 31.7-15 45.1-3.5 13.4 11.5 15 31.7 3.5 45.1L362.1 512l366.1 427.2c11.5 13.4 10 33.6-3.5 45.1-5.9 5.2-13.3 7.7-20.7 7.7z" fill="#243154" ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M448 864C218.6 864 32 677.4 32 448S218.6 32 448 32s416 186.6 416 416-186.6 416-416 416z m0-768C253.9 96 96 253.9 96 448s157.9 352 352 352 352-157.9 352-352S642.1 96 448 96z" fill="#243154" ></path><path d="M960 992c-8.2 0-16.4-3.1-22.6-9.4l-224-224c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l224 224c12.5 12.5 12.5 32.8 0 45.3-6.3 6.3-14.5 9.4-22.7 9.4z" fill="#243154" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)