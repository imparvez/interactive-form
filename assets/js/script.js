$(document).ready(function() {
    $('.awesome-form .input-group input').focusout(function() {
        var text_val = $(this).val();

        if (text_val == "") {
            $(this).removeClass('has-value');
        } else {
            $(this).addClass('has-value');
        }
    });

    $("#email").on("keyup", function(){
    	if($(this).val().length === 0) {
    		$("img").show();
    	} else {
    		$("img").hide();
    	}

    	if($(this).val().length > 6) {
    		$("img").show().attr("src","assets/images/1f613.png");
    	} else {
    		$("img").show();
    	}

    	if($(this).val().length >= 23) {
    		$("img").show().attr("src","assets/images/263a.png");
    	} else {
    		$("img").show();
    	}
    });

    $("input[type='submit']").on("click", function(){
    	if($("#name").val() === "") {
    		alert("EMPTY NAME");
    		return false;
    	}
    	if($("#email").val() === "") {
    		alert("EMPTY EMAIL");
    		return false;
    	}
    });
});
