
$(document).ready(function(){
	$(function(){
		$('.footnav ul li:last').css('margin-right','0');
		$('.proul li:even').css('margin-right','3.5%');
		
		$(".productnav span").click(function(){
			$(".view_menumain").slideToggle(500);	//逐渐的显隐
		});
		$(".newslist li:last").css('box-shadow','0 0 0 ')
		
	});
		$(".first").pageslide();//menu
	$(".second").pageslide({ direction: "left", modal: true });
	$(".news_pro li:last").css('float','right')
	$(".proul li:even").css('margin-right','3%')


});
	