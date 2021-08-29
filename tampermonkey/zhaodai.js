// ==UserScript==
// @name         nbb's招待助手
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  自动更新招待并自动领取by Nbb
// @author       nbb
// @match        https://actff1.web.sdo.com/20190315Zhaodai/index.html
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    var html = `<div style="width:200px;height:600px;background-color:rgba(220,220,220,.3);position:absolute;z-index:999;top:0;right:0">
    <div style="width:100%;text-align:center;font-size:18px">nbb招待领取助手</div>
    <div style="width:100%">是否刷新信息
        <input type="checkbox" id="nbb-refresh">
    </div>
    <div style="width:100%">最多领取<select id="nbb-doTimes" style="width:50px">
            <option value="20">20</option>
            <option value="10">10</option>
        </select>次</div>
    <div style="width:100%"><input type="button" onclick="nbb.start()" id="nbb-start" value="开始任务"></div>
    <div style="width:100%;height:506px;background-color:rgba(180,220,255,.32);overflow:auto;font-size:10px; color:#da4e09"
        id="nbb-debug"></div>
</div>`
    $("body").append(html)

    var nbb = {
        zhaodaiList: [],
        times: 0,
        doTimes: 0,
        refresh: false
    }

    nbb.info = function (txt) {
        $("#nbb-debug").append("<p>" + txt + "</p>")
    }

    nbb.start = function () {
        nbb.doTimes = $("#nbb-doTimes").val()
        nbb.refresh = $("#nbb-refresh")[0].checked


        $.getJSON('https://actff1.web.sdo.com/20190315Zhaodai/Server/User.ashx?method=querybinduser', function (result) {
            if (result.Code != 0) {
                console.error(result);
                return;
            }

            nbb.zhaodaiList = JSON.parse(result.Attach);
            nbb.info('招待记录数：' + nbb.zhaodaiList.length);
            nbb.info('更新招待等级，因为服务器有访问频率限制，请耐心等待');
            if (nbb.refresh) {
                nbb.update(0);
            } else {
                nbb.getAward(0);
            }

            $("#nbb-start").attr("disabled", "disabled");
            $("#nbb-Grade").attr("disabled", "disabled");
            $("#nbb-doTimes").attr("disabled", "disabled");

        })
    }

    nbb.update = function (index) {
        if (index >= nbb.zhaodaiList.length) {
            nbb.info('开始领取奖励...');
            nbb.getAward(0);
            return;
        }

        var tar = nbb.zhaodaiList[index];
        if (parseInt(tar.Grade) >= 70) {
            nbb.update(index + 1);
            return;
        }

        $.getJSON('https://actff1.web.sdo.com/20190315Zhaodai/Server/User.ashx?method=updgrade&pt=' + tar.PtAccount, function (result) {
            if (result.Code != 0) {
                console.error(result);
                return;
            }
            tar.Grade = result.Attach;
            nbb.info("刷新" + tar.PtAccount + "成功,lv" + tar.Grade);
            setTimeout(function () {
                nbb.update(index + 1);
            }, 3000)
        })

    }

    nbb.getAward = function (index) {
        if (index >= nbb.zhaodaiList.length) {
            nbb.info('完成奖励领取');
            $("#nbb-start").attr("disabled", false);
            $("#nbb-Grade").attr("disabled", false);
            $("#nbb-doTimes").attr("disabled", false);
            return;
        }

        if (nbb.times >= nbb.doTimes) {
            nbb.info('完成奖励领取');
            $("#nbb-start").attr("disabled", false);
            $("#nbb-Grade").attr("disabled", false);
            $("#nbb-doTimes").attr("disabled", false);
            return;
        }

        var tar = nbb.zhaodaiList[index];
        if (parseInt(tar.Grade) < 70) {
            nbb.getAward(index + 1);
            return;
        }


        $.post('https://actff1.web.sdo.com/20190315Zhaodai/Server/User.ashx', { method: "getaward1", bindid: tar.Id }, function (result) {
            nbb.times++;
            nbb.info("领取" + tar.PtAccount + "成功,次数=" + nbb.times);
            setTimeout(function () {
                nbb.getAward(index + 1);
            }, 3000)

        })
    }

    window.nbb = nbb

})();
