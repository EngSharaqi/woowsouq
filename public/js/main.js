$(document).ready(function(){
	$(".chooses-of-pars").css("height", $(window).height());
	$(".pars").click(function(){
		$(".chooses-of-pars").slideToggle(300);
		$("body").css("overflow-y", "hidden")
		$(".chooses-of-pars").css("overflow-y", "hidden")

		
	});
    $("#toStepTow").click(()=>{
        $(".step-one, .step-three").hide();
        $(".step-two").show();
        
    });
    $("#toStepThree").click(()=>{
        $(".step-one, .step-two").hide();
        $(".step-three").show();
        
    });

    // Arrow
    $("#toStepOneArrow").click(()=>{
        $(".step-two, .step-three").hide();
        $(".step-one").show();
        
    });

    $("#toStepTowArrow").click(()=>{
        $(".step-one, .step-three").hide();
        $(".step-two").show();
        
    });

    $('.svg-inline--fa.fa-bars.fa-w-14, .fa-bars').click (()=>{
        $('.side-bar-con').show();
        // $('body').css('overflow-y', 'hidden');
    });

    $('.svg-inline--fa.fa-times.fa-w-11, .fa-times').click (()=>{
        $('.side-bar-con').hide();
        // $('body').css('overflow-y', 'scroll');
    });
});
