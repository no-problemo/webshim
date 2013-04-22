jQuery.webshims.register("mediaelement-jaris",function(e,t,i,n,a,r){"use strict";var o=t.mediaelement,s=i.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),p=0,c={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},d=Object.keys(c),h={currentTime:0,volume:1,muted:!1};Object.keys(h);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},c,h),f=function(e){try{e.nodeName}catch(i){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},v=function(t,i){i=e.Event(i),i.preventDefault(),e.event.trigger(i,a,t)},g=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var y=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,v(t._elem,"canplay"),t.paused||v(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){y(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,v(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),o.jarisEvent={};var b,w={onPlayPause:function(e,t,i){var n,a;if(null==i)try{n=t.api.api_get("isPlaying")}catch(r){}else n=i;n==t.paused&&(t.paused=!n,a=t.paused?"pause":"play",t._ppFlag=!0,v(t._elem,a),3>t.readyState&&y(3,t),t.paused||v(t._elem,"playing"))},onNotBuffering:function(e,t){y(3,t)},onDataInitialized:function(e,t){var i,n=t.duration;t.duration=e.duration,n==t.duration||isNaN(t.duration)||t._calledMeta&&2>(i=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&y(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,v(t._elem,"durationchange")},i>50?0:i>9?9:99):(t.lastDuration=t.duration,t.duration&&v(t._elem,"durationchange"),t._calledMeta||v(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),y(1,t),v(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(y(3,t),v(t._elem,"playing")),v(t._elem,"timeupdate")},onProgress:function(t,i){if(i.ended&&(i.ended=!1),i.duration&&!isNaN(i.duration)){var n=t.loaded/t.total;n>.02&&.2>n?y(3,i):n>.2&&(n>.99&&(i.networkState=1),y(4,i)),i._bufferedEnd&&i._bufferedEnd>n&&(i._bufferedStart=i.currentTime||0),i._bufferedEnd=n,i.buffered.length=1,e.event.trigger("progress",a,i._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&y(4,t),t.ended=!0,v(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,v(t._elem,"volumechange"))},ready:function(){var i=function(e){var t=!0;try{e.api.api_get("volume")}catch(i){t=!1}return t};return function(n,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,a):(o++,r.tryedReframeing++,i(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,T(r),x(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),a)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(b),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};w.onMute=w.onVolumeChange;var x=function(e){var i,n=e.actionQueue.length,a=0;if(n&&"third"==e.isActive)for(;e.actionQueue.length&&n>a;){a++,i=e.actionQueue.shift();try{e.api[i.fn].apply(e.api,i.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},T=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(i){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(u){var E={play:1,playing:1},k=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],A=k.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(i){var n=t.data(i.target,"mediaelement");if(n){var a=i.originalEvent&&i.originalEvent.type===i.type;a==("third"==n.activating)&&(i.stopImmediatePropagation(),E[i.type]&&n.isActive!=n.activating&&e(i.target).pause())}};N=function(i){e(i).off(A).on(A,S),k.forEach(function(e){t.moveToFirstEvent(i,e)})},N(n)}o.setActive=function(i,n,a){if(a||(a=t.data(i,"mediaelement")),a&&a.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var r=t.data(i,"shadowData");a.activating=n,e(i).pause(),a.isActive=n,"third"==n?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(i).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(i).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(i).trigger("mediaelementapichange")}};var C=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(i){if(i){var n=t,a=i.networkState;for(y(0,i),clearTimeout(i._durationChangeTimer);--n>-1;)delete i[e[n]];i.actionQueue=[],i.buffered.length=0,a&&v(i._elem,"emptied")}}}(),D=function(t,i){var n=t._elem,a=t.shadowElem;e(n)[i?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||i?a.css({width:n.style.width||e(n).width(),height:n.style.height||e(n).height()}):a.css({width:0,height:0})},M=function(){var t={"":1,auto:1};return function(i){var n=e.attr(i,"preload");return null==n||"none"==n||e.prop(i,"autoplay")?!1:(n=e.prop(i,"preload"),!!(t[n]||"metadata"==n&&e(i).is(".preload-in-doubt, video:not([poster])")))}}(),F={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},I=function(e){return e.replace?e.replace(F.A,"%26").replace(F.a,"%26").replace(F.e,"%3D").replace(F.q,"%3F"):e};o.createSWF=function(i,n,c){if(!l)return setTimeout(function(){e(i).mediaLoad()},1),a;1>p?p=1:p++,c||(c=t.data(i,"mediaelement")),(e.attr(i,"height")||e.attr(i,"width"))&&t.warn("width or height content attributes used. Webshims only uses CSS (computed styles or inline styles) to detect size of a video/audio");var d,h="audio/rtmp"==n.type||"video/rtmp"==n.type,f=e.extend({},r.vars,{poster:I(e.attr(i,"poster")&&e.prop(i,"poster")||""),source:I(n.streamId||n.srcProp),server:I(n.server||"")}),v=e(i).data("vars")||{},y=e.prop(i,"controls"),x="jarisplayer-"+t.getID(i),T=e.extend({},r.params,e(i).data("params")),E=i.nodeName.toLowerCase(),k=e.extend({},r.attrs,{name:x,id:x},e(i).data("attrs")),A=function(){D(c,e.prop(i,"controls"))};c&&c.swfCreated?(o.setActive(i,"third",c),c.currentSrc=n.srcProp,c.shadowElem.html('<div id="'+x+'">'),c.api=!1,c.actionQueue=[],d=c.shadowElem,C(c)):(d=e('<div class="polyfill-'+E+' polyfill-mediaelement" id="wrapper-'+x+'"><div id="'+x+'"></div>').css({position:"relative",overflow:"hidden"}),c=t.data(i,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:d},_elemNodeName:{value:E},_elem:{value:i},currentSrc:{value:n.srcProp},swfCreated:{value:!0},id:{value:x.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=c.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=c.buffered.length?(t.error("buffered index size error"),a):(c.duration-c._bufferedStart)*c._bufferedEnd+c._bufferedStart},length:0}}})),D(c,y),d.insertBefore(i),u&&e.extend(c,{volume:e.prop(i,"volume"),muted:e.prop(i,"muted"),paused:e.prop(i,"paused")}),t.addShadowDom(i,d),N(i),o.setActive(i,"third",c),e(i).on({updatemediaelementdimensions:A}).onWSOff("updateshadowdom",A)),o.jarisEvent[c.id]||(o.jarisEvent[c.id]=function(e){if("ready"==e.type){var t=function(){c.api&&(M(i)&&c.api.api_preload(),w.ready(e,c))};c.api?t():setTimeout(t,9)}else c.currentTime=e.position,c.api&&(!c._calledMeta&&isNaN(e.duration)&&c.duration!=e.duration&&isNaN(c.duration)&&w.onDataInitialized(e,c),c._ppFlag||"onPlayPause"==e.type||w.onPlayPause(e,c),w[e.type]&&w[e.type](e,c)),c.duration=e.duration}),e.extend(f,{id:x,evtId:c.id,controls:""+y,autostart:"false",nodename:E},v),h?f.streamtype="rtmp":"audio/mpeg"==n.type||"audio/mp3"==n.type?(f.type="audio",f.streamtype="file"):"video/youtube"==n.type&&(f.streamtype="youtube"),r.changeSWF(f,i,n,c,"embed"),clearTimeout(c.flashBlock),s.embedSWF(g,x,"100%","100%","9.0.115",!1,f,T,k,function(n){n.success&&(c.api=n.ref,y||e(n.ref).attr("tabindex","-1").css("outline","none"),c.flashBlock=setTimeout(function(){(!n.ref.parentNode&&d[0].parentNode||"none"==n.ref.style.display)&&(d.addClass("flashblocker-assumed"),e(i).trigger("flashblocker"),t.warn("flashblocker assumed")),e(n.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),b||(clearTimeout(b),b=setTimeout(function(){var i=e(n.ref);i[0].offsetWidth>1&&i[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>i[0].offsetWidth||2>i[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),i=null},8e3)))})};var _=function(e,t,i,n){return n=n||f(e),n?(n.api&&n.api[t]?n.api[t].apply(n.api,i||[]):(n.actionQueue.push({fn:t,args:i}),n.actionQueue.length>10&&setTimeout(function(){n.actionQueue.length>5&&n.actionQueue.shift()},99)),n):!1};if(["audio","video"].forEach(function(i){var n,a={},r=function(e){("audio"!=i||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=f(this);return t?t[e]:u&&n[e].prop._supget?n[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){r(e),delete a[e].writeable,a[e].set=t};o("volume",function(e){var i=f(this);if(i)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),_(this,"api_volume",[e],i),i.volume!=e&&(i.volume=e,v(i._elem,"volumechange")),i=null);else if(n.volume.prop._supset)return n.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=f(this);if(t)e=!!e,_(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,v(t._elem,"volumechange")),t=null;else if(n.muted.prop._supset)return n.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=f(this);if(t)e*=1,isNaN(e)||_(this,"api_seek",[e],t);else if(n.currentTime.prop._supset)return n.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=f(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),_(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,v(t._elem,e));else if(n[e].prop._supvalue)return n[e].prop._supvalue.apply(this,arguments)}}}),d.forEach(r),t.onNodeNamesPropertyModify(i,"controls",function(t,n){var a=f(this);e(this)[n?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==i&&D(a,n),_(this,"api_controls",[n],a))}),t.onNodeNamesPropertyModify(i,"preload",function(){var e=f(this);e&&M(this)&&_(this,"api_preload",[],e)}),n=t.defineNodeNameProperties(i,a,"prop")}),l&&e.cleanData){var P=e.cleanData,O={object:1,OBJECT:1};e.cleanData=function(e){var t,i;if(e&&(i=e.length)&&p)for(t=0;i>t;t++)if(O[e[t].nodeName]&&"api_pause"in e[t]){p--;try{e[t].api_pause()}catch(n){}}return P.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});