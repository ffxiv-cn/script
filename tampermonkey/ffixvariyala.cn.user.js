// ==UserScript==
// @name         ffixv ariyala中文化脚本
// @namespace    https://www.neppure.vip/
// @version      0.1.0
// @description  https://github.com/ffxiv-cn/script/
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
    'td.itemName>div>a',// 表格装备名
    'td.attributeName',
    'td.attributeNameRight',
    'option'
  ];

  /**
   * 翻译字段
   * @param {String} key 
   */
  function l(key) {
    /**
     * .exec('"Direct Hit Rate +20"')
     * 0: ""Direct Hit Rate +20"
     * 1: ""Direct Hit Rate"
     * 2: " +20"
     */
    var reg1 = /^(.*)( \+\d+)/i;

    if (!_.isUndefined(ffxivcn.translate[key])) {
      // 运气好直接命中了
      return ffxivcn.translate[key];
    }
    // 下面开始xjb分词了
    else if (_.endsWith(key, ':')) {
      var tmpKey = key.slice(0, key.length - 1);
      if (!_.isUndefined(ffxivcn.translate[tmpKey])) {
        return ffxivcn.translate[tmpKey] + ':';
      }
    } else if (reg1.test(key)) {
      var match = reg1.exec(key);
      if (!_.isUndefined(ffxivcn.translate[match[1]])) {
        return ffxivcn.translate[match[1]] + match[2];
      }
    }

    return key;
  }

  function translate() {
    _.each(defaultDomSelects, function (domSelect) {
      $(domSelect).each(function () {
        var key = $(this).text();
        if (_.isString(key)) {
          $(this).text(l(key));
        }
      })
    })
  }

  window.ffxivcn.doTranslate = translate;

  //dom变化就触发一次翻译
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var observer = new MutationObserver(function (mutations, observer) {
    window.ffxivcn.doTranslate();
  });
  observer.observe(document, {
    subtree: true,
    attributes: true
  });
})();

