/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

if (typeof _w_foul == "undefined") {
    window._w_foul = "_w_tusk";
}

if (document.querySelector("input#" + window._w_foul) == null && typeof chrome != "undefined" && typeof chrome.runtime != "undefined" && typeof chrome.runtime.id != "undefined" && typeof chrome.runtime.getURL != "undefined") {
    let _w_tire = document.createElement("input");
    _w_tire.type = "hidden";
    _w_tire.id = _w_foul;
    (document.head || document.documentElement).appendChild(_w_tire);
    let _w_bout = document.createElement("script");
    _w_bout.type = "text/javascript";
    _w_bout.src = chrome.runtime.getURL("/scripts/inspector.js");
    (document.head || document.documentElement).appendChild(_w_bout);
} else if (!window._w_clamor) {
    window._w_clamor = function() {
        let _w_dismay = [];
        let _w_coop = {};
        const _w_hymn = /(['"\s\n\r])[^'"\s\n\r]*?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?[^'"\s\n\r]*)?(?=['"\s\n\r])/gi;
        let _w_kennel = function(_w_tilt) {
            _w_tilt && _w_tilt.forEach((function(item) {
                let _w_candor = item.replace(/[\\'"\s\n\r]+/gi, "");
                if (!_w_coop[_w_candor]) {
                    _w_coop[_w_candor] = true;
                    _w_dismay.push(_w_candor);
                }
            }));
        };
        XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(value) {
            this.addEventListener("load", (function() {
                if (!this.responseType || this.responseType === "text") {
                    let _w_tilt = this.responseText.replace(/[<>]/gi, '"').match(_w_hymn);
                    _w_kennel(_w_tilt);
                }
            }), false);
            this.realSend(value);
        };
        const _w_revue = window.fetch;
        window.fetch = function() {
            return new Promise(((resolve, reject) => {
                _w_revue.apply(this, arguments).then((function(response) {
                    response.clone && response.clone().text().then((function(_w_flak) {
                        let _w_tilt = _w_flak.replace(/[<>]/gi, '"').match(_w_hymn);
                        _w_kennel(_w_tilt);
                    }));
                    resolve(response);
                })).catch((function(response) {
                    reject(response);
                }));
            }));
        };
        setInterval((function() {
            let _w_tire = document.getElementById(_w_foul);
            if (_w_tire && _w_tire.value && _w_tire.value.length > 0 && _w_tire.value == _w_foul && _w_dismay.length > 0) {
                _w_tire.value = JSON.stringify(_w_dismay);
                _w_dismay = [];
            }
        }), 512);
        return {
            _w_cipher: function() {
                return _w_dismay.length;
            }
        };
    }();
}