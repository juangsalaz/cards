$("#change-password-panel-btn").click(function(){
	$("#user-profile-panel").hide();
	$("#change-password-panel").show();
});

$("#cancel-change-password").click(function(){
	$("#user-profile-panel").show();
	$("#change-password-panel").hide();
});

$("#edit-user-profile-btn").click(function(){
	$("#name").attr('disabled', false);
	$("#gender").attr('disabled', false);
	$("#mobile").attr('disabled', false);
	$("#change-password-panel-btn").hide();
	$("#edit-user-profile-btn").hide();
	$("#save-user-profile-btn").show();
	$("#cancel-edit-btn").show();
	$("#PicUpload").show();
});

$("#cancel-edit-btn").click(function(){
	$("#change-password-panel-btn").show();
	$("#edit-user-profile-btn").show();
	$("#save-user-profile-btn").hide();
	$("#cancel-edit-btn").hide();
	$("#PicUpload").hide();
	$("#name").attr('disabled', true);
	$("#gender").attr('disabled', true);
	$("#mobile").attr('disabled', true);
});

$("#save-user-profile-btn").click(function(){

	$("#overlay").css("display", "block");
	
	user_id 			= $("#user_id").val();
	name 				= $("#name").val();
	gender 				= $("#gender").val();
	mobile 				= $("#mobile").val();
	profile_picture_url = $("#profile_picture_url").val();

	var file_data = $('#image-input').prop('files')[0];   
    var form_data = new FormData();
    form_data.append('file', file_data);

	$.ajax({
		url:"upload_profile_picture",
		dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
		success:function(data) {

			if (data == "") {
				data = profile_picture_url;
			}

			var settings = {
				"async": true,
				"url": "https://5qbun48kuc.execute-api.ap-southeast-1.amazonaws.com/Prod/merchant/profie/"+user_id,
				"method": "PUT",
				"headers": {
				  "content-type": "application/json"
				  },
				"processData": true,
				"data": "{\r\n\"name\":\""+name+"\", \r\n\"gender\":\""+gender+"\", \r\n\"mobile\":\""+mobile+"\", \r\n\"profile_picture\":\""+data+"\"}"
			}

			$.ajax(settings).done(function (response) {
				alert("Update user profile successfuly");
				location.reload();
			});
		}
	});
});

$("#PicUpload").click(function(){
	$("#image-input").trigger('click');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.imgCircle')
                    .attr('src', e.target.result)
                    .width(140)
                    .height(140);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$("#change-password-btn").click(function(){
	
	user_id 	 		 = $("#user_id").val();
	email		 		 = $("#email").val();
	old_password 		 = $("#old-password").val();
	new_password 		 = $("#new-password").val();
	confirm_new_password = $("#confirm-new-password").val();

	if (old_password != "") {
		if (new_password != "" && new_password == confirm_new_password) {

			$("#overlay").css("display", "block");

			var login = {
				"async": true,
				"url": "https://5qbun48kuc.execute-api.ap-southeast-1.amazonaws.com/Prod/merchant/login",
				"method": "POST",
				"headers": {
				  "content-type": "application/json"
				  },
				"processData": true,
				"data": "{\r\n\"email\"  : \""+email+"\",\r\n\"password\"  : \""+old_password+"\"\r\n}"
			}

			$.ajax(login)
				.done(function (response) {
					var settings = {
						"async": true,
						"url": "https://5qbun48kuc.execute-api.ap-southeast-1.amazonaws.com/Prod/merchant/changePassword/"+user_id,
						"method": "POST",
						"headers": {
						  "content-type": "application/json"
						  },
						"processData": true,
						"data": "{\r\n\"newPassword\":\""+new_password+"\"}"
					}

					$.ajax(settings).done(function (response) {
						alert("Change password successfuly");
						location.reload();
					});
				})
				.fail(function (response) {
				    alert( "Your old password is wrong" );
				    $("#overlay").css("display", "none");
				    $("#old-password").val("");
					$("#new-password").val("");
					$("#confirm-new-password").val("");
				});
		} else {
			alert("Your conformation password is not match");
		}
	} else {
		alert("Old password is required");
	}
});

$(".set-default-branch").change(function(){
	$("#overlay").css("display", "block");

	user_id = $("#user_id").val();

	if ($(this).is(':checked')) {
     	branch_id = $(this).attr('id');
		
		var set_branch_default = {
				"async": true,
				"url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/merchant/setDefaultBranch",
				"method": "POST",
				"headers": {
				  "content-type": "application/json"
				  },
				"processData": true,
				"data": "{\r\n\"auth0UserId\"  : \""+user_id+"\",\r\n\"branch\"  : \""+branch_id+"\"\r\n}"
			}

		$.ajax(login)
			.done(function (response) {
				alert( "Set branch default successfuly.");
				$("#overlay").css("display", "none");
			.fail(function (response) {
			    alert( "Set branch default failed.");
			    $("#overlay").css("display", "none");
			});
    }
});