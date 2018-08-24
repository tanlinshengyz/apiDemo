//配置前端数据请求的地址
   var requestUrl = 'http://www.yuehaojiaoyi.com/project1/public/index.php/ceshi/';
   var pictureUrl = 'http://www.yuehaojiaoyi.com/project1/public/images/';

//var requestUrl = 'http://192.168.2.148/project1/public/index.php/ceshi/';
//var pictureUrl = 'http://192.168.2.148/project1/public/images/';
//***params
//controller :地址中的控制器、方法(thinkphp);
//data       :post到接口的数据;
//isSilence  :是否静默加载;
//isDebug    :是否开启调试模式;
//callBackFun:返回函数;

//ajax请求数据
function requestData(controller,data,isSilence,isDebug,isDown,callBackFun){
	if(isSilence=="NO"){
		api.showProgress({
		    title: '数据加载中',
		    text: '请稍候',
		    modal: true
		});
	}
	if(isDown=="YES"){
		api.refreshHeaderLoading();
	}
	api.ajax({
	    url:requestUrl+controller,
	    method:'post',
	    cache:false,
	    timeout:30,
	    dataType:'json',
	    returnAll:false,
	    data:data
    },function(ret,err){
    	if(isSilence=="NO"){
			api.hideProgress();

		}
		if(isDown=="YES"){
			api.refreshHeaderLoadDone();
		}
		if(isDebug=="YES") alert("SUCCESS:\n"+JSON.stringify(ret)+ " \n\n ERR:\n" + JSON.stringify(err));
		if(ret){
			if(callBackFun!="") callBackFun(ret);
		}else{
        	api.alert({
				msg:"网络故障,请稍后再试。"
            });
		}
    });
}
