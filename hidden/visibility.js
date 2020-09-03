// 页面卸载前，暂时没有用
window.addEventListener("beforeunload",()=>{
    // console.log("*****beforeunload***")
});
// 页面卸载时，暂时没有用
window.addEventListener('unload', function() {
    //窗口关闭后
    console.log('unload', new Date());
});
// 浏览器页面切换
const hiddenProperty = 'hidden' in document ? 'hidden' :
    'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :
            null;
const visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
window.document.addEventListener(visibilityChangeEvent,()=>{
    console.log("visibilitychange",document[hiddenProperty]);
    if(document[hiddenProperty]){
        this.stopCardPlay()
    } else {
        this.stopCardPlay();
        this.startCardAutoPlay()
    }
});