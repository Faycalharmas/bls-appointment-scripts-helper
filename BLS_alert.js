// ==UserScript==
// @name         BLS alert
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  bls aler  P|R|C Clean Refresh Alarm Notif
// @author       @Itsmaarouf
// @match        *://*.algeria.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

var gun=setInterval(function(){
    if (document.getElementsByClassName('day activeClass').length !==0) {
      new Audio('https://www.soundjay.com/mechanical/sounds/smoke-detector-1.mp3').play();
      clearInterval(gun);
    }
}, 1000)
