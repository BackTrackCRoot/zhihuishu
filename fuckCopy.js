/**
 * @file funckCopy.js
 * @author CRoot(croot@xcroot.com)
 * @date 2018-03-23
 * @description 关掉防复制功能，在做题的时候可以直接搜题
 */

(function () {
    document.querySelector('.myschool_ewcon').removeAttribute("onselectstart");
    document.querySelector('.myschool_ewcon').removeAttribute("oncontextmenu");
    document.oncontextmenu = null;
    document.onselectstart = null;
})()