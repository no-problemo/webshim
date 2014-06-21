/*!	SWFMini - a SWFObject 2.2 cut down version for webshims
 * 
 * based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfmini=function(){function a(){if(!s){s=!0;for(var a=r.length,b=0;a>b;b++)r[b]()}}function b(a){s?a():r[r.length]=a}function c(){q&&d()}function d(){var a=o.getElementsByTagName("body")[0],b=e(i);b.setAttribute("type",m);var c=a.appendChild(b);if(c){var d=0;!function(){if(typeof c.GetVariable!=h){var e=c.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),u.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>d)return d++,void setTimeout(arguments.callee,10);a.removeChild(b),c=null}()}}function e(a){return o.createElement(a)}function f(a){var b=u.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}var g=function(){j.error("This method was removed from swfmini")},h="undefined",i="object",j=window.webshims,k="Shockwave Flash",l="ShockwaveFlash.ShockwaveFlash",m="application/x-shockwave-flash",n=window,o=document,p=navigator,q=!1,r=[c],s=!1,t=!0,u=function(){var a=typeof o.getElementById!=h&&typeof o.getElementsByTagName!=h&&typeof o.createElement!=h,b=p.userAgent.toLowerCase(),c=p.platform.toLowerCase(),d=/win/.test(c?c:b),e=/mac/.test(c?c:b),f=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!1,j=[0,0,0],r=null;if(typeof p.plugins!=h&&typeof p.plugins[k]==i)r=p.plugins[k].description,!r||typeof p.mimeTypes!=h&&p.mimeTypes[m]&&!p.mimeTypes[m].enabledPlugin||(q=!0,g=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),j[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),j[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),j[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof n.ActiveXObject!=h)try{var s=new ActiveXObject(l);s&&(r=s.GetVariable("$version"),r&&(g=!0,r=r.split(" ")[1].split(","),j=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:a,pv:j,wk:f,ie:g,win:d,mac:e}}();j.ready("DOM",a),j.loader.addModule("swfmini-embed",{d:["swfmini"]});var v=f("9.0.0")?function(){return j.loader.loadList(["swfmini-embed"]),!0}:j.$.noop;return Modernizr.video?j.ready("WINDOWLOAD",v):v(),{registerObject:g,getObjectById:g,embedSWF:function(a,b,c,d,e,f,g,h,i,k){var l=arguments;v()?j.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,l)}):k&&k({success:!1,id:b})},switchOffAutoHideShow:function(){t=!1},ua:u,getFlashPlayerVersion:function(){return{major:u.pv[0],minor:u.pv[1],release:u.pv[2]}},hasFlashPlayerVersion:f,createSWF:function(a,b,c){return u.w3?createSWF(a,b,c):void 0},showExpressInstall:g,removeSWF:g,createCSS:g,addDomLoadEvent:b,addLoadEvent:g,expressInstallCallback:g}}();webshims.isReady("swfmini",!0),function(a,b){"use strict";var c,d=a.audio&&a.video,e=!1,f=b.bugs,g="mediaelement-jaris",h=function(){b.ready(g,function(){b.mediaelement.createSWF||(b.mediaelement.loadSwf=!0,b.reTest([g],d))})},i=b.cfg,j=i.mediaelement,k=-1!=navigator.userAgent.indexOf("MSIE");if(!j)return void b.error("mediaelement wasn't implemented but loaded");if(d){var l=document.createElement("video");a.videoBuffered="buffered"in l,a.mediaDefaultMuted="defaultMuted"in l,e="loop"in l,a.mediaLoop=e,b.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!a.videoBuffered||!e||!a.mediaDefaultMuted&&k&&"ActiveXObject"in window)&&(b.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),b.loader.loadList(["mediaelement-native-fix"]))}a.track&&!f.track&&!function(){if(!f.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(a){f.track=!0}}}(),b.register("mediaelement-core",function(b,f,i,j,k,l){c=swfmini.hasFlashPlayerVersion("10.0.3");var m=f.mediaelement;m.parseRtmp=function(a){var b,c,d,e=a.src.split("://"),g=e[1].split("/");for(a.server=e[0]+"://"+g[0]+"/",a.streamId=[],b=1,c=g.length;c>b;b++)d||-1===g[b].indexOf(":")||(g[b]=g[b].split(":")[1],d=!0),d?a.streamId.push(g[b]):a.server+=g[b]+"/";a.streamId.length||f.error("Could not parse rtmp url"),a.streamId=a.streamId.join("/")};var n=function(a,c){a=b(a);var d,e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};return e.src?(d=a.attr("data-server"),null!=d&&(e.server=d),d=a.attr("type")||a.attr("data-type"),d?(e.type=d,e.container=b.trim(d.split(";")[0])):(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e.server?(e.type=c+"/rtmp",e.container=c+"/rtmp"):(d=m.getTypeForSrc(e.src,c,e),d&&(e.type=d,e.container=d))),d=a.attr("media"),d&&(e.media=d),("audio/rtmp"==e.type||"video/rtmp"==e.type)&&(e.server?e.streamId=e.src:m.parseRtmp(e)),e):e},o=!c&&"postMessage"in i&&d,p=function(){p.loaded||(p.loaded=!0,l.noAutoTrack||f.ready("WINDOWLOAD",function(){r(),f.loader.loadList(["track-ui"])}))},q=function(){var a;return function(){!a&&o&&(a=!0,f.loader.loadScript("https://www.youtube.com/player_api"),b(function(){f._polyfill(["mediaelement-yt"])}))}}(),r=function(){c?h():q()};f.addPolyfill("mediaelement-yt",{test:!o,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=b.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";if(0===a.indexOf("rtmp"))return c+"/rtmp";a=a.split("?")[0].split("#")[0].split("."),a=a[a.length-1];var d;return b.each(m.mimeTypes[c],function(b,c){return-1!==c.indexOf(a)?(d=b,!1):void 0}),d},m.srces=function(a,c){if(a=b(a),!c){c=[];var d=a[0].nodeName.toLowerCase(),e=n(a,d);return e.src?c.push(e):b("source",a).each(function(){e=n(this,d),e.src&&c.push(e)}),c}f.error("setting sources was removed.")},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(a,d){var e="";return(c||o)&&(a=b(a),d=d||m.srces(a),b.each(d,function(a,b){return b.container&&b.src&&(c&&-1!=m.swfMimeTypes.indexOf(b.container)||o&&"video/youtube"==b.container)?(e=b,!1):void 0})),e};var s={};m.canNativePlaySrces=function(a,c){var e="";if(d){a=b(a);var f=(a[0].nodeName||"").toLowerCase(),g=(s[f]||{prop:{_supvalue:!1}}).prop._supvalue||a[0].canPlayType;if(!g)return e;c=c||m.srces(a),b.each(c,function(b,c){return c.type&&g.call(a[0],c.type)?(e=c,!1):void 0})}return e};var t=/^\s*application\/octet\-stream\s*$/i,u=function(){var a=t.test(b.attr(this,"type")||"");return a&&b(this).removeAttr("type"),a};m.setError=function(a,c){if(b("source",a).filter(u).length){f.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{b(a).mediaLoad()}catch(d){}}else c||(c="can't play sources"),b(a).pause().data("mediaerror",c),f.error("mediaelementError: "+c+". Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"),setTimeout(function(){b(a).data("mediaerror")&&b(a).addClass("media-error").trigger("mediaerror")},1)};var v=function(){var a,d=c?g:"mediaelement-yt";return function(c,e,g){f.ready(d,function(){m.createSWF&&b(c).parent()[0]?m.createSWF(c,e,g):a||(a=!0,r(),v(c,e,g))}),a||!o||m.createSWF||q()}}(),w={"native":function(a,b,c){c&&"third"==c.isActive&&m.setActive(a,"html5",c)},third:v},x=function(a,b,c){var d,e,f=[{test:"canNativePlaySrces",activate:"native"},{test:"canThirdPlaySrces",activate:"third"}];for((l.preferFlash||b&&"third"==b.isActive)&&f.reverse(),d=0;2>d;d++)if(e=m[f[d].test](a,c)){w[f[d].activate](a,e,b);break}e||(m.setError(a,!1),b&&"third"==b.isActive&&m.setActive(a,"html5",b))},y={metadata:1,auto:1,"":1},z=function(a){var c;"none"==a.getAttribute("preload")&&y[c=b(a).data("preload")]&&b.attr(a,"preload",c)},A=/^(?:embed|object|datalist)$/i,B=function(a,c){var d=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{}),e=m.srces(a),g=a.parentNode;clearTimeout(d.loadTimer),b(a).removeClass("media-error"),b.data(a,"mediaerror",!1),e.length&&g&&1==g.nodeType&&!A.test(g.nodeName||"")&&(c=c||f.data(a,"mediaelement"),m.sortMedia&&e.sort(m.sortMedia),z(a),x(a,c,e))};m.selectSource=B,b(j).on("ended",function(a){var c=f.data(a.target,"mediaelement");(!e||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()})});var C=!1,D=function(){var g=function(){f.implement(this,"mediaelement")&&(B(this),a.mediaDefaultMuted||null==b.attr(this,"muted")||b.prop(this,"muted",!0))};f.ready("dom-support",function(){C=!0,e||f.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var e;e=f.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");B(this,a),!d||a&&"html5"!=a.isActive||!e.prop._supvalue||e.prop._supvalue.apply(this,arguments),!p.loaded&&b("track",this).length&&p(),b(this).triggerHandler("wsmediareload")}}}),s[a]=f.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(e){var f="";return d&&s[a].prop._supvalue&&(f=s[a].prop._supvalue.call(this,e),"no"==f&&(f="")),!f&&c&&(e=b.trim((e||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(e)&&(f="maybe")),!f&&o&&"video/youtube"==e&&(f="maybe"),f}}})}),f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer),b.loadTimer=setTimeout(function(){B(a),a=null},9)}}),f.addReady(function(a,c){var d=b("video, audio",a).add(c.filter("video, audio")).each(g);!p.loaded&&b("track",d).length&&p(),d=null})}),d&&!C&&f.addReady(function(a,c){C||b("video, audio",a).add(c.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?void 0:(r(),C=!0,!1)})})};m.loadDebugger=function(){f.ready("dom-support",function(){f.loader.loadScript("mediaelement-debug")})},f.cfg.debug&&b(j).on("mediaerror",function(){m.loadDebugger()}),d?(f.isReady("mediaelement-core",!0),D(),f.ready("WINDOWLOAD mediaelement",r)):f.ready(g,D),f.ready("track",p)})}(Modernizr,webshims);