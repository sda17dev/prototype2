/*
Theme Name: Seoul Archive
Author: css3studio
Version:1.0
*/
var $ = jQuery;

$(document).ready(function() {
		
	//폼요소 스타일링
	$(".cf02 select").selectmenu();
	$(".ng04 select").selectmenu();
	$(".tkg01").buttonset();
	//검색창 제어
	$(".ng01 li.search a").click(function(){
		$("header").addClass("searchMode");
	});
	$(".cf01 .btn01_02").click(function(){
		$("header").removeClass("searchMode");
	});
	$(".tc02 dd a").mouseenter(function(){
		$(this).next().fadeIn();
	});
	$(".tc02 dd a").mouseleave(function(){
		$(this).next().fadeOut();
	});
	//열람하기
	$(".ng08 li.open a").click(function(){
		$(".etc01").slideDown();
		return false;
	});
	$(".etc01 a.close").click(function(){
		$(".etc01").slideUp();
		return false;
	});

});


