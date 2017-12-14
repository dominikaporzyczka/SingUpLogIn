//click signUp-btn
    //click logIn-btn
    //Hide logIn-box or signUp-box 

$(document).ready(function() {      
    $(".signUp-btn").click(function() {
        $(".logIn-box").hide();
        $(".signUp-box").show();
        $(".signUp-btn").addClass("active-button");
    })
})

$(document).ready(function() {      
    $(".logIn-btn").click(function() {
        $(".signUp-box").hide();
        $(".logIn-box").show();
        $(".logIn-btn").addClass("active-button");
    })
})
