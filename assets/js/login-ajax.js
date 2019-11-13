function doLogin()
{
    var loginInput = $("#loginInput").val();
    var passwordInput = $("#passwordInput").val();

    if(loginInput != "" && passwordInput != "")
    {
        $.ajax({
            type:'post',
            url:'json/success.json',
            // url:'json/error.json',
            data: {
                isLogin: true,
                login: loginInput,
                password: passwordInput
            },
            success: function(response) {

                if(response.authorized == "true") {
                    setTimeout(function() {
                        $('#spinner').removeClass('fa-spinner fa-pulse fa-times-circle').addClass('fa-check-circle');
                        // window.location.href = "/foo/bar/url";
                    }, 2000);
                } else {
                    setTimeout(function () {
                        $('#spinner').removeClass('fa-spinner fa-pulse').addClass('fa-times-circle');
                        $('#loginBtn').removeClass('disabled');
                        $('#loginForm').removeClass('disabled');
                        $('#passwordForm').removeClass('disabled');
                        $('#loginInput').removeClass('grey-text');
                        $('#passwordInput').removeClass('grey-text');
                    }, 2000)
                }
            },
            error: function () {

                setTimeout(function(){
                    $('#spinner').removeClass('fa-spinner fa-pulse').addClass('fa-times-circle');
                    $('#loginBtn').removeClass('disabled');
                    $('#loginForm').removeClass('disabled');
                    $('#passwordForm').removeClass('disabled');
                    $('#loginInput').removeClass('grey-text');
                    $('#passwordInput').removeClass('grey-text');
                }, 2000);
            }
        });
    }

    else
    {
        console.log('empty login or password')
    }

    return false;
}