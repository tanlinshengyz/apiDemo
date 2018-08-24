
var jpush;
function setPush(){
    jpush = api.require('ajpush');
    var pushDeviceId = $.md5(api.deviceId);
	var systemType = api.systemType;

	if(systemType=='android'){
		jpush.init(function(ret, err){
			if(ret.status){
				jpush.bindAliasAndTags({
					alias:pushDeviceId
				},function(ret,err){
					
				});
			}
		});
	}
	if(systemType=='android'){
		api.addEventListener({name:'appintent'}, function(ret,err) {
			if(ret.appParam.ajpush){
				jpush.clearNotification({id:-1},function(ret) {});
				var userId = $api.getStorage('userId');
			    if(userId){
			      api.openWin({
			          name: 'messagePage',
			          url: './html/winMessage.html',
			          pageParam: {
			              page:'messagePage',
			              title: '我的消息'
			          }
			      });
			
			    }else{
			      api.openWin({
			          name: 'login',
			          url: './html/winLogin.html',
			          pageParam: {
			              page:'login',
			              title: '登陆'
			          }
			      });
			    }
//				var uzkey = ret.appParam.ajpush.extra.uzkey;
//		    	var uzvalue = JSON.parse(ret.appParam.ajpush.extra.uzvalue);
//				execute(uzkey,uzvalue);
			}
		})
	}
} 
//function execute(key,value){
//	var nowUserGuid = $api.getStorage('userGuid');
//	var userGuid = value.userGuid;
//	var userName = value.userName || '';
//	var type = value.type || '';
//	if(key == 'LOGIN'){
//		if(userGuid == nowUserGuid){
//			api.confirm({
//				title: '登录异常',
//	            msg: '当前帐号在另一台设备登录，是否重新登录?',
//	            buttons: ['是', '否']
//          },function(ret,err){
//          	if(ret.buttonIndex == 1){
//          		$api.clearStorage();
//          		_login("");
//          	}else{
//          		$api.clearStorage();
//          		api.closeWidget({
//						silent : false
//					});
//          	}
//          });
//		}else{
//			api.alert({
//				msg:'您的帐号：'+userName+'在另外一台设备登录，请核实！',
//          });
//		}
//	}
//	if(key == 'gl'){
//		if(userGuid == nowUserGuid){
//			_showDom('manageDot');
//			if(type == 'wt'){
//				$api.setStorage('newWtMessage','YES');
//			}
//			if(type == 'rz'){
//				$api.setStorage('newRzMessage','YES');
//			}
//		}
//	}
//	if(key == 'jh'){
//		if(userGuid == nowUserGuid){
//			_showDom('planDot');
//		}
//	}
//}