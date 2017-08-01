function sumOfColumns(){

    var totalPromoQuantity = 0;
    var totalPromoSold = 0;
    var totalPromoClaimed = 0;
    var totalPromoBalance = 0;

    $(".sum_promotion_quantity").each(function(){
        totalPromoQuantity += parseInt($(this).html());
        $(".total_promotion_quantity").html(totalPromoQuantity);
    });

    $(".sum_promotion_sold").each(function(){
        totalPromoSold += parseInt($(this).html());
        $(".total_promotion_sold").html(totalPromoSold);
    });

    $(".sum_promotion_claimed").each(function(){
        totalPromoClaimed += parseInt($(this).html());
        $(".total_promotion_claimed").html(totalPromoClaimed);
    });

    $(".sum_promotion_balance").each(function(){
        totalPromoBalance += parseInt($(this).html());
        $(".total_promotion_balance").html(totalPromoBalance);
    });
}

var EditableTable = function () {

    return {

        //main function to initiate the module
        init: function () {
            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control small" readonly="readonly" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control small" value="' + aData[1] + '" style="width: 50%;">';
                jqTds[2].innerHTML = '<input type="text" class="form-control small" readonly="readonly" value="' + aData[2] + '" style="width: 50%;">';
                jqTds[3].innerHTML = '<input type="text" class="form-control small" readonly="readonly" value="' + aData[3] + '" style="width: 50%;">';
                jqTds[4].innerHTML = '<input type="text" class="form-control small" readonly="readonly" value="' + aData[4] + '" style="width: 50%;">';
                jqTds[5].innerHTML = '<a class="edit" href="#"><i class="fa fa-floppy-o" aria-hidden="true"></i></a>';
                jqTds[6].innerHTML = '<a class="cancel" href="">Cancel</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable.fnUpdate('<a class="edit" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>', nRow, 5, false);
                oTable.fnUpdate('<a href="#" id="company-product-link-1" onclick="block_product(1)"><i class="fa fa-check-circle fa-lg" id="company-product-1" aria-hidden="true" style="color: #89C45B;"></i></a>', nRow, 6, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 5, false);
                oTable.fnDraw();
            }

            var oTable = $('#editable-branch-promotion').dataTable({
                "aLengthMenu": [
                    [5, 15, 20, -1],
                    [5, 15, 20, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": 5,
                "sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "aoColumnDefs": [{
                        'bSortable': false,
                        'aTargets': [0]
                    }
                ]
            });

            jQuery('#editable-branch-promotion_wrapper .dataTables_filter input').addClass("form-control medium"); // modify table search input
            jQuery('#editable-branch-promotion_wrapper .dataTables_length select').addClass("form-control xsmall"); // modify table per page dropdown

            var nEditing = null;

            $('#editable-branch-promotion_new').click(function (e) {
                e.preventDefault();
                var aiNew = oTable.fnAddData(['', '', '', '',
                        '<a class="edit" href="">Edit</a>', '<a class="cancel" data-mode="new" href="">Cancel</a>'
                ]);
                var nRow = oTable.fnGetNodes(aiNew[0]);
                editRow(oTable, nRow);
                nEditing = nRow;
            });

            $('#editable-branch-promotion').on('click', 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("Are you sure to delete this row ?") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("Deleted! Do not forget to do some ajax to sync with backend :)");
            });

            $('#editable-branch-promotion').on('click', 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, nEditing);
                    nEditing = null;
                }
            });

            $('#editable-branch-promotion').on('click', 'a.edit', function (e) {
                e.preventDefault();

                /* Get the row as a parent of the link that was clicked on */
                var nRow = $(this).parents('tr')[0];

                if (nEditing !== null && nEditing != nRow) {
                    /* Currently editing - but not this row - restore the old before continuing to edit mode */
                    restoreRow(oTable, nEditing);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                } else if (nEditing == nRow && this.innerHTML == '<i class="fa fa-floppy-o" aria-hidden="true"></i>') {
                    /* Editing this row and want to save it */
                    saveRow(oTable, nEditing);
                    nEditing = null;
                    alert("Updated! Do not forget to do some ajax to sync with backend :)");
                    sumOfColumns();
                } else {
                    /* No edit in progress - let's start one */
                    editRow(oTable, nRow);
                    nEditing = nRow;
                }
            });
        }

    };

}();