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
});
