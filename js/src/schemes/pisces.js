// build time:Thu Apr 30 2020 10:12:38 GMT+0800 (GMT+08:00)
$(document).ready(function(){var t=$(".sidebar-inner");var e=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;function i(){return $(".header-inner").height()+e}function r(){var t=$(".footer-inner");var e=t.outerHeight(true)-t.outerHeight();var i=t.outerHeight(true)+e;return i}function a(){var a=i();var f=r();var n=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight();var o=$("#content").height();if(a+n<o){t.affix({offset:{top:a-e,bottom:f}});t.affix("checkPosition")}$("#sidebar").css({"margin-top":a,"margin-left":"auto"})}function f(){$(window).off(".affix");t.removeData("bs.affix").removeClass("affix affix-top affix-bottom");a()}function n(){var t=window.matchMedia("(min-width: 992px)");t.addListener(function(t){if(t.matches){f()}})}a();n()});
//rebuild by neat 