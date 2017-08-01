function block_membership(membership_id) 
{

	$("#block-membership-id").val(membership_id);
	$("#blockMembershipModal").modal();
}

$("#block-membership-btn").click(function(){
	var $btn = $("#block-membership-btn").button('loading');

	//TO DO : CALLING API HERE

	membership_id = $("#block-membership-id").val();

	$("#membership-status-"+membership_id).attr('class', 'fa fa-ban fa-lg');
	$("#membership-status-"+membership_id).css('color', '#ff6c60');
	
	$("#membership-status-link-"+membership_id).attr("onclick", "unblock_membership('"+membership_id+"')");

	alert("block membership successfuly");

	$("#blockMembershipModal").modal('hide');

	$btn.button('reset');
});

function unblock_membership(membership_id) 
{

	$("#unblock-membership-id").val(membership_id);
	$("#unblockMembershipModal").modal();
}

$("#unblock-membership-btn").click(function(){
	var $btn = $("#unblock-membership-btn").button('loading');

	//TO DO : CALLING API HERE

	membership_id = $("#unblock-membership-id").val();

	$("#membership-status-"+membership_id).attr('class', 'fa fa-check-circle fa-lg');
	$("#membership-status-"+membership_id).css('color', '#89C45B');
	
	$("#membership-status-link-"+membership_id).attr("onclick", "block_membership('"+membership_id+"')");

	alert("unblock membership successfuly");

	$("#unblockMembershipModal").modal('hide');

	$btn.button('reset');
});

function update_membership_modal()
{
	$("#updateMembershipModal").modal();
}

$("#edit-membership1").click(function(){
	var $btn = $("#edit-membership1").button('loading');

	//TO DO : CALLING API HERE

	alert("edit membership successfuly");
	location.reload();
});

function delete_membership_modal()
{
	$("#deleteMembershipModal").modal();
}

$("#delete-membership-btn").click(function(){
	var $btn = $("#delete-membership-btn").button('loading');

	//TO DO : CALLING API HERE

	alert("delete membership successfuly");
	location.reload();
});


function delete_reward_modal()
{
	$("#deleteRewardModal").modal();
}

$("#delete-rewards-btn").click(function(){
	var $btn = $("#delete-rewards-btn").button('loading');

	//TO DO : CALLING API HERE

	alert("delete reward successfuly");
	location.reload();
});

function update_reward_modal()
{
	$("#updateRewardModal").modal();
}

function block_reward(reward_id)
{
	$("#block-reward-id").val(reward_id);
	$("#blockRewardModal").modal();
}

$("#block-reward-btn").click(function(){
	var $btn = $("#block-reward-btn").button('loading');

	//TO DO : CALLING API HERE

	reward_id = $("#block-reward-id").val();

	$("#reward-status-"+reward_id).attr('class', 'fa fa-ban fa-lg');
	$("#reward-status-"+reward_id).css('color', '#ff6c60');
	
	$("#reward-status-link-"+reward_id).attr("onclick", "unblock_reward('"+reward_id+"')");

	alert("block reward successfuly");

	$("#blockRewardModal").modal('hide');

	$btn.button('reset');
});

function unblock_reward(reward_id)
{
	$("#unblock-reward-id").val(reward_id);
	$("#unblockRewardModal").modal();
}

$("#unblock-reward-btn").click(function(){
	var $btn = $("#unblock-reward-btn").button('loading');

	//TO DO : CALLING API HERE

	reward_id = $("#unblock-reward-id").val();

	$("#reward-status-"+reward_id).attr('class', 'fa fa-check-circle fa-lg');
	$("#reward-status-"+reward_id).css('color', '#89C45B');
	
	$("#reward-status-link-"+reward_id).attr("onclick", "block_reward('"+reward_id+"')");

	alert("unblock reward successfuly");

	$("#unblockRewardModal").modal('hide');

	$btn.button('reset');
});


function block_partnership(partnership_id)
{	
	$("#block-partnership-id").val(partnership_id);
	$("#blockPartnershipModal").modal();
}

$("#block-partnership-btn").click(function(){
	var $btn = $("#block-partnership-btn").button('loading');

	//TO DO : CALLING API HERE

	partnership_id = $("#block-partnership-id").val();

	$("#partnership-status-"+partnership_id).attr('class', 'fa fa-ban fa-lg');
	$("#partnership-status-"+partnership_id).css('color', '#ff6c60');
	
	$("#partnership-status-link-"+partnership_id).attr('onclick', 'unblock_partnership('+partnership_id+')');

	alert("block partnership successfuly");

	$("#blockPartnershipModal").modal('hide');

	$btn.button('reset');
});


function unblock_partnership(partnership_id)
{
	$("#unblock-partnership-id").val(partnership_id);
	$("#unblockPartnershipModal").modal();
}

$("#unblock-partnership-btn").click(function(){
	var $btn = $("#unblock-partnership-btn").button('loading');

	//TO DO : CALLING API HERE

	partnership_id = $("#unblock-partnership-id").val();

	$("#partnership-status-"+partnership_id).attr('class', 'fa fa-check-circle fa-lg');
	$("#partnership-status-"+partnership_id).css('color', '#89C45B');
	
	$("#partnership-status-link-"+partnership_id).attr('onclick', 'block_partnership('+partnership_id+')');

	alert("block partnership successfuly");

	$("#unblockPartnershipModal").modal('hide');

	$btn.button('reset');
});

function delete_partnership_modal()
{
	$("#deletePartnershipModal").modal();
}

function update_partnership_modal()
{
	$("#updatePartnershipModal").modal();
}

$("#reward-type").change(function(){
  reawrd_type = $("#reward-type").val();

  if (reawrd_type == 'Off-set Value') {
  	$("#value-amount").attr("readonly", false);
  } else {
  	$("#value-amount").attr("readonly", true);
  }
});

$('.calendar-date').datepicker({
});

$("#create-membership-btn").click(function(){

	var $btn = $("#create-membership-btn").button('loading');

	$("#overlay").css("display", "block");

	company_name     	 = $("#membership-company-name").val();
	name             	 = $("#card-name").val();
	// image             = $("#card-image").val();
	description      	 = $("#membership-description").val();
	offer_start      	 = $("#offer-start").val();
	offer_end        	 = $("#offer-end").val();
	terms            	 = $("#membership-terms").val();
	price            	 = $("#membership-price").val();
	discount          	 = $("#membership-discount").val();
	quantity_for_sales   = $("#quantity-for-sales").val();
	point_per_spend  	 = $("#point-per-spend").val();
	membership_policy  	 = $("#membership-policy").val();

  	var file_data = $('#card-image').prop('files')[0];   
    var form_data = new FormData();
    form_data.append('file', file_data);

	$.ajax({
		url:"card/upload_membership_picture",
		dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
		success:function(data) {
			var settings = {
			    "async": true,
			    "url": "https://v9hsp4riqc.execute-api.ap-southeast-1.amazonaws.com/Prod/comp/membershipcard",
			    "method": "POST",
			    "headers": {
			      "content-type": "application/json"
			      },
			    "processData": true,
			    "data": "{\r\n\"compName\":\""+company_name+"\", \r\n\"name\":\""+name+"\", \r\n\"startDate\":\""+offer_start+"\", \r\n\"endDate\":\""+offer_end+"\", \r\n\"price\":\""+price+"\", \r\n\"quantity\":\""+quantity_for_sales+"\", \r\n\"imageUrl\":\""+data+"\", \r\n\"discountPercentage\":\""+discount+"\", \r\n\"desc\":\""+description+"\", \r\n\"points\":\""+point_per_spend+"\", \r\n\"terms\":\""+terms+"\", \r\n\"policyTerms\":\""+membership_policy+"\"}"
			  }

			  $.ajax(settings).done(function (response) {
			      alert("Create New Membership successfuly");
			      location.reload();
			  });
		}
	});
});

$("#create-new-reward-btn").click(function(){
	var $btn = $("#create-membership-btn").button('loading');

	$("#overlay").css("display", "block");

	company_name		= $("#reward-company-name").val();
	membership_id     	= $("#membership-id").val();
	reaward_name       	= $("#reward-name").val();w3mn 
	reward_type       	= $("#reward-type").val();
	value_amount       	= $("#value-amount").val();
	point_needed      	= $("#point-needed").val();
	redeem_quantity   	= $("#redeem-quantity").val();
	reward_description 	= $("#reward-description").val();
	redeem_start        = $("#redeem-start").val();
	redeem_end          = $("#redeem-end").val();
	redeem_datetime  	= $("#redeem-datetime").val();
	redeem_address   	= $("#redeem-address").val();
	reward_policy  	 	= $("#reward-policy").val();

	var file_data = $('#reward-picture').prop('files')[0];   
    var form_data = new FormData();
    form_data.append('file', file_data);

	$.ajax({
		url:"card/upload_reward_picture",
		dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
		success:function(data) {
			var settings = {
				"async": true,
				"url": "https://v9hsp4riqc.execute-api.ap-southeast-1.amazonaws.com/Prod/comp/rewards",
				"method": "POST",
				"headers": {
				  "content-type": "application/json"
				  },
				"processData": true,
				"data": "{\r\n\"compName\":\""+company_name+"\", \r\n\"name\":\""+reaward_name+"\", \r\n\"startDate\":\""+redeem_start+"\", \r\n\"endDate\":\""+redeem_end+"\", \r\n\"imageUrl\":\""+data+"\", \r\n\"memberShipCardId\":\""+membership_id+"\", \r\n\"quantity\":\"-\", \r\n\"pointsRequired\":\""+point_needed+"\", \r\n\"rewardType\":\""+reward_type+"\", \r\n\"address\":\""+redeem_address+"\", \r\n\"dayTime\":\""+redeem_datetime+"\", \r\n\"lastDate\":\""+redeem_end+"\", \r\n\"policyTerms\":\""+reward_policy+"\"}"
			}

			$.ajax(settings).done(function (response) {
				alert("Create New Reward successfuly");
				location.reload();
			});
			
		}
	});
});