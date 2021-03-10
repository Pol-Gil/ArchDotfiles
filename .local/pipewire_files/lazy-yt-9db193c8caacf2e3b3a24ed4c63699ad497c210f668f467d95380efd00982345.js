!function(h){"use strict";h.fn.lazyYT=function(t){var a=h.extend({default_ratio:"16:9",callback:null,container_class:"lazyYT-container"},t);return this.each(function(){!function(a,l){let t=a.data("width"),e=a.data("height"),i=a.data("ratio")?a.data("ratio"):l.default_ratio,s=a.data("youtube-id"),u=a.data("youtube-title"),d,c=[],n,o,p=a.data("parameters")||"";i=i.split(":"),d="number"==typeof t&&"number"==typeof e?(a.width(t),e+"px"):"number"==typeof t?(a.width(t),t*i[1]/i[0]+"px"):(t=a.width(),0===t&&(t=a.parent().width()),i[1]/i[0]*100+"%"),c.push('<div class="ytp-thumbnail">'),c.push('<div class="ytp-large-play-button"'),t<=640&&c.push(' style="transform: scale(0.563888888888889);"'),c.push(">"),c.push("<svg>"),c.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>'),c.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>'),c.push("</svg>"),c.push("</div>"),c.push("</div>"),c.push('<div class="html5-info-bar">'),c.push('<div class="html5-title">'),c.push('<div class="html5-title-text-wrapper">'),c.push('<a class="html5-title-text" target="_blank" tabindex="3100" href="https://www.youtube.com/watch?v=',s,'">'),void 0===u||null===u||""===u?c.push("youtube.com/watch?v="+s):c.push(u),c.push("</a>"),c.push("</div>"),c.push("</div>"),c.push("</div>");var r=a[0].querySelector(".ytp-thumbnail-image");a.css({"padding-bottom":d}).html(c.join("")),o=640<t?"maxresdefault.jpg":480<t?"sddefault.jpg":320<t?"hqdefault.jpg":120<t?"mqdefault.jpg":0===t?"hqdefault.jpg":"default.jpg",r?a.find(".ytp-thumbnail").append(r):a.find(".ytp-thumbnail").append(h(['<img class="ytp-thumbnail-image" src="https://img.youtube.com/vi/',s,"/",o,'">'].join(""))),n=a.find(".ytp-thumbnail").addClass("lazyYT-image-loaded").on("click",function(t){t.preventDefault(),!a.hasClass("lazyYT-video-loaded")&&n.hasClass("lazyYT-image-loaded")&&a.html('<iframe src="//www.youtube.com/embed/'+s+"?autoplay=1&"+p+'" frameborder="0" allowfullscreen></iframe>').addClass("lazyYT-video-loaded"),l.onPlay&&l.onPlay(t,a)})}(h(this).addClass(a.container_class),a)})}}(jQuery),define("discourse/plugins/lazy-yt/initializers/lazyYT",["exports","discourse/lib/plugin-api"],function(t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={name:"apply-lazyYT",initialize:function(){(0,a.withPluginApi)("0.1",function(l){l.decorateCooked(function(t){0!==$(".lazyYT",t).length&&$(".lazyYT",t).lazyYT({onPlay:function(t,a){a=parseInt(a.closest("article").data("post-id"),10);a&&l.preventCloak(a)}})},{id:"discourse-lazyyt"})})}};t.default=l});
//# sourceMappingURL=/assets/plugins/lazy-yt-9db193c8caacf2e3b3a24ed4c63699ad497c210f668f467d95380efd00982345.js.map