function update_product_modal () 
{
	$("#editNewProductModal").modal();
}

function delete_product_modal () 
{
	$("#deleteProductModal").modal();
}

function block_product(product_id)
{
	$("#block-product-id").val(product_id);
	$("#blockProductModal").modal();
}

$("#block-product-btn").click(function(){
	var $btn = $("#block-product-btn").button('loading');

	//TO DO : CALLING API HERE

	product_id = $("#block-product-id").val();

	$("#company-product-"+product_id).attr('class', 'fa fa-ban fa-lg');
	$("#company-product-"+product_id).css('color', '#ff6c60');
	
	$("#company-product-link-"+product_id).attr('onclick', 'unblock_product('+product_id+')');

	alert("block product successfuly");

	$("#blockProductModal").modal('hide');

	$btn.button('reset');
});

function unblock_product(product_id)
{
	$("#unblock-product-id").val(product_id);
	$("#unblockProductModal").modal();
}

$("#unblock-product-btn").click(function(){
	var $btn = $("#unblock-product-btn").button('loading');

	//TO DO : CALLING API HERE

	product_id = $("#unblock-product-id").val();

	$("#company-product-"+product_id).attr('class', 'fa fa-check-circle fa-lg');
	$("#company-product-"+product_id).css('color', '#89C45B');
	
	$("#company-product-link-"+product_id).attr('onclick', 'block_product('+product_id+')');

	alert("unblock product successfuly");

	$("#unblockProductModal").modal('hide');

	$btn.button('reset');
});

function add_product_branch_modal () {
	$("#branchProductModal").modal();
}

$('.calendar-date').datepicker({
});

function update_promotion_modal () 
{
	$("#editPromotionModal").modal();
}

function delete_promotion_modal () 
{
	$("#deletePromotionModal").modal();
}

function block_promotion(promotion_id)
{
	$("#block-promotion-id").val(promotion_id);
	$("#blockPromotionModal").modal();
}

$("#block-promotion-btn").click(function(){
	var $btn = $("#block-promotion-btn").button('loading');

	//TO DO : CALLING API HERE

	promotion_id = $("#block-promotion-id").val();

	$("#company-promotion-"+promotion_id).attr('class', 'fa fa-ban fa-lg');
	$("#company-promotion-"+promotion_id).css('color', '#ff6c60');
	
	$("#company-promotion-link-"+promotion_id).attr('onclick', 'unblock_promotion('+promotion_id+')');

	alert("block promotion successfuly");

	$("#blockPromotionModal").modal('hide');

	$btn.button('reset');
});

function unblock_promotion(promotion_id)
{
	$("#unblock-promotion-id").val(promotion_id);
	$("#unblockPromotionModal").modal();
}

$("#unblock-promotion-btn").click(function(){
	var $btn = $("#unblock-promotion-btn").button('loading');

	//TO DO : CALLING API HERE

	promotion_id = $("#unblock-promotion-id").val();

	$("#company-promotion-"+promotion_id).attr('class', 'fa fa-check-circle fa-lg');
	$("#company-promotion-"+promotion_id).css('color', '#89C45B');
	
	$("#company-promotion-link-"+promotion_id).attr('onclick', 'block_promotion('+promotion_id+')');

	alert("unblock promotion successfuly");

	$("#unblockPromotionModal").modal('hide');

	$btn.button('reset');
});