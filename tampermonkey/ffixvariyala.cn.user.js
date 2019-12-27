// ==UserScript==
// @name         ffixv ariyala中文化脚本
// @namespace    https://www.neppure.vip/
// @version      0.1.0
// @description  https://github.com/ffxiv-cn/script/tampermonkey/ffixvariyala.cn.user.js
// @author       野原小牛
// @match        https://ffxiv.ariyala.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js
// @require      https://raw.githubusercontent.com/ffxiv-cn/script/master/data/translate.js
// ==/UserScript==

(function () {
  'use strict';

  window.ffxivcn = window.ffxivcn || {};

  var defaultDomSelects = [
    'td.itemName>div>a'// 表格装备名
  ];

  function l(key) {
    if (_.isUndefined(ffxivcn.translate[key])) {
      return key;
    }

    return ffxivcn.translate[key];
  }

  function translate() {
    _.each(defaultDomSelects, function (domSelect) {
      $(domSelect).each(function () {
        $(this).text(l($(this).text()));
      })
    })
  }

  window.ffxivcn.doTranslate = translate;
})();

