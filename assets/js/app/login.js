var id_token, access_token;

function login_process()
{
    var email       = $("#email").val(),
        password    = $("#password").val();

    var $btn = $("#login-submit").button('loading');

    var settings = {
      "async": true,
      "url": "https://5qbun48kuc.execute-api.ap-southeast-1.amazonaws.com/Prod/merchant/login",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
        },
      "processData": false,
      "data": "{\r\n\"email\"  : \""+email+"\",\r\n\"password\"  : \""+password+"\"\r\n}"
    }

    $.ajax(settings).done(function (response) {
    
      var data = response.data;

      if (data.email_verified == true && data.app_metadata.status == 'registered') {
        alert('Your account is not approved by Admin');
      } else if (data.email_verified == true && data.app_metadata.status == 'approved') {
        var nickname            = data.nickname,
            user_id             = data.identities[0].user_id,
            access_token        = data.access_token,
            company_name        = data.user_metadata.company_name;
            license_number      = data.user_metadata.license_number;

            login_success(access_token, nickname, user_id, company_name, license_number);

      } else if (data.email_verified == true && data.app_metadata.status == 'blocked') {
        alert('Your account has been blocked');
      }

      $btn.button('reset');
    });

}

function login_success(access_token, nickname, user_id, company_name, license_number)
{
    window.location.replace("../index.php/login/login_success/"+access_token+"/"+nickname+"/"+user_id+"/"+company_name+"/"+license_number);
}
