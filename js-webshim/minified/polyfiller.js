!function(a){var b=function(){window.asyncWebshims||(window.asyncWebshims={cfg:[],ready:[]})},c=function(){window.jQuery&&(a(jQuery),a=function(){return window.webshims})};window.webshims={setOptions:function(){b(),window.asyncWebshims.cfg.push(arguments)},ready:function(){b(),window.asyncWebshims.ready.push(arguments)},activeLang:function(a){b(),window.asyncWebshims.lang=a},polyfill:function(a){b(),window.asyncWebshims.polyfill=a},_curScript:function(){var a,b,c,d=document.currentScript;if(!d){try{throw new Error("")}catch(e){c=(e.sourceURL||e.stack||"").split("\n"),c=((c[c.length-1]||c[c.length-2]||"").match(/(?:fil|htt|wid|abo|app|res)(.)+/i)||[""])[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/,"")}for(a=document.scripts||document.getElementsByTagName("script"),b=0;b<a.length&&(!a[b].getAttribute("src")||(d=a[b],"interactive"!=a[b].readyState&&c!=a[b].src));b++);}return d}()},window.webshim=window.webshims,window.webshims.timer=setInterval(c,0),c(),"function"==typeof define&&define.amd&&define("polyfiller",["jquery"],a)}(function(a){"use strict";function b(a){return document.createElement(a)}var c,d,e=window.navigator,f=window.webshims,g="dom-support",h=a.event.special,i=a([]),j=window.asyncWebshims,k={},l=window.Object,m=function(a){return a+"\n//# sourceURL="+this.url},n=function(a){return o.enhanceAuto||"auto"!=a?a:!1};clearInterval(f.timer),k.advancedObjectProperties=k.objectAccessor=k.ES5=!!("create"in l&&"seal"in l),!k.ES5||"toJSON"in Date.prototype||(k.ES5=!1),d=a.support.hrefNormalized===!1?f._curScript.getAttribute("src",4):f._curScript.src,d=d.split("?")[0].slice(0,d.lastIndexOf("/")+1)+"shims/",a.extend(f,{version:"1.14.4-RC2",cfg:{enhanceAuto:window.Audio&&(!window.matchMedia||matchMedia("(min-device-width: 721px)").matches),waitReady:!0,loadStyles:!0,wsdoc:document,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{},loadScript:function(b,c){a.ajax&&a.ajaxSettings.xhr?a.ajax(a.extend({},o.ajax,{url:b,success:c,dataType:"script",cache:!0,global:!1,dataFilter:m})):window.yepnope?yepnope.injectJs(b,c):window.require&&require([b],c)},basePath:d},support:k,bugs:{},modules:{},features:{},featureList:[],setOptions:function(b,c){"string"==typeof b&&arguments.length>1?o[b]=a.isPlainObject(c)?a.extend(!0,o[b]||{},c):c:"object"==typeof b&&a.extend(!0,o,b)},getLazyFn:function(a,b){var c=function(){v(b)};return r("WINDOWLOAD",c),function(){var d=arguments,e=this;c(),r(b,function(){e[a].apply(e,d)})}},_getAutoEnhance:n,addPolyfill:function(b,c){c=c||{};var d=c.f||b;p[d]||(p[d]=[],f.featureList.push(d),o[d]={}),p[d].push(b),c.options=a.extend(o[d],c.options),w(b,c),c.methodNames&&a.each(c.methodNames,function(a,b){f.addMethodName(b)})},polyfill:function(){return function(a){a||(a=f.featureList),"string"==typeof a&&(a=a.split(" "));return f._polyfill(a)}}(),_polyfill:function(b){var d,e=[];c.run||(d=-1!==a.inArray("forms-ext",b),c(),d&&-1==a.inArray("forms",b)&&b.push("forms"),o.loadStyles&&u.loadCSS("styles/shim"+(d&&!t["form-number-date-ui"].test()?"-ext":"")+".css")),o.waitReady&&(a.readyWait++,r(b,function(){a.ready(!0)})),a.each(b,function(a,b){return"xhr2"==b&&(b="filereader"),"promise"==b&&(b="es6"),p[b]?(b!==p[b][0]&&r(p[b],function(){q(b,!0)}),void(e=e.concat(p[b]))):void q(b,!0)}),v(e),a.each(b,function(a,b){var c=o[b];c&&("mediaelement"==b&&(c.replaceUI=n(c.replaceUI))&&c.plugins.unshift("mediacontrols"),c.plugins&&c.plugins.length&&v(o[b].plugins))})},reTest:function(){var b,c=function(c,d){var e=t[d],f=d+"Ready";!e||e.loaded||(e.test&&a.isFunction(e.test)?e.test([]):e.test)||(h[f]&&delete h[f],p[e.f],b.push(d))};return function(d){"string"==typeof d&&(d=d.split(" ")),b=[],a.each(d,c),v(b)}}(),isReady:function(b,c){if(b+="Ready",c){if(h[b]&&h[b].add)return!0;h[b]=a.extend(h[b]||{},{add:function(a){a.handler.call(this,b)}}),a(document).triggerHandler(b)}return!(!h[b]||!h[b].add)||!1},ready:function(b,c){var d=arguments[2];if("string"==typeof b&&(b=b.split(" ")),d||(b=a.map(a.grep(b,function(a){return!q(a)}),function(a){return a+"Ready"})),!b.length)return void c(a,f,window,document);var e=b.shift(),g=function(){r(b,c,!0)};a(document).one(e,g)},capturingEvents:function(b,c){document.addEventListener&&("string"==typeof b&&(b=[b]),a.each(b,function(b,d){var e=function(b){return b=a.event.fix(b),c&&f.capturingEventPrevented&&f.capturingEventPrevented(b),a.event.dispatch.call(this,b)};h[d]=h[d]||{},h[d].setup||h[d].teardown||a.extend(h[d],{setup:function(){this.addEventListener(d,e,!0)},teardown:function(){this.removeEventListener(d,e,!0)}})}))},register:function(b,c){var d=t[b];if(!d)return void f.error("can't find module: "+b);d.loaded=!0;var e=function(){c(a,f,window,document,void 0,d.options),q(b,!0)};d.d&&d.d.length?r(d.d,e):e()},c:{},loader:{addModule:function(b,c){t[b]=c,c.name=c.name||b,c.c||(c.c=[]),a.each(c.c,function(a,c){f.c[c]||(f.c[c]=[]),f.c[c].push(b)})},loadList:function(){var b=[],c=function(c,d){"string"==typeof d&&(d=[d]),a.merge(b,d),u.loadScript(c,!1,d)},d=function(c,d){if(q(c)||-1!=a.inArray(c,b))return!0;{var e,f=t[c];o[f.f||c]||{}}return f?(e=f.test&&a.isFunction(f.test)?f.test(d):f.test,e?(q(c,!0),!0):!1):!0},e=function(b,c){if(b.d&&b.d.length){var e=function(b,e){d(e,c)||-1!=a.inArray(e,c)||c.push(e)};a.each(b.d,function(b,c){t[c]?t[c].loaded||e(b,c):p[c]&&(a.each(p[c],e),r(p[c],function(){q(c,!0)}))}),b.noAutoCallback||(b.noAutoCallback=!0)}};return function(g){var h,i,j,k,l=[],m=function(d,e){return k=e,a.each(f.c[e],function(c,d){return-1==a.inArray(d,l)||-1!=a.inArray(d,b)?(k=!1,!1):void 0}),k?(c("combos/"+k,f.c[k]),!1):void 0};for(i=0;i<g.length;i++)h=t[g[i]],h&&!d(h.name,g)&&(h.css&&o.loadStyles&&u.loadCSS(h.css),h.loadInit&&h.loadInit(),e(h,g),h.loaded||l.push(h.name),h.loaded=!0);for(i=0,j=l.length;j>i;i++)k=!1,h=l[i],-1==a.inArray(h,b)&&("noCombo"!=o.debug&&a.each(t[h].c,m),k||c(t[h].src||h,h))}}(),makePath:function(a){return-1!=a.indexOf("//")||0===a.indexOf("/")?a:(-1==a.indexOf(".")&&(a+=".js"),o.addCacheBuster&&(a+=o.addCacheBuster),o.basePath+a)},loadCSS:function(){var b,c={};return function(d){d=this.makePath(d),c[d]||(b=b||a("link, style")[0]||a("script")[0],c[d]=1,a('<link rel="stylesheet" />').insertBefore(b).attr({href:d}))}}(),loadScript:function(){var b={};return function(c,d,e,f){if(f||(c=u.makePath(c)),!b[c]){var g=function(){d&&d(),e&&("string"==typeof e&&(e=e.split(" ")),a.each(e,function(a,b){t[b]&&(t[b].afterLoad&&t[b].afterLoad(),q(t[b].noAutoCallback?b+"FileLoaded":b,!0))}))};b[c]=1,o.loadScript(c,g,a.noop)}}}()}});var o=f.cfg,p=f.features,q=f.isReady,r=f.ready,s=f.addPolyfill,t=f.modules,u=f.loader,v=u.loadList,w=u.addModule,x=f.bugs,y=[],z={warn:1,error:1},A=a.fn;return f.addMethodName=function(a){a=a.split(":");var b=a[1];1==a.length?(b=a[0],a=a[0]):a=a[0],A[a]=function(){return this.callProp(b,arguments)}},A.callProp=function(b,c){var d;return c||(c=[]),this.each(function(){var e=a.prop(this,b);if(e&&e.apply){if(d=e.apply(this,c),void 0!==d)return!1}else f.warn(b+" is not a method of "+this)}),void 0!==d?d:this},f.activeLang=function(){"language"in e||(e.language=e.browserLanguage||"");var b=a.attr(document.documentElement,"lang")||e.language;return r("webshimLocalization",function(){f.activeLang(b)}),function(a){if(a)if("string"==typeof a)b=a;else if("object"==typeof a){var c=arguments,d=this;r("webshimLocalization",function(){f.activeLang.apply(d,c)})}return b}}(),f.errorLog=[],a.each(["log","error","warn","info"],function(a,b){f[b]=function(a){(z[b]&&o.debug!==!1||o.debug)&&(f.errorLog.push(a),window.console&&console.log&&console[console[b]?b:"log"](a))}}),function(){a.isDOMReady=a.isReady;var b=function(){a.isDOMReady=!0,q("DOM",!0),setTimeout(function(){q("WINDOWLOAD",!0)},9999)};c=function(){if(!c.run){if((o.debug||!("crossDomain"in o.ajax)&&location.protocol.indexOf("http"))&&(o.ajax.crossDomain=!0),!a.isDOMReady&&o.waitReady){var d=a.ready;a.ready=function(a){return a!==!0&&document.body&&b(),d.apply(this,arguments)},a.ready.promise=d.promise}o.readyEvt?a(document).one(o.readyEvt,b):a(b)}c.run=!0},a(window).on("load",function(){b(),setTimeout(function(){q("WINDOWLOAD",!0)},9)});var d=[],e=function(){1==this.nodeType&&f.triggerDomUpdate(this)};a.extend(f,{addReady:function(a){var b=function(b,c){f.ready("DOM",function(){a(b,c)})};d.push(b),o.wsdoc&&b(o.wsdoc,i)},triggerDomUpdate:function(b){if(!b||!b.nodeType)return void(b&&b.jquery&&b.each(function(){f.triggerDomUpdate(this)}));var c=b.nodeType;if(1==c||9==c){var e=b!==document?a(b):i;a.each(d,function(a,c){c(b,e)})}}}),A.clonePolyfill=A.clone,A.htmlPolyfill=function(b){if(!arguments.length)return a(this.clonePolyfill()).html();var c=A.html.call(this,b);return c===this&&a.isDOMReady&&this.each(e),c},A.jProp=function(){return this.pushStack(a(A.prop.apply(this,arguments)||[]))},a.each(["after","before","append","prepend","replaceWith"],function(b,c){A[c+"Polyfill"]=function(b){return b=a(b),A[c].call(this,b),a.isDOMReady&&b.each(e),this}}),a.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(b,c){A[c.replace(/[A-Z]/,function(a){return"Polyfill"+a})]=function(){return A[c].apply(this,arguments),a.isDOMReady&&f.triggerDomUpdate(this),this}}),A.updatePolyfill=function(){return a.isDOMReady&&f.triggerDomUpdate(this),this},a.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(a,b){A[b]=function(){return this.pushStack(this)}})}(),l.create&&(f.objectCreate=function(b,c,d){var e=l.create(b);return d&&(e.options=a.extend(!0,{},e.options||{},d),d=e.options),e._create&&a.isFunction(e._create)&&e._create(d),e}),w("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,23]}),t.swfmini.test(),w("sizzle",{test:a.expr.filters}),w("jajax",{test:a.ajax&&a.ajaxSettings.xhr}),s("es5",{test:!(!k.ES5||!Function.prototype.bind),d:["sizzle"]}),s("dom-extend",{f:g,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,25,31,34]}),b("picture"),s("picture",{test:"picturefill"in window||!!window.HTMLPictureElement}),s("es6",{test:!!(Math.imul&&Number.MIN_SAFE_INTEGER&&l.is&&window.Promise&&Promise.all),d:["es5"]}),s("geolocation",{test:"geolocation"in e,options:{destroyWrite:!0},c:[21]}),function(){s("canvas",{src:"excanvas",test:"getContext"in b("canvas"),options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var a=this.options.type;!a||-1===a.indexOf("flash")||t.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==a?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[g]})}(),function(){var c,d,h="form-shim-extend",i="formvalidation",j="form-number-date-api",l=!1,m=!1,p=!1,q={},r=b("progress"),u=b("output"),v=function(){var d,f,g=b("input");if(f=a('<fieldset><textarea required="" /></fieldset>')[0],k.inputtypes=q,a.each(["number","range","date","datetime-local","month","color"],function(a,b){g.setAttribute("type",b),q[b]=g.type==b&&(g.value="(")&&"("!=g.value}),k.datalist=!!("options"in b("datalist")&&window.HTMLDataListElement),k[i]="checkValidity"in g,k.fieldsetelements="elements"in f,k.fieldsetdisabled="disabled"in f){try{f.querySelector(":invalid")&&(f.disabled=!0,d=!f.querySelector(":invalid"))}catch(j){}k.fieldsetdisabled=!!d}return k[i]?(m=!(k.fieldsetdisabled&&k.fieldsetelements&&"value"in r&&"value"in u),p=m&&/Android/i.test(e.userAgent),x.bustedValidity=l=window.opera||x.bustedValidity||m||!k.datalist):x.bustedValidity=!1,c=k[i]&&!l?"form-native-extend":h,v=a.noop,!1};f.validationMessages=f.validityMessages={langSrc:"i18n/formcfg-",availableLangs:"ar cs el es fa fr he hi hu it ja lt nl pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")},f.formcfg=a.extend({},f.validationMessages),f.inputTypes={},s("form-core",{f:"forms",d:["es5"],options:{placeholderType:"value",messagePopover:{},test:v,list:{popover:{constrainWidth:!0}},iVal:{sel:".ws-validate",handleBubble:"hide",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31]}),d=o.forms,s("form-native-extend",{f:"forms",test:function(b){return v(),!k[i]||l||-1==a.inArray(j,b||[])||t[j].test()},d:["form-core",g,"form-message"],c:[6,5,14,29]}),s(h,{f:"forms",test:function(){return v(),k[i]&&!l},d:["form-core",g,"sizzle"],c:[16,15,28]}),s(h+"2",{f:"forms",test:function(){return v(),k[i]&&!m},d:[h],c:[27]}),s("form-message",{f:"forms",test:function(a){return v(),!(d.customMessages||!k[i]||l||!t[c].test(a))},d:[g],c:[16,7,15,30,3,8,4,14,28]}),s(j,{f:"forms-ext",options:{types:"date time range number"},test:function(){var b=!0,c=this.options;return c._types||(c._types=c.types.split(" ")),v(),a.each(c._types,function(a,c){return c in q&&!q[c]?(b=!1,!1):void 0}),b},methodNames:["stepUp","stepDown"],d:["forms",g],c:[6,5,17,14,28,29,33]}),w("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!A.rangeUI},d:["es5"],c:[6,5,9,10,17,11]}),s("form-number-date-ui",{f:"forms-ext",test:function(){var a=this.options;return a.replaceUI=n(a.replaceUI),v(),!a.replaceUI&&p&&(a.replaceUI=!0),!a.replaceUI&&t[j].test()},d:["forms",g,j,"range-ui"],options:{widgets:{calculateWidth:!0,animate:!0}},c:[6,5,9,10,17,11]}),s("form-datalist",{f:"forms",test:function(){return v(),p&&(d.customDatalist=!0),k.datalist&&!d.fD},d:["form-core",g],c:[16,7,6,2,9,15,30,31,28,33]})}(),webshim.loader.addModule("moxie",{src:"moxie/js/moxie",c:[26]}),s("filereader",{test:"FileReader"in window&&"FormData"in window,d:[g,"jajax"],c:[25,26,27]}),s("details",{test:"open"in b("details"),d:[g],options:{text:"Details"},c:[21,22]}),function(){f.mediaelement={};var c=b("video"),d=b("track");if(k.mediaelement="canPlayType"in c,k.texttrackapi="addTextTrack"in c,k.track="kind"in d,b("audio"),!(x.track=!k.texttrackapi))try{x.track=!("oncuechange"in c.addTextTrack("metadata"))}catch(e){}s("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{jme:{},plugins:[],vars:{},params:{},attrs:{},changeSWF:a.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,23]}),s("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core",g],test:function(){var a=this.options;return!k.mediaelement||f.mediaelement.loadSwf?!1:(a.preferFlash&&!t.swfmini.test()&&(a.preferFlash=!1),!(a.preferFlash&&swfmini.hasFlashPlayerVersion("10.0.3")))},c:[21,25]}),s("track",{options:{positionDisplay:!0,override:x.track},test:function(){var a=this.options;return a.override=n(a.override),!a.override&&!x.track},d:["mediaelement",g],methodNames:["addTextTrack"],c:[21,12,13,22,34]}),w("jmebase",{src:"jme/base",c:[98,99,97]}),a.each([["mediacontrols",{c:[98,99],css:"jme/controls.css"}],["playlist",{c:[98,97]}],["alternate-media"]],function(b,c){w(c[0],a.extend({src:"jme/"+c[0],d:["jmebase"]},c[1]))}),w("track-ui",{d:["track",g]})}(),s("feature-dummy",{test:!0,loaded:!0,c:y}),f.$=a,a.webshims=f,a.webshim=webshim,f.callAsync=function(){f.callAsync=a.noop,j&&(j.cfg&&(j.cfg.length||(j.cfg=[[j.cfg]]),a.each(j.cfg,function(a,b){f.setOptions.apply(f,b)})),j.ready&&a.each(j.ready,function(a,b){f.ready.apply(f,b)}),j.lang&&f.activeLang(j.lang),"polyfill"in j&&f.polyfill(j.polyfill)),f.isReady("jquery",!0)},f.callAsync(),f});