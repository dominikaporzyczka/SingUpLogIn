//click signUp-btn
//click logIn-btn
//Hide logIn-box or signUp-box 

$(document).ready(function() { 
    $(".signUp-box").hide();
    $(".hello").hide();
    $(".logIn-btn").addClass("active-button");

    $(".signUp-btn").click(function() {
        $(".logIn-box").hide();
        $(".signUp-box").show();
        $(".signUp-btn").addClass("active-button");
        $(".logIn-btn").removeClass("active-button");
    })

    $(".logIn-btn").click(function() {
        $(".signUp-box").hide();
        $(".logIn-box").show();
        $(".logIn-btn").addClass("active-button");
        $(".signUp-btn").removeClass("active-button");
    })

    $("input").blur(function(){
        if($(this).val() == ''){
            $(".button-big").click(function() {
                $(".container").hide();
                $(".hello").show();
            })
        }
    });
    
})


