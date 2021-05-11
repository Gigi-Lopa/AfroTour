$("document").ready(function(){
    $("#show_password").on("click", function(){
        console.log("fdfd")
    var passwordField = $("#password");
    var passwordFieldType = passwordField.attr('type')
    if (passwordFieldType == 'password'){
        passwordField.attr('type', 'text')
    }
    else
    {
        passwordField.attr("type", "password")

    }

});
});