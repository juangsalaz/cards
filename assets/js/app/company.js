$("#create-branch-btn").click(function(){
  var $btn = $("#create-branch-btn").button('loading');

  var company_name = $("#company-name-new-branch").val(),
    branch_name = $("#branch-name").val(),
    branch_street = $("#branch-street").val(),
    branch_country = $("#branch-country").val(),
    branch_city = $("#branch-city").val(),
    branch_zipcode = $("#branch-zipcode").val(),
    branch_building = $("#branch-building").val(),
    branch_unit = $("#branch-unit").val();

  var settings = {
      "async": true,
      "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/company/branch",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
        },
      "processData": false,
      "data": "{\r\n\"branchName\"  : \""+branch_name+"\",\r\n\"id\"  : \""+company_name+"\"\r\n,\r\n\"street\"  : \""+branch_street+"\"\r\n,\r\n\"latitude\"  : \"75.100\"\r\n,\r\n\"longitude\"  : \"75.100\"\r\n,\r\n\"country\"  : \""+branch_country+"\"\r\n,\r\n\"city\"  : \""+branch_city+"\"\r\n,\r\n\"zipCode\"  : \""+branch_zipcode+"\"\r\n,\r\n\"building\"  : \""+branch_building+"\"\r\n,\r\n\"unit\"  : \""+branch_unit+"\"\r\n}"
    }

    $.ajax(settings).done(function (response) {
      alert('Brance created successfuly');
      location.reload();
    });
});

function create_staff_validation()
{
  var staff_email = $("#new-staff-email").val();

  if (staff_email == "") {
    alert("Staff email is required.");
    return false;
  }

  return true;
}

$("#new-staff-btn").click(function(){
  if (create_staff_validation())
  { 
    var $btn = $("#new-staff-btn").button('loading');

    var company_name  = $("#new-staff-company").val(),
        license_number  = $("#new-staff-license-number").val(),
        email     = $("#new-staff-email").val(),
        password    = $("#new-staff-password").val();

      $.ajax({
        url:"https://cq-merchant.auth0.com/dbconnections/signup",
        type:"POST",
        data: {
          client_id     : 'u3C8LZEHthmVJpX2Uw2NcWtKHh883cVB',
          email         : email,
          password      : password,
          id_token      : '',
          connection      : 'Username-Password-Authentication',
          user_metadata : {
            company_name  : company_name,
            license_number  : license_number,
            isAdmin   : '0'
          },
          app_metadata : {
            status : '1'
          }
        },
        cache:false,
        success:function(data) {
         alert('Staff created successfuly');
          location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("error");
            $btn.button('reset');
        }
    });
  }
});

function delete_branch(company_name, branch_name)
{
  var $btn = $("#delete-branch-"+branch_name).button('loading');

  var settings = {
    "async": true,
    "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/company/branch/"+company_name,
    "method": "DELETE",
    "headers": {
      "content-type": "application/json"
      },
    "processData": false,
    "data": "{\r\n\"branchName\"  : \""+branch_name+"\"}"
  }

  $.ajax(settings).done(function (response) {
    alert('Brance deleted successfuly');
    location.reload();
  });
}

function assign_to_branch(user_id)
{
  var company_name = $("#new-staff-company").val(),
    branch_name = $("#branch_name").val();

  var settings = {
      "async": true,
      "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/company/branch/asignStaffToCompany",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
        },
      "processData": true,
      "data": "{\r\n\"staffId\"  : \""+user_id+"\", \r\n\"company\"  : \""+company_name+"\", \r\n\"branchName\"  : \""+branch_name+"\"}"
    }

    $.ajax(settings).done(function (response) {
      alert('Assign Staff to Branch is successfuly');
      location.reload();
    });
}

$("#message-post-btn").click(function(){
  var $btn = $("#message-post-btn").button('loading');
  var message_content = $("#message-content").val();
  var message_title = $("#message-title").val();
  var company_name = $("#company-name").val();
  var creator = $("#creator").val();
  var datetime = $("#datetime").val();

  message_content = message_content.replace(/(?:\r\n|\r|\n)/g, '<br />');

  var settings = {
    "async": true,
    "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/merchant/company/message",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
      },
    "processData": true,
    "data": "{\r\n\"comp\":\""+company_name+"\", \r\n\"creater\":\""+creator+"\", \r\n\"creationDate\":\""+datetime+"\", \r\n\"title\":\""+message_title+"\", \r\n\"message\":\""+message_content+"\"}"
  }

  $.ajax(settings).done(function (response) {
      alert("Add Message successfuly");
      location.reload();
  });
});

function delete_message(message_id, company_name)
{
  var settings = {
    "async": true,
    "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/merchant/company/message/"+company_name+"/"+message_id,
    "method": "DELETE",
    "headers": {
      "content-type": "application/json"
      },
    "processData": false
  }

  $.ajax(settings).done(function (response) {
      alert("Delete Message successfuly");
      location.reload();
  });
}

$("#message-update-btn").click(function(){
  var $btn = $("#message-update-btn").button('loading');
  var message_content = $("#message-content").val();
  var message_title = $("#message-title").val();
  var company_name = $("#company-name").val();
  var message_id = $("#message-id").val();
  var creator = $("#creator").val();
  var datetime = $("#datetime").val();

  message_content = message_content.replace(/(?:\r\n|\r|\n)/g, '<br />');

  var settings = {
    "async": true,
    "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/merchant/company/message/"+company_name+"/"+message_id,
    "method": "PUT",
    "headers": {
      "content-type": "application/json"
      },
    "processData": true,
    "data": "{\r\n\"creater\":\""+creator+"\", \r\n\"creationDate\":\""+datetime+"\", \r\n\"title\":\""+message_title+"\", \r\n\"message\":\""+message_content+"\"}"
  }

  $.ajax(settings).done(function (response) {
      alert("Update Message successfuly");
      window.location.href = "../../messages";
  });  
});

function update_hq_management_modal() {
  $("#editHqManagementModal").modal();
}


$("#edit-hq-btn").click(function(){
  var $btn = $("#edit-hq-btn").button('loading');

  var file_data = $('#company_logo').prop('files')[0];   
    var form_data = new FormData();
    form_data.append('file', file_data);

  $.ajax({
    url:"upload_company_logo",
    dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
    success:function(data) {

      // if (data != "") {
      //   imageUrl = data;
      // }

      var company_name = $("#hq-manage-company-name").val();
      var display_name = $("#display_name").val();
      var company_address = $("#company_address").val();
      var join_date = $("#join_date").val();
      var company_license_number = $("#company_license_number").val();
      var company_logo = imageUrl;
      var company_phone = $("#company_phone").val();
      var company_website = $("#company_website").val();
      var business_category = $("#business_category").val();

      var settings = {
        "async": true,
        "url": "https://szug7heey4.execute-api.ap-southeast-1.amazonaws.com/Prod/api/v1/company/"+company_name,
        "method": "PUT",
        "headers": {
          "content-type": "application/json"
          },
        "processData": true,
        "data": "{\r\n\"address\":\""+company_address+"\", \r\n\"businessCategory\":\""+business_category+"\", \r\n\"displayName\":\""+display_name+"\", \r\n\"joinDate\":\""+join_date+"\", \r\n\"licenseNumber\":\""+company_license_number+"\", \r\n\"logo\":\""+company_logo+"\", \r\n\"phone\":\""+company_phone+"\", \r\n\"websiteUrl\":\""+company_website+"\"}"
      }

      $.ajax(settings).done(function (response) {
          alert("Update HQ successfuly");
          location.reload();
      });

    }
  });

});

function delete_branch_modal()
{
  $("#deleteBranchModal").modal();
}

function update_branch_modal()
{
  $("#editBranchModal").modal();
}

function delete_staff_modal()
{
  $("#deleteStaffModal").modal();
}

function update_staff_modal()
{
  $("#editStaffModal").modal();
}

function branch_operating_hour_modal()
{
  $("#setBranchOperatingHourModal").modal();
}

function branch_staff_access_list_modal()
{
  $("#staffAccessListModal").modal();
}

$('#myForm input').on('change', function() {
   name_val = $(this).attr('name');

   radio_value = $('input[name='+name_val+']:checked', '#myForm').val();

   if (radio_value == 1) {
    $("#default-"+name_val).prop('disabled', false);
   } else if ( radio_value == 0) {
    $("#default-"+name_val).prop('disabled', true);
    $("#default-"+name_val).prop('checked', false);
   }

});

function branch_delivery_modal() {
  $("#brachDeliveryModal").modal();
}

function block_branch_delivery(branch_id) {

  //TO DO : CALLING API HERE

  $("#branch-delivery-"+branch_id).attr('class', 'fa fa-ban fa-lg');
  $("#branch-delivery-"+branch_id).css('color', '#ff6c60');
  
  $("#branch-delivery-link-"+branch_id).attr('onclick', 'unblock_branch_delivery('+branch_id+')');

  alert("block branch delivery type successfuly");

}

function unblock_branch_delivery(branch_id) {

  //TO DO : CALLING API HERE

  $("#branch-delivery-"+branch_id).attr('class', 'fa fa-check-circle fa-lg');
  $("#branch-delivery-"+branch_id).css('color', '#89C45B');
  
  $("#branch-delivery-link-"+branch_id).attr('onclick', 'block_branch_delivery('+branch_id+')');

  alert("unblock branch delivery type successfuly");

}

function block_branch(branch_id) {
  $("#block-branch-id").val(branch_id);
  $("#blockBranchModal").modal();
}

$("#block-branch-btn").click(function(){
  var $btn = $("#block-branch-btn").button('loading');

  //TO DO : CALLING API HERE

  branch_id = $("#block-branch-id").val();

  $("#branch-"+branch_id).attr('class', 'fa fa-ban fa-lg');
  $("#branch-"+branch_id).css('color', '#ff6c60');
  
  $("#branch-link-"+branch_id).attr('onclick', 'unblock_branch('+branch_id+')');

  alert("block branch successfuly");

  $("#blockBranchModal").modal('hide');

  $btn.button('reset');
});

function unblock_branch(branch_id) {
  $("#unblock-branch-id").val(branch_id);
  $("#unblockBranchModal").modal();
}

$("#unblock-branch-btn").click(function(){
  var $btn = $("#unblock-branch-btn").button('loading');

  //TO DO : CALLING API HERE

  branch_id = $("#unblock-branch-id").val();

  $("#branch-"+branch_id).attr('class', 'fa fa-check-circle fa-lg');
  $("#branch-"+branch_id).css('color', '#89C45B');
  
  $("#branch-link-"+branch_id).attr('onclick', 'block_branch('+branch_id+')');

  alert("unblock branch successfuly");

  $("#unblockBranchModal").modal('hide');

  $btn.button('reset');
});