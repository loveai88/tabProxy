document.addEventListener('DOMContentLoaded', function () {
    testProxy();
});


function setting(){

}

function testProxy(){
    var proxyConfig={
        rules:{
            fallbackProxy:{
                scheme:'socks5',
                host:'localhost',
                port:9090
            }
        },
        mode:'fixed_servers'
    };
    chrome.proxy.settings.set({value:proxyConfig,scope:'incognito_persistent'},function(){});
}