"use strict";function keyReport(e){switch(10!=e.which&&13!=e.which||e.preventDefault(),e.which){case 0:console.log("event.which not sure");break;case 32:console.log(" Spacebar");break;case 13:console.log(" Enter");break;case 27:console.log(" Escape");break;case 35:console.log(" End");break;case 36:console.log(" Home");break;case 37:console.log(" Left"),stepAction();break;case 38:return stepAction(),console.log(" Up"),!1;break;case 39:console.log(" Right"),stepAction();break;case 40:return console.log(" Down"),stepAction(),!1;break}}var impress=impress().init(),startTime=moment(new Date),isFullScreen=!1,smallPartIndex=0,confetti=new ConfettiCannon;"ontouchstart"in document.documentElement&&(document.querySelector(".hint").innerHTML="<p>Tap on the left or right to navigate</p>");var toggleFullScreen=function e(){var n=document.documentElement;isFullScreen=!isFullScreen,isFullScreen?n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullScreen?n.webkitRequestFullScreen():n.msRequestFullscreen&&n.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()};$(document).ready(function(){$("#fullscreen").click(function(){toggleFullScreen()}),$(".count-to-0-1").change(function(){console.log(1),$(".count-to-0-1").counter({autoStart:!0,duration:2500,countFrom:0,countTo:4,runOnce:!1,placeholder:"0",easing:"easeOutExpo",numberFormatter:function e(n){return numberWithSpaces(n)}})})});var numberWithSpaces=function e(n){return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},stepAction=function e(){window.setTimeout(function(){$("#step-20.active")},3500)};$(".sunburst").addClass("-hidden"),$("body").keydown(function(e){keyReport(e)});