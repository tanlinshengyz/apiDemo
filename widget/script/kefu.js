var userHeader = $api.getStorage('userHeader');
var userName = $api.getStorage('userName');

function openServicePer(){
  var mq = api.require('meiQia');
  mq.setTitleColor({
    color:'#000',
  });
  mq.setTitleBarColor({
    color:'#e14104',
  });

  mq.setClientInfo({
    name: userName,
    avatar: pictureUrl+userHeader,
  });
  mq.setPreSendTextMessage({
  	message:'【约好交易】您好！这里是约好交易客服中心，请问有什么可以帮到您？',
  })
  mq.show();
}