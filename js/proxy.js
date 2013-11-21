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

chrome.proxy.settings.set({value:proxyConfig,scope:''},function(){});

function addMenu(){
chrome.contextMenus.create({title:'TabProxy',type:"normal",context:"all",onclick:function(clickData,tab){console.log(clickData),console.log(tab)}},function(){});}


addMenu();