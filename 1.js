/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		26: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://sf1-scmcdn2-tos.pstatp.com/ies/fe_app_new/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([25,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "113c86d39c3ccfcccc8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("46107d86b7941adbc814");

module.exports = {
  show: function show() {
    $('#pagelet-loading').show();
  },
  hide: function hide() {
    $('#pagelet-loading').hide();
  }
};

/***/ }),

/***/ "12a5c4dc26e1824fdd8b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-banner":"pagelet-banner","hide":"hide","move-hide":"move-hide","app-download":"app-download","banner-show":"banner-show","up-down":"up-down","banner-show1":"banner-show1","download-btn":"download-btn","txt":"txt"};

/***/ }),

/***/ "166003ecd7694b2377b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OpenBrowser = __webpack_require__("adf14ea98b2960ef189a");

var isVoice = false;
var modal = new OpenBrowser(); // jump2app相关

var schemas = {
  home: 'snssdk1128://feed?refer=web&gd_label={{gd_label}}',
  // 首页feed
  detail: 'snssdk1128://aweme/detail/{{id}}?refer=web&gd_label={{gd_label}}&appParam={{appParam}}&needlaunchlog=1',
  // 作品详情页
  user: 'snssdk1128://user/profile/{{uid}}?refer=web&gd_label={{gd_label}}&type={{type}}&needlaunchlog=1',
  // 用户主页
  challenge: 'snssdk1128://challenge/detail/{{id}}?refer=web&is_commerce=0',
  // 挑战详情
  music: 'snssdk1128://music/detail/{{id}}?refer=web',
  // 音乐详情
  live: 'snssdk1128://live?room_id={{room_id}}&user_id={{user_id}}&u_code={{u_code}}&from=webview&refer=web',
  // 直播间
  webview: 'snssdk1128://webview?url={{url}}&from=webview&refer=web',
  // webview
  webview_fullscreen: 'snssdk1128://webview?url={{url}}&from=webview&hide_nav_bar=1&refer=web',
  // webview 沉浸式
  poidetail: 'snssdk1128://poi/detail?id={{id}}&from=webview&refer=web',
  // poi详情页
  forward: 'snssdk1128://forward/detail/{{id}}',
  // 转发详情页
  billboard_word: 'snssdk1128://search/trending',
  // 热搜词榜
  billboard_video: 'snssdk1128://search/trending?type=1',
  // 热搜视频榜
  billboard_music: 'snssdk1128://search/trending?type=2',
  // 热搜音乐榜
  billboard_positive: 'snssdk1128://search/trending?type=3',
  // 正能量榜
  billboard_star: 'snssdk1128://search/trending?type=4' // 明星榜

}; // universal link url

var UNIVERSAL_LINK = 'https://www.amemv.com/redirect/?redirect_url='; // 小型模板引擎nano，仅支持JSON数据

function nano(template, data) {
  return template.replace(/\{\{([\w\.]*)\}\}/g, function (str, key) {
    var keys = key.split('.');
    var v = data[keys.shift()];

    for (var i = 0, l = keys.length; i < l; i++) {
      v = v[keys[i]];
    }

    return typeof v !== 'undefined' && v !== null ? v : '';
  });
} // 工具函数结束
// 拼接schema


function _schemaFactory(type, params) {
  var schema = schemas[type] || null;

  if (getQueryString('app') == 'douyin_lite') {
    // 抖音极速版替换appid
    schema = schema.replace(/^snssdk1128/, 'snssdk2329');
  }

  if (schema) {
    schema = nano(schema, params || {});
  }

  return schema;
}

function _nativeLinkFactory(type, params) {
  var link_tmpl = {};
  var link = link_tmpl[type] || null;

  if (link) {
    link = nano(link, params);
  }

  return link;
}

function _openAppInIframe(schema) {
  var a = document.createElement('a');
  a.setAttribute('href', schema);
  a.click();
  $('body').append("<iframe id='app_iframe' src='".concat(schema, "' style='display:none'></iframe>"));
}

function _getDeepLink(schema, downloadLink) {
  var deepLink = ''; // 对于universal link，ios内部schema是aweme开头，所提替换链接上的schema为 aweme 开头

  if (getQueryString('app') == 'douyin_lite') {
    // 抖音极速版替换appid
    schema = schema.replace(/^snssdk1128/, 'snssdk2329');
    return schema;
  }

  schema = schema.replace(/^snssdk1128/, 'aweme');
  deepLink = UNIVERSAL_LINK + encodeURIComponent(schema);

  if (downloadLink) {
    if (downloadLink.startsWith('//')) {
      downloadLink = 'https:' + downloadLink;
    }

    deepLink += "&next_url=".concat(encodeURIComponent(downloadLink));
  }

  return deepLink;
}
/**
 * @params {String} type 跳转类型
 * @params {Object} params 跳转参数
 * @params {String} downloadLink 下载地址
 */


function jumpToNativeApp(type, params, downloadLink) {
  var schema = _schemaFactory(type || 'home', params);

  if (!schema) {
    return;
  } // alert(schema);


  if ($.os.ios) {
    var currentUrl = location.href;
    var version = parseFloat($.os.version);
    var ios9 = parseInt(version, 10) >= 9; // ios9 以下，直接用iframe的方式

    if (!ios9) {
      _openAppInIframe(schema);

      return;
    }
    /**
         * 如果是ios9及以上,那么尝试用deeplink方式打开
         * 否则,仍然像目前这样的调用方式
         * IOS下的qqbrowser,因为跳转会白屏,不采用universal link方式
        */


    if (ios9 && !$.browser.qqbrowser) {
      var deepLink = _getDeepLink(schema, downloadLink);

      if (schema.indexOf('detail') >= 0) {
        copyHandle();
      }

      if (isVoice) {
        top.location.href = deepLink;
      } else {
        location.href = deepLink;
      } // safari里，服务端重定向到schema后，无法打开app，会弹出弹框，通过刷新刷掉弹框
      // if (!$.browser.weixin && $.browser.safari) {
      // setTimeout(function() {
      //     alert('his' + location.href)
      //     location.href = deepLink;
      // }, 100);
      // }


      return;
    }
    /**
         * ios9 qq浏览器
         * ios9 上，通过schema跳转应用，如果安装了会提示是否跳转app，如果没安装，会提示无法打开url
         */


    setTimeout(function () {
      location.href = schema;
      setTimeout(function () {
        if (document.hidden || document.webkitHidden) {
          location.href = currentUrl;
        }
      }, 1300);
    }, 10);
  } else {
    if (!$.browser.weixin) {
      _openAppInIframe(schema);
    }
  }
}

function apploadHandler(opts) {
  var schema = _schemaFactory(opts.type || 'home', opts.params);

  var self = this;

  if ($.browser.weixin) {
    var schemaName = function (sys) {
      var suffix = '_scheme';
      var name = sys.ios ? 'ios' : 'android';
      return name + suffix;
    }($.os); // var schema = _schemaFactory(opts.type, opts.params);


    if (schema) {
      var url = [opts.downloadLink, opts.downloadLink.indexOf('?') > -1 ? '&' : '?', schemaName, "=".concat(encodeURIComponent(schema))].join(''); // ios微信直接加修改location会被屏蔽，原因未明

      setTimeout(function () {
        location.href = url;
      });
      return;
    }
  }

  if ($.os.ios) {
    var osVersion = parseFloat($.os.version);
    var ios9 = $.os.ios && osVersion >= 9;
    /*
        safari中，下载短链会呼出apple store, wap2app的时候如果用户没有安装，会alert一个错误，导致下载短链无法执行，
        因此必须先执行下载
        */

    if (!$.browser.weixin && $.browser.safari && ios9) {
      // _gotoAppDownload(opts);
      // 好象不用唤起，直接下载就行啦，不敢改 :(
      // setTimeout(function () {
      //   _wap2app(opts);
      // }, 1000);
      jumpToNativeApp(opts.type, opts.params, opts.downloadLink);

      if ($.browser.qq) {
        modal.open();
      }
    } else {
      /* ios
            微信中，下载短链302到应用宝，同时universal link会302到 snssdk143://xx，而微信会屏蔽snssdk143://这种非http协议，
            由于两者时间很短，几乎同时，似乎对短链的302也屏蔽的，（不太了解机制），所以两者时间上要有一定的间隔。
            由于下载短链在当前页面打开应用宝页面，就不会执行后面的代码，所以先进行跳转
            */
      _wap2app(opts);

      setTimeout(function () {
        _checkOpen(function (isOpen) {
          !isOpen && _gotoAppDownload(opts);
        });
      }, 1000);
    }

    return;
  } else {
    // android 其它
    _openAppInIframe(schema);

    _checkOpen(function (isOpen) {
      !isOpen && _gotoAppDownload(opts);
    }); // qq空间无法唤起（下载）app， qq会话窗口可以，但是无法区别是从qq会话还是空间打开的页面
    // 所以在qq内，使用一个弹层引导用户在其它浏览器打开页面


    if ($.browser.qq) {
      modal.open();
    }
  }
}

function _wap2app(opts) {
  jumpToNativeApp(opts.type, opts.params);
}

function _gotoAppDownload(opts) {
  if (opts.downloadLink) {
    if (isVoice) {
      top.location.href = opts.downloadLink;
    } else {
      location.href = opts.downloadLink;
    }

    location.href = opts.downloadLink;
  }
} // 检查app是否打开


function _checkOpen(cb) {
  var _count = 0;

  var _clickTime = Number(new Date());

  var intHandle;

  function check(elsTime) {
    if (isVoice) {
      if (elsTime > 1000 || top.document.hidden || top.document.webkitHidden) {
        cb(true);
      } else {
        cb(false);
      }
    } else {
      if (elsTime > 1000 || document.hidden || document.webkitHidden) {
        cb(true);
      } else {
        cb(false);
      }
    }
  } // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过1000ms，超过则结束


  intHandle = setInterval(function () {
    _count++;

    var elsTime = Number(new Date()) - _clickTime;

    if (_count >= 15 || elsTime > 1000) {
      clearInterval(intHandle);
      check(elsTime);
    }
  }, 40);
} // gd_label是唤起应用时，通知客户端记录打点的字段
// gd_label参数： https://wiki.bytedance.net/pages/viewpage.action?pageId=179404954
// gd_label的值有哪些： https://docs.google.com/spreadsheets/d/1EWzh4gIbE861d9Rbk-M7QNYCPnltkNt9r2ETVSV2wf4/edit#gid=2126697475


function setGdLabel(val) {
  // click_schema_ugdsp_aweme: DSP拉活（https://bytedance.feishu.cn/docs/doccnZNSYA9Zc3FMeGQ490l6dZf#）
  var scene = getQueryString('scene');

  if (scene == 'dsp') {
    return 'click_schema_ugdsp_aweme';
  }

  if (/^click_(wexin|wap)_/.test(val)) {
    return val;
  } else {
    var type = function (weixin) {
      return weixin ? 'weixin' : 'wap';
    }($.browser.weixin);

    return "click_".concat(type, "_").concat(val);
  }
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  }

  return null;
}

function getUrlFromDl(dl, opts) {
  var url = '';

  try {
    var dlFromQuery = getQueryString('dl');
    url = dlFromQuery && opts.useDl && "//d.douyin.com/".concat(dlFromQuery, "/") || '';
    var query = (dl || '').split('?')[1] || '';

    if (url && query) {
      url = "".concat(url, "?").concat(query);
    }
  } catch (e) {
    console.log(e);
  }

  return url;
}

function copyHandle() {
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', window.location.href.replace('aweme.snssdk.com', 'www.iesdouyin.com'));
  input.select();
  input.setSelectionRange(0, 9999);

  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }

  document.body.removeChild(input);
  console.log('copy');
} // download_sdk相关

/**
 * @功能：跳转下载app，并尝试唤起app
 * @dependance：window.jumpToNativeApp
 */


module.exports = {
  downloadApp: function downloadApp(dl, opts, voice) {
    isVoice = voice;
    /**
        /*   downloadLink: '' // 跳转链接
        *    type: '',        // app唤起类型，参考schemas中的key
        *    params: {},      // 跳转app参数，替换到对应schema中
        */

    if (opts.params && opts.params.gd_label) {
      var gd_label = setGdLabel(opts.params.gd_label);
      var params = $.extend({}, opts.params, {
        gd_label: gd_label
      });
      opts.params = params;
    }

    apploadHandler($.extend({
      downloadLink: getUrlFromDl(dl, opts) || dl
    }, opts));
  }
};

/***/ }),

/***/ "1abd88f54ced3bc471db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("c6597593f6e09137a68c");

module.exports = {
  show: function show() {
    $('#pagelet-more-video').show();
  },
  hide: function hide() {
    $('#pagelet-more-video').hide();
  }
};

/***/ }),

/***/ "1d2f6dd2d416eba8db8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  getQueryStr: function getQueryStr(params) {
    return Object.keys(params).map(function (key) {
      return [key, encodeURIComponent(params[key])].join('=');
    }).join('&');
  },
  getQueryObj: function getQueryObj() {
    var queryStr = location.search.slice(1);

    if (!queryStr) {
      return {};
    }

    var aTemp = queryStr.split('&');
    var obj = {};
    aTemp.forEach(function (param) {
      var arr = param.split('=');
      obj[arr[0]] = arr[1];
    });
    return obj;
  },
  getLastPathId: function getLastPathId() {
    return location.pathname.match(/\d+/g)[0];
  }
};

/***/ }),

/***/ "211a5cf92808d62b743c":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="header">\n    <span class="title">' +
((__t = ( title )) == null ? '' : __t) +
'</span>\n</div>\n<ul class="video-list clearfix">\n    ';
 _.each(data, function(v,index){ ;
__p += '\n    <li>\n        <a  href="/share/video/' +
((__t = ( v.aweme_id)) == null ? '' : __t) +
'"  class="hot-video-item" data-distance="' +
((__t = ( index+1 )) == null ? '' : __t) +
'" data-id="' +
((__t = ( v.aweme_id )) == null ? '' : __t) +
'">\n            <div class="cover" style="background-image: url(' +
((__t = ( v.video.cover.url_list[0] )) == null ? '' : __t) +
')">\n                <div class="mask"></div>\n                <span class="play-btn"></span>\n                ';
 if (type === 'challenge') { ;
__p += '\n                    <div class="ch\n                    allenge-info">\n                    ';
 if (v.author && v.author.avatar_medium) { ;
__p += '\n                        <span class="icon" style="background-image: url(' +
((__t = ( v.author.avatar_medium.url_list && v.author.avatar_medium.url_list[0])) == null ? '' : __t) +
')"></span>\n                    ';
 } else { ;
__p += '\n                        <span class="icon"></span>\n                    ';
 } ;
__p += '\n                        <div class="info">\n                            ';
 if (v.cha_list && v.cha_list.length) { ;
__p += '\n                            <p class="name">#' +
((__t = ( v.cha_list[0].cha_name )) == null ? '' : __t) +
'</p>\n                            ';
 } ;
__p += '\n                            ';
 if (v.statistics && v.statistics.play_count) { ;
__p += '\n                            ';
 } ;
__p += '\n                        </div>\n                    </div>\n                ';
 } else { ;
__p += '\n                    <div class="music-info">\n                        ';
 if (v.author && v.author.avatar_medium) { ;
__p += '\n                        <span class="icon" style="background-image: url(' +
((__t = ( v.author.avatar_medium.url_list && v.author.avatar_medium.url_list[0])) == null ? '' : __t) +
')"></span>\n                        ';
 } else { ;
__p += '\n                            <span class="icon"></span>\n                        ';
 } ;
__p += '\n\n                        <div class="info">\n                            ';
 if (v.music && v.music.title) { ;
__p += '\n                            <p class="name">' +
((__t = ( v.music.title )) == null ? '' : __t) +
'</p>\n                            ';
 } ;
__p += '\n                            ';
 if (v.statistics && v.statistics.play_count) { ;
__p += '\n                            ';
 } ;
__p += '\n                        </div>\n                    </div>\n                ';
 } ;
__p += '\n            </div>\n        </a>\n    </li>\n    ';
});
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("46cff253b328df0b06f1");


/***/ }),

/***/ "291429b3d1f0db214a1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("cc0f06d0925e094b7c1b");

var _lodash = __webpack_require__("9c772359e08e81b5b3ba");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * title: 列表上显示的标题,
 * api: 接口地址,
 * count: 显示总数,
 * type: 每个list下方显示的是对应音乐/挑战,
 * sessionTag: 区分哪个页面使用便于存储session,
 * dl: 跳转短链地址
 * onClick: 每个item的点击事件
 * reportParams: 上报数据相关参数,
                {
                    parent_rid: 页面请求的request_id,
                    aweme_id: 页面作品id,
                    awemeCodeId: 模块id,
                    ttReportData: 上报数据相关
                }
 * filterCallback: 如果需要处理数据后再渲染，则用此回调，回调函数需要返回新列表供渲染，比如视频回流页使用这个组件的时候需要截取列表的前12个单独用
 * teaLogger: tea对象
 */
var downloadAction = __webpack_require__("166003ecd7694b2377b6");

var storage = __webpack_require__("68b15f4b6164c718c4af");

var HOT_VIDEO = __webpack_require__("211a5cf92808d62b743c"); // 上报有效展现数据
// 视频id加密，防止爬虫，不允许跳转至视频详情页


var HOT_DOWNLOAD_CLICK_LIMIT = 0;
var reportedVideo = 0;

function report(reportParams) {
  var hotVideos = $('.hot-video-item');
  var num = hotVideos.length;

  for (var i = reportedVideo; i < num; i++) {
    if (hotVideos.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
      var id = hotVideos.eq(i).attr('data-id');
      var params = {
        code_id: reportParams.awemeCodeId,
        group_id: id,
        distance: i + 1
      };

      if (reportParams.ttReportData) {
        reportParams.ttReportData.sendImpressionLog(params);
      }

      reportedVideo = i + 1;
    }
  }
}

function bind(config) {
  $('#pageletHotVideo').on('click', '.hot-video-item', function (ev) {
    var reportParams = config.reportParams;
    var id = $(this).attr('data-id');
    var dis = parseInt($(this).attr('data-distance')); // export click event to caller

    var onClick = config.onClick;

    if (onClick && typeof onClick === 'function') {
      onClick.call(this, ev);
    }

    if (reportParams) {
      // 点击数据上报
      if (reportParams.awemeCodeId) {
        var clickParams = {
          code_id: reportParams.awemeCodeId,
          group_id: id,
          distance: dis
        };
      }

      if (reportParams.ttReportData) {
        reportParams.ttReportData.sendClickLog(clickParams);
      }
    }

    if ('sessionStorage' in window) {
      var count = sessionStorage.getItem("com.aweme.reflow-".concat(config.sessionTag, "-count")) || 1;
      count = parseInt(count, 10);

      if (count < HOT_DOWNLOAD_CLICK_LIMIT) {
        // 计数器加1继续执行
        if (config.teaLogger) {
          config.teaLogger.send('tap', {
            type: 'feature',
            target: 'hot_list_item'
          });
        }

        try {
          sessionStorage.setItem("com.aweme.reflow-".concat(config.sessionTag, "-count"), ++count);
        } catch (e) {}
      } else {
        // 点击第二次直接下载
        if (config.teaLogger) {
          config.teaLogger.send('tap', {
            type: 'download_feature',
            target: 'hot_list_item'
          });
        }

        if (reportParams) {
          if (reportParams.awemeCodeId) {
            var downloadParams = {
              code_id: reportParams.awemeCodeId,
              group_id: id,
              distance: dis
            };
            var downloadType = 'wap_activation';
            var extra = {};
            var appParam = {};
          }

          if (reportParams.ttReportData) {
            extra = reportParams.ttReportData.getExtraData({
              params: downloadParams,
              type: downloadType
            });
            appParam = reportParams.ttReportData.getGDEXTJSON({
              code_id: reportParams.awemeCodeId,
              distance: dis
            });
          }
        }

        var gd_label = 'click_wap_detail_download_feature';

        if ($.browser.weixin) {
          gd_label = 'click_weixin_detail_download_feature';
        }

        downloadAction.downloadApp(config.dl, {
          type: 'detail',
          useDl: config.useDl || false,
          params: {
            id: id,
            gd_label: gd_label,
            appParam: appParam ? encodeURIComponent(JSON.stringify(appParam)) : '',
            needlaunchlog: appParam ? 1 : 0
          },
          extra: extra ? extra : ''
        });
        return false;
      }
    }
  }); // 初始数据上报

  if (config.reportParams) {
    report(config.reportParams);
    $(window).on('scroll', _lodash2.default.debounce(function () {
      report(config.reportParams);
    }, 300));
  }
}

function getVideos(config) {
  var count = config.count || 6;
  var videoList = [];
  var playEndedList = [];
  $('#loadingVideoTip').removeClass('hidden');
  config.teaLogger.send('list_load', {
    target: 'hot_video',
    type: 'video',
    event_type: 'request_num',
    value_num: count
  });
  var requestTime = Date.now();
  $.ajax({
    url: config.api,
    dataType: 'JSON',
    type: 'get',
    data: {
      app_id: 1128,
      cursor: 0,
      count: count,
      parent_rid: config.reportParams ? config.reportParams.parent_rid : '',
      aweme_id: config.reportParams ? config.reportParams.aweme_id : '',
      _signature: config.reportParams ? config.reportParams._signature : '',
      whale_id: config.reportParams ? config.reportParams.whale_id : ''
    },
    timeout: 5000,
    success: function success(res) {
      var data = JSON.parse(res);

      if (data.status_code != 0) {
        config.teaLogger.send('list_load', {
          target: 'hot_video',
          event_type: 'status_code_not_0',
          value_num: data.status_code
        });
        return;
      }

      videoList = data.aweme_list;
      var responseTime = Date.now();

      if (config.filterCallback) {
        videoList = config.filterCallback(videoList);
      } // video个数非偶数，移除最后一个。


      if (videoList.length > 1 && videoList.length % 2 != 0) {
        videoList.pop();
      }

      $('#loadingVideoTip').addClass('hidden');
      $('#videoListNode').removeClass('hidden').empty().append(HOT_VIDEO({
        title: config.title || '今日热门推荐',
        data: videoList,
        // jumpParams: config.jumpParams,//热门视频可以展示该音乐相关作品及该挑战相关作品时使用
        type: config.type
      }));
      $('#moreVideo').removeClass('hidden');
      bind(config);
      config.cb && config.cb();
      config.teaLogger.send('list_load', {
        target: 'hot_video',
        event_type: 'duration',
        value_num: responseTime - requestTime
      });
      config.teaLogger.send('list_load', {
        target: 'hot_video',
        event_type: 'response_num',
        value_num: videoList.length
      }); // config.callback && config.callback(videoList)
    },
    error: function error() {
      $('#pageletHotVideo').hide();
      $('#moreVideo').removeClass('hidden');
      config.teaLogger.send('list_load', {
        target: 'hot_video',
        event_type: 'error'
      });
    }
  });
}

module.exports = {
  init: function init(config) {
    getVideos(config);
  }
};

/***/ }),

/***/ "46107d86b7941adbc814":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-loading":"pagelet-loading","icon":"icon","loading":"loading","txt":"txt"};

/***/ }),

/***/ "46cff253b328df0b06f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bytedAcrawler = __webpack_require__("9bd2804c7e68ac461d65");

var _utils = __webpack_require__("e844fe34c02b3cce5ed3");

var _utils2 = _interopRequireDefault(_utils);

var _tea = __webpack_require__("6c84fa149b373f4029bb");

var _tea2 = _interopRequireDefault(_tea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @desc 音乐详情回流页
 */
__webpack_require__("52100986343de6f77ea3");

__webpack_require__("6b189ffa8bb40cd32b31");

var tips = __webpack_require__("9740e2f820a158083b3c");

var hotVideo = __webpack_require__("291429b3d1f0db214a1f");

var banner = __webpack_require__("d712b069d922fb6d94e3");

var worklist = __webpack_require__("7c1ca20af43ff685e60a");

var MAIN_TMPL = __webpack_require__("4ccd8cc9629ffe0385f6");

var urlUtil = __webpack_require__("1d2f6dd2d416eba8db8a");

var params = {
  music_id: '',
  count: 9,
  cursor: 0,
  aid: 1128,
  screen_limit: 3,
  // download_click_limit: 3
  download_click_limit: 0 // 不允许跳至详情页

};
var nonce = ''; // nonce设置 作用参见readme@注释1

var signature = ''; // signature设置 作用参见readme@注释1

var DOWNLOAD_URL_SETTING = {
  'reflow-music': '//d.douyin.com/Yq6P/',
  'reflow-music-feature': '//d.douyin.com/YufD/'
}; // 初始化

$(function () {
  var musicId = urlUtil.getLastPathId();
  $.ajax({
    url: '/web/api/v2/music/info/?music_id=' + musicId,
    type: 'get',
    dataType: 'json',
    success: function success(res) {
      if (res.status_code !== 0) {
        tips.show('加载失败，请刷新重试');
        return;
      }

      $('#pagelet-music-info').html(MAIN_TMPL({
        data: res
      }));
      init({
        musicId: musicId,
        status: res.music_info.status
        $('body').append(res.music_info.play_url.url_list)
      });
    },
    error: function error(e) {
      console.log('error>', e);
    }
  });
});

function init(config) {
  var bannerOpts;
  nonce = config.musicId;
  signature = (0, _bytedAcrawler.sign)(nonce);
  params.music_id = config.musicId;
  params._signature = signature;

  _utils2.default.initScrollEvents(50, 100);

  _tea2.default.setEventCommonParams({
    page_name: 'reflow_music'
  });

  _tea2.default.send('page_view', {});

  if (!config.status || config.status == 0) {
    //猜测可能是音乐没版权状态
    bannerOpts = {
      type: 'home'
    };
    hotVideo.init({
      title: '今日热门推荐',
      api: _.template('/web/api/v2/aweme/hotlist/')(),
      count: 24,
      type: 'video',
      sessionTag: 'music',
      dl: DOWNLOAD_URL_SETTING['reflow-music-feature'],
      teaLogger: _tea2.default,
      reportParams: {
        _signature: signature,
        //勿删，readme@注释1
        whale_id: config.musicId //勿删，readme@注释1

      }
    });
  } else {
    bannerOpts = {
      type: 'music',
      params: {
        id: config.musicId
      }
    };
    worklist.init({
      api: _.template('/web/api/v2/music/list/aweme/')(),
      dl: DOWNLOAD_URL_SETTING['reflow-music'],
      params: params,
      sessionTag: 'music',
      teaLogger: _tea2.default
    });
  }

  banner.init({
    dl: DOWNLOAD_URL_SETTING['reflow-music'],
    opts: bannerOpts,
    teaLogger: _tea2.default,
    pageTag: 'reflow-music'
  });
}

;

/***/ }),

/***/ "4ccd8cc9629ffe0385f6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="bg" ';
 if (data.music_info.cover_large.url_list && data.music_info.cover_large.url_list[0]){ ;
__p += '\n    style="background-image: url(' +
((__t = (data.music_info.cover_large.url_list && data.music_info.cover_large.url_list[0])) == null ? '' : __t) +
')"';
 } ;
__p += '></div>\n<div class="content">\n    <a href="https://www.douyin.com/share/musician/initial/" class="star-plans"></a>\n    <div class="cover-wrap">\n        ';
 if (data.music_info.cover_large.url_list && data.music_info.cover_large.url_list[0]){ ;
__p += '\n            ';
 if (data.music_info.is_original){ ;
__p += '\n            <div class="original-tag"></div>\n            ';
 } ;
__p += '\n            <img class="cover" src="' +
((__t = (data.music_info.cover_large.url_list && data.music_info.cover_large.url_list[0])) == null ? '' : __t) +
'">\n        ';
 } ;
__p += '\n    </div>\n    ';
 if (data.music_info.status && data.music_info.status!=0){ ;
__p += '\n    <div class="name">\n        ' +
((__t = (data.music_info.title)) == null ? '' : __t) +
'\n    </div>\n    <div class="author">\n        ';
 if (data.music_info.is_original){ ;
__p += '\n            音乐人\n        ';
 } ;
__p += '\n        <span>@' +
((__t = (data.music_info.author)) == null ? '' : __t) +
'</span>\n    </div>\n\n    ';
if (false) {};
__p += '\n    \n    \n    ';
 }else{ ;
__p += '\n    <div class="name">\n    小编正在努力争取该音乐版权中...\n    </div>\n    ';
 } ;
__p += '\n</div>';

}
return __p
}

/***/ }),

/***/ "52100986343de6f77ea3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "68b15f4b6164c718c4af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 本地存储
module.exports = {
  getLocal: function getLocal(key) {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  },
  setLocal: function setLocal(key, value, callback) {
    try {
      window.localStorage && window.localStorage.setItem(key, value);
    } catch (e) {
      callback && callback();
    }
  },
  length: function length() {
    return window.localStorage && window.localStorage.length;
  },
  clearLocal: function clearLocal() {
    return window.localStorage ? window.localStorage.clear() : null;
  },
  removeLocal: function removeLocal(key) {
    window.localStorage && window.localStorage.removeItem(key);
  },
  getSession: function getSession(key) {
    return window.sessionStorage ? window.sessionStorage.getItem(key) : null;
  },
  setSession: function setSession(key, value, callback) {
    try {
      window.sessionStorage && window.sessionStorage.setItem(key, value);
    } catch (e) {
      callback && callback();
    }
  },
  removeSession: function removeSession(key) {
    window.sessionStorage && window.sessionStorage.removeItem(key);
  }
};

/***/ }),

/***/ "6b189ffa8bb40cd32b31":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-worklist":"pagelet-worklist","used-num":"used-num","pagelet-music-info":"pagelet-music-info","bg":"bg","content":"content","star-plans":"star-plans","star-slide-out":"star-slide-out","star-shake":"star-shake","cover-wrap":"cover-wrap","original-tag":"original-tag","cover":"cover","name":"name","author":"author","used-count":"used-count"};

/***/ }),

/***/ "6c84fa149b373f4029bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bytedDpEventCollector = __webpack_require__("682c223c8090c9c699fb");

var _bytedDpEventCollector2 = _interopRequireDefault(_bytedDpEventCollector);

var _utils = __webpack_require__("e844fe34c02b3cce5ed3");

var _utils2 = _interopRequireDefault(_utils);

var _qs = __webpack_require__("a63b0d047588ea783f61");

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TeaLogger = window.collectEvent || _bytedDpEventCollector2.default;
var appId = 1243;
var appName = 'douyin_reflow'; // 可选择开启debug模式。debug模式上报地址为测试服务器（只支持http。测试https需关闭debug模式，上报到线上地址）。
// collectEvent.setDebug(true);
// 设置appId。必须配置。

TeaLogger.setAppId(appId); // 设置一些必备的字段。sdk会延时等到这些字段都赋值完毕后，才发送收集的事件。
// 其中（user_unique_id、app_id）为必须设置的字段，否则服务器会返回失败码。
// 背景：因为一些字段是异步获取的，所以可能在发送事件之后才赋值。

TeaLogger.setRequiredKeys({
  user: ['user_unique_id'],
  header: ['app_id'] // eventCommonParams: ['paramCommon'],
  // customHeaders: ['flow']

}); // 设置header相关字段
// headers比较特殊。headers里的key，后续会在处理的时候拿出来与app_id、headers并列。

TeaLogger.setHeader({
  app_id: appId,
  app_name: appName,
  os_name: $.os.android ? 'android' : $.os.ios ? 'ios' : 'unknown',
  os_version: "".concat($.os.version),
  traffic_type: $.browser.weixin ? 'weixin' : 'wap'
}); // 设置通用字段，增加自定义头

TeaLogger.setHeaderHeaders({
  // url相关
  href: location.href,
  host: location.host,
  pathname: location.pathname,
  protocol: location.protocol,
  // 手机信息
  user_agent: navigator.userAgent,
  screen_resolution: "".concat(window.screen.width, "*").concat(window.screen.height)
});

function pick(obj, keys) {
  return keys.map(function (k) {
    return k in obj ? _defineProperty({}, k, obj[k]) : {};
  }).reduce(function (res, o) {
    return $.extend(res, o);
  }, {});
} // 从url获取tea打点必要参数，用于pv、tap事件的上报


var list = ['utm_source', 'utm_medium', 'utm_campaign'];

var queryObj = _qs2.default.parse(location.href);

var taeCommonParams = pick(queryObj, list); // 设置通用字段，追加到每次的请求的params里

TeaLogger.setEventCommonParams($.extend({
  page_url: window.location.href
}, taeCommonParams)); // 设用户相关信息

TeaLogger.setUser({
  user_unique_id: _utils2.default.getTTWebId()
});
TeaLogger.setIntranetMode(false);
exports.default = TeaLogger;

/***/ }),

/***/ "7c1ca20af43ff685e60a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("a000608576e9f836255d");

var _bytedAcrawler = __webpack_require__("9bd2804c7e68ac461d65");

var _utils = __webpack_require__("e844fe34c02b3cce5ed3");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* api: 接口地址,
* dl: 短链地址,
* params: { item_id: 页面来源标识（音乐id|挑战id）,
            count: 每次显示的个数,
            cursor: 游标,
            aid: 1128,
            screen_limit: 屏数限制,
            download_click_limit: 点击次数限制
         }
* sessionTag: 'music'
* teaLogger:tea对象
*/
var LIST_TMPL = __webpack_require__("8f10e91887012435db06");

var EMPTY_TMPL = __webpack_require__("975901f44d7d42f78b48");

var loading = __webpack_require__("113c86d39c3ccfcccc8a");

var moreVideo = __webpack_require__("1abd88f54ced3bc471db");

var tips = __webpack_require__("9740e2f820a158083b3c");

var storage = __webpack_require__("68b15f4b6164c718c4af");

var downloadAction = __webpack_require__("166003ecd7694b2377b6");

var isLoading = false;
var loadEnd = false;
var hasListData = false;
var params = {};
module.exports = {
  init: function init(config) {
    config && bind(config);
    config && config.list && render(config.list);
    params = config.params;
    getWorkList(config);
    $(window).on('scrollEnd', _.debounce(function () {
      getWorkList(config);
    }, 500));
  }
};

function loadmore(params) {
  render(params.list);
}

function showEmpty() {
  $('#pagelet-worklist').show().html(EMPTY_TMPL());
}

function bind(config) {
  $('#pagelet-worklist').on('click', '.goWork', function (e) {
    e.preventDefault();
    var id = $(e.currentTarget).attr('data-id');

    if ('sessionStorage' in window) {
      var count = sessionStorage.getItem("com.aweme.reflow-".concat(config.sessionTag, "-count")) || 1;
      count = parseInt(count, 10);

      if (Number(count) >= params.download_click_limit) {
        // 点击第二次直接下载
        // 打点
        if (config.teaLogger) {
          config.teaLogger.send('tap', {
            type: 'download_feature',
            target: 'work_list'
          });
        }

        downloadAction.downloadApp(config.dl, {
          type: 'detail',
          params: {
            id: id
          }
        });
        return;
      }

      sessionStorage.getItem("com.aweme.reflow-".concat(config.sessionTag, "-count"), ++count); // 打点

      if (config.teaLogger) {
        config.teaLogger.send('tap', {
          type: 'feature',
          target: 'work_list'
        });
      } // 跳转视频回流


      location.href = "/share/video/".concat(id, "?type=").concat(config.sessionTag, "&id=").concat(params.item_id);
    }
  });
}

function render(list) {
  $('#pagelet-worklist').show().find('.js-list').append(LIST_TMPL({
    list: list || []
  }));
}

function getWorkList(config) {
  if (isLoading || loadEnd) {
    return;
  }

  isLoading = true;
  loading.show();
  var nonce = String(params.ch_id) + params.count + params.cursor;
  var sig = (0, _bytedAcrawler.sign)(nonce);
  params._signature = sig;
  $.ajax({
    url: config.api,
    type: 'get',
    dataType: 'json',
    data: params,
    success: function success(res) {
      if (res.status_code !== 0) {
        loading.hide();
        tips.show('加载列表失败，请刷新重试');
        return;
      }

      params.cursor += params.count;

      if (!res.has_more || params.cursor >= params.count * params.screen_limit) {
        loadEnd = true;
        loading.hide();
        moreVideo.show();
      }

      if (res.aweme_list && res.aweme_list.length) {
        hasListData = true;
        renderWorkList(res.aweme_list);
      } else {
        if (hasListData == false) {
          showEmpty();
        }
      }
    },
    complete: function complete() {
      isLoading = false;
    }
  });
}

function renderWorkList(awemeList) {
  var list = awemeList.map(function (item) {
    return {
      id: item.aweme_id,
      cover: _utils2.default.getDeepValue(item, 'video.cover.url_list[0]')
    };
  });
  loadmore({
    list: list
  });
}

/***/ }),

/***/ "8f10e91887012435db06":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(list, function (item) { ;
__p += '\n    <li class="item goWork" data-id="' +
((__t = ( item.id )) == null ? '' : __t) +
'" >\n        <div class="cover lazy" data-src="' +
((__t = ( item.cover )) == null ? '' : __t) +
'" >\n            <span class="rank"></span>\n        </div>\n        <!-- div class="cover lazy" data-src="' +
((__t = ( item.cover )) == null ? '' : __t) +
'" ></div> -->\n    </li>\n';
 }) ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "9740e2f820a158083b3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("c3dd550a9e17a9891063");

var tpl = __webpack_require__("f018444c1271e8d2d96d");

module.exports.show = function (msg, stayTime, el) {
  var SHOW_TIME = stayTime || 2000; // 提示持续时间 2s

  var ANI_TIME = 500; // 提示消失时间 .5s

  el = el || $('body');
  var ihtml = tpl({
    tips: msg
  });
  var $ihtml = $(ihtml);
  $ihtml.appendTo($(el));
  /* 动画 */

  setTimeout(function () {
    $ihtml.addClass('show');
  }, 20);
  setTimeout(function () {
    $ihtml.addClass('removing');
    setTimeout(function () {
      $ihtml.remove();
    }, ANI_TIME);
  }, SHOW_TIME);
};

/***/ }),

/***/ "975901f44d7d42f78b48":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="empty">暂无作品</div>';

}
return __p
}

/***/ }),

/***/ "a000608576e9f836255d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-worklist":"pagelet-worklist","list":"list","item":"item","cover":"cover","rank":"rank","empty":"empty"};

/***/ }),

/***/ "adf14ea98b2960ef189a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("b0dbbc9fa6326f3e234c");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var tmpRenderer = __webpack_require__("fd19f810c56546fb697a");

var BrowserOpen = /*#__PURE__*/function () {
  function BrowserOpen() {
    _classCallCheck(this, BrowserOpen);

    this.el = null;
  }

  _createClass(BrowserOpen, [{
    key: "open",
    value: function open() {
      var _this = this;

      if (this.el) {
        this.el.show(200);
        return;
      }

      var div = document.createElement('div');
      div.innerHTML = tmpRenderer();
      document.body.appendChild(div);
      this.el = $('.open-browser');
      this.el.show(200);
      var s;
      this.el.click(function (ev) {
        if (ev.target == _this.el[0]) {
          _this.close();
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.el.hide(200);
    }
  }]);

  return BrowserOpen;
}();

module.exports = BrowserOpen;

/***/ }),

/***/ "b0dbbc9fa6326f3e234c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c3dd550a9e17a9891063":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-tips":"pagelet-tips","show":"show","removing":"removing"};

/***/ }),

/***/ "c6597593f6e09137a68c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagelet-more-video":"pagelet-more-video","arrow":"arrow","txt":"txt"};

/***/ }),

/***/ "cc0f06d0925e094b7c1b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hot-video-wrap":"hot-video-wrap","clearfix":"clearfix","hidden":"hidden","loading-video-tip":"loading-video-tip","video-wrap":"video-wrap","header":"header","title":"title","video-list":"video-list","cover":"cover","mask":"mask","play-btn":"play-btn","like-count":"like-count","music-info":"music-info","challenge-info":"challenge-info","icon":"icon","info":"info","name":"name","play-count":"play-count","hot-video-item":"hot-video-item","more-video":"more-video","arrow":"arrow","txt":"txt"};

/***/ }),

/***/ "d712b069d922fb6d94e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("12a5c4dc26e1824fdd8b");

/**
* config.dl   短链
* config.opts 跳转参数
* teaLogger   tea对象
* pageTag     页面标识
*/
// var ga = require('common/ga');
var downloadAction = __webpack_require__("166003ecd7694b2377b6");

function bind(config) {
  $('#download').on('click', function (e) {
    e.preventDefault(); // if(config.pageTag)
    //     ga.gaevent(config.pageTag,'download_bottom','');

    if (config.teaLogger) {
      config.teaLogger.send('tap', {
        type: 'download_bottom'
      });
    }

    if (typeof config.callback === 'function') {
      config.callback();
    } else {
      downloadAction.downloadApp(config.dl, config.opts);
    }
  });
}

module.exports = {
  init: function init(config) {
    bind(config);
  }
};

/***/ }),

/***/ "e844fe34c02b3cce5ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dateFormat: function dateFormat(timestamp, format) {
    if (!timestamp) {
      return;
    }

    if (typeof timestamp !== 'number') {
      try {
        timestamp = Number(timestamp);
      } catch (error) {
        throw Error('Expected to be a number.', error);
      }
    }

    function zeroize(num) {
      if (num && typeof num !== 'number') {
        return;
      }

      return num < 10 ? "0".concat(num) : num;
    }

    var date = new Date(timestamp);
    var format = format || 'YYYY年MM月DD日';
    var now = Number(new Date());
    var diff = now - timestamp;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var _seconds = 1000;

    var _minute = 60 * _seconds;

    var _hours = 60 * _minute;

    var _day = 24 * _hours;

    var formatArray = ['YYYY', 'MM', 'DD', 'H', 'M', 'S'];
    var dateArray = [year, month, day, hours, minute];

    if (diff > _day * 3) {
      if (diff < _day * 366) {
        format = 'MM月DD日';
      }

      for (var i = 0; i < formatArray.length - 1; i++) {
        format = format.replace(formatArray[i], dateArray[i]);
      }

      return format;
    } else {
      if (parseInt(diff / _day, 10) >= 1 && parseInt(diff / _day, 10) < 3) {
        return "".concat(parseInt(diff / _day, 10), "\u5929\u524D");
      } else if (parseInt(diff / _hours, 10) >= 1) {
        return "".concat(parseInt(diff / _hours, 10), "\u5C0F\u65F6\u524D");
      } else if (parseInt(diff / _minute, 10) >= 1) {
        return "".concat(parseInt(diff / _minute, 10), "\u5206\u949F\u524D");
      } else {
        return '刚刚';
      }
    }
  },
  getUrlParameter: function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    var sParameterName, i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  },
  htmlEntities: function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  /*
     * 获取url参数
     */
  getUrlParam: function getUrlParam(location, name) {
    var url = location;
    var splitIndex = url.indexOf('?') + 1;
    var paramStr = url.substr(splitIndex, url.length);
    var arr = paramStr.split('&');

    for (var i = 0; i < arr.length; i++) {
      var kv = arr[i].split('=');

      if (kv[0] == name) {
        return kv[1];
      }
    }

    return '';
  },

  /*
     * 设置url参数
     */
  setUrlParam: function setUrlParam(location, name, value) {
    var url = location;
    var splitIndex = url.indexOf('?') + 1;
    var paramStr = url.substr(splitIndex, url.length);
    var newUrl = url.substr(0, splitIndex); // - if exist , replace

    var arr = paramStr.split('&');

    for (var i = 0; i < arr.length; i++) {
      var kv = arr[i].split('=');

      if (kv[0] == name) {
        newUrl += "".concat(kv[0], "=").concat(value);
      } else {
        if (kv[1] != undefined) {
          newUrl += "".concat(kv[0], "=").concat(kv[1]);
        }
      }

      if (i != arr.length - 1) {
        newUrl += '&';
      }
    } // - if new, add


    if (newUrl.indexOf(name) < 0) {
      newUrl += splitIndex == 0 ? "?".concat(name, "=").concat(value) : "&".concat(name, "=").concat(value);
    }

    return newUrl;
  },
  stopEvent: function stopEvent(event, prevent) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (prevent !== false) {
      event.preventDefault();
    }
  },
  setScroll: function setScroll(scrollable, el) {
    el = el || document;

    if (scrollable) {
      $(el).off('touchmove');
    } else {
      $(el).off('touchmove').on('touchmove', function (e) {
        this.stopEvent(e);
      });
    }
  },
  initScrollEvents: function initScrollEvents(offset, debounce) {
    var scrollEndTimer;
    offset = offset || 100;

    function globalScroll(e) {
      var theDocumentHeight = document.body.scrollHeight;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollY >= theDocumentHeight - window.innerHeight - offset) {
        $(window).trigger('scrollBottom', e.type);

        if (e.type == 'scroll') {
          if (scrollEndTimer) {
            clearTimeout(scrollEndTimer);
          }

          scrollEndTimer = setTimeout(function () {
            $(window).trigger('scrollEnd');
          }, debounce || 50);
        }
      }
    }

    $(window).on('scroll load afterflow', globalScroll);
  },

  /**
     * 获取对象深层的值
     * @params {Object} obj
     * @params {String} path
     * eg. getDeepValue(obj, 'a.b.c[0].name')
     */
  getDeepValue: function getDeepValue(obj, path) {
    var current = obj || {};
    var temp = path.split('.');
    var paths = [];
    var match = [];
    temp.forEach(function (key) {
      if (match = key.match(/(\w+)\[(\d+)\]/)) {
        paths.push(match[1]);
        paths.push(match[2]);
      } else {
        paths.push(key);
      }
    });

    for (var i = 0, len = paths.length; i < len; i++) {
      var key = paths[i];

      if (current[key] === null || current[key] === undefined) {
        return undefined;
      }

      current = current[key];
    }

    return current;
  },
  getTTWebId: function () {
    var ttwebid = $.cookie('tt_webid') || String(parseInt(Math.random() * 10000));
    return function () {
      return ttwebid;
    };
  }(),
  throttle: function throttle(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var throttleLastTime = null;
    return function () {
      var ctx = this;
      var args = arguments;
      var nowTime = Number(new Date());

      if (nowTime - throttleLastTime > interval || !throttleLastTime) {
        fn.apply(ctx, args);
        throttleLastTime = nowTime;
      }
    };
  },
  debounce: function debounce(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var debounceTimeout = null;
    return function () {
      var ctx = this;
      var args = arguments;

      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }

      debounceTimeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, interval);
    };
  },
  getBrowserType: function getBrowserType() {
    var _navigator = navigator,
        userAgent = _navigator.userAgent; // 取得浏览器的userAgent字符串

    var isOpera = userAgent.indexOf('Opera') > -1; // 判断是否Opera浏览器

    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; // 判断是否IE浏览器

    var isEdge = userAgent.indexOf('Edge') > -1; // 判断是否IE的Edge浏览器

    var isFF = userAgent.indexOf('Firefox') > -1; // 判断是否Firefox浏览器

    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; // 判断是否Safari浏览器

    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; // 判断Chrome浏览器

    if (isIE) {
      return 'IE';
    }

    if (isOpera) {
      return 'Opera';
    }

    if (isEdge) {
      return 'Edge';
    }

    if (isFF) {
      return 'FF';
    }

    if (isSafari) {
      return 'Safari';
    }

    if (isChrome) {
      return 'Chrome';
    }

    return 'other';
  }
};

/***/ }),

/***/ "f018444c1271e8d2d96d":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="pagelet-tips">' +
((__t = ( tips )) == null ? '' : __t) +
'</div>\n';

}
return __p
}

/***/ }),

/***/ "fd19f810c56546fb697a":
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="open-browser">\n    <div class="open-browser-content">\n        <h5>链接打不开？</h5>\n        <p>请点击右上角</p>\n        <p>选择在“<span>浏览器</span>”中打开</p>\n        <div class="guider"></div>\n    </div>\n</div>';

}
return __p
}

/***/ })

/******/ });
//# sourceMappingURL=index.ea960c02.js.map