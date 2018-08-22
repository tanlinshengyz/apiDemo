var block = document.getElementById("kefu");
var oW, oH;
block.addEventListener('touchstart',function(e){
	api.setFrameAttr({
//      name: 'visit_frm',
        bounces: false
    });
    var touches = e.touches[0];
    oW = touches.clientX - block.offsetLeft;
    oH = touches.clientY - block.offsetTop;
    document.addEventListener("touchmove",defaultEvent,{ passive: false });
},false)
block.addEventListener( "touchmove", function ( e ) {
	var touches = e.touches[ 0 ];
	var oLeft = touches.clientX - oW;
	var oTop = touches.clientY - oH;
	if ( oLeft < 0 ) {
		oLeft = 0;
	} else if ( oLeft > document.documentElement.clientWidth - block.offsetWidth ) {
		oLeft = ( document.documentElement.clientWidth - block.offsetWidth );
	}
	if ( oTop < 0 ) {
		oTop = 0
	} else if ( oTop > document.documentElement.clientHeight - block.offsetHeight ) {
		oTop = ( document.documentElement.clientHeight - block.offsetHeight );
	}
	block.style.left = oLeft + "px";
	block.style.top = oTop + "px";
}, false );
block.addEventListener( "touchend", function () {
	document.removeEventListener("touchmove",defaultEvent,{ passive: false });
	api.setFrameAttr( {
//		name: 'visit_frm',
		bounces: true
	})
},false);
function defaultEvent( e ) {
	e.preventDefault();
}