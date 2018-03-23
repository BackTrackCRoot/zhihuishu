(function () {
    if (location.href.indexOf("course.zhihuishu.com") != -1) {
        let temp = document.createElement('script')
        temp.setAttribute('type', 'text/javascript')
        temp.setAttribute('defer', 'defer')
        temp.id = 'zhihuishu'
        temp.src = chrome.extension.getURL('zhihuishu.js')
        document.body.appendChild(temp)
    }
    if (location.href.indexOf("exam.zhihuishu.com") != -1) {
        let temp = document.createElement('script')
        temp.setAttribute('type', 'text/javascript')
        temp.setAttribute('defer', 'defer')
        temp.id = 'fuckCopy'
        temp.src = chrome.extension.getURL('fuckCopy.js')
        document.body.appendChild(temp)
    }
})();