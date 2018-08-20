// $(document).ready(function(){
//     $(".nav-items").click(function(){
//          $(this).addClass("active");
//          $(this).parent().parent().find( '.nav-items.active' ).removeClass( 'active' );
//     });
// });
$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
navbar = $('.nav-outer-container').height();
videoheight= vph - navbar;
console.log("vph height " + vph);
console.log("navigation height" + navbar);
console.log(" video height : " +videoheight);
$('#myVideo').css({'height': videoheight + 'px'});
}

$(document).ready(function(){
	$( ".video-cover-img"  ).last().addClass( "right-border-radius" );
	$( ".video-cover-img"  ).first().addClass( "left-border-radius" );
});
// comedy-video-image-cover