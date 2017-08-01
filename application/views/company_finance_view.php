
<section id="main-content">
    <section class="wrapper">
        <div class="row">
            <div class="col-md-12">
                <section class="panel">
                    <div class="panel-body profile-information">
                        <div style="background-color: white;">
                            <ul class="nav nav-tabs">
                              <li class="active"><a data-toggle="tab" href="#home">Setup Configurations</a></li>
                              <li><a data-toggle="tab" href="#menu1">Transaction Reports</a></li>
                              <li><a data-toggle="tab" href="#menu2">Subscription Status</a></li>
                            </ul>

                            <div class="tab-content" style="padding: 10px 40px 0 40px;">
                                <div id="home" class="tab-pane fade in active">
                                    <div class="row">
                                        <div class="col-md-12" style="background: white;">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <h4 class="page-title-style">Setup – GST Tax and Service fees</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12" style="background: white; margin-top: 20px;">
                                            <div class="row">
                                                <h4>Service Fee & GST Setting</h4>
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Service Fee</td>
                                                            <td>
                                                                <div class="btn-group" data-toggle="buttons">
                                                                  <label class="btn btn-primary active">
                                                                    <input type="radio" name="options" id="option1" autocomplete="off" checked> Yes
                                                                  </label>
                                                                  <label class="btn btn-primary">
                                                                    <input type="radio" name="options" id="option2" autocomplete="off"> No
                                                                  </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Service Charge (%)
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control">
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>GST Compliance</td>
                                                            <td>
                                                                <div class="btn-group" data-toggle="buttons">
                                                                  <label class="btn btn-primary active">
                                                                    <input type="radio" name="options" id="option1" autocomplete="off" checked> Yes
                                                                  </label>
                                                                  <label class="btn btn-primary">
                                                                    <input type="radio" name="options" id="option2" autocomplete="off"> No
                                                                  </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                GST Rate (%)
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control">
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td></td>
                                                            <td>
                                                               
                                                            </td>
                                                            <td>
                                                                GST Registration Number
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" value="xxxxxxxxx">
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td></td>
                                                            <td>
                                                               
                                                            </td>
                                                            <td>
                                                                GST Included in a Bill
                                                            </td>
                                                            <td>
                                                                <div class="btn-group" data-toggle="buttons">
                                                                  <label class="btn btn-primary active">
                                                                    <input type="radio" name="options" id="option1" autocomplete="off" checked> Yes
                                                                  </label>
                                                                  <label class="btn btn-primary">
                                                                    <input type="radio" name="options" id="option2" autocomplete="off"> No
                                                                  </label>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <button type="button" class="btn btn-primary pull-right">Save</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <h4>Setup – Payment Methods</h4>
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Gateway Provider</th>
                                                            <th>Payment Method</th>
                                                            <th>Charges</th>
                                                            <th>Per Transaction</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>Visa</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>Mastercard</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>AMEX</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>Apple Pay</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>Android Pay</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="unblock_payment_method_modal()"><i class="fa fa-ban fa-lg" aria-hidden="true" style="color: #ff6c60;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>AliPay</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>WeChatPay</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>Baidu</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strip</td>
                                                            <td>China Union Pay</td>
                                                            <td>3.4%</td>
                                                            <td>0.50</td>
                                                            <td>
                                                                <a href="#" onclick="block_payment_method_modal()"><i class="fa fa-check-circle fa-lg" aria-hidden="true" style="color: #89C45B;"></i></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="menu1" class="tab-pane fade">
                                    <div class="row">
                                        <div class="col-md-12" style="background: white;">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <h4 class="page-title-style">Transaction Reports</h4>
                                                        <p style="font-size:11px;">These are the records from various Payment gateway providers. You can verify the transactions directly via their Dashboard.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 form-inline card-toolbar">
                                                    <div class="row">
                                                        <button class="btn btn-success btn-md pull-right" style="margin-right: 10px; width: 20%;">Export CSV</button> 
                                                        <input type="text" class="form-control pull-right" placeholder="To Date" style="margin-right: 10px; width: 20%;"> 
                                                        <input type="text" class="form-control pull-right" placeholder="From Date" style="margin-right: 10px; width: 20%;"> 
                                                        <input type="text" class="form-control pull-right" placeholder="Search" style="margin-right: 10px; width: 30%;"> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12" style="background: white; margin-top: 20px;">
                                            <div class="row">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Transaction Id</th>
                                                            <th>Payment Gateway Provider</th>
                                                            <th>TX Date</th>
                                                            <th>TX Time</th>
                                                            <th>Order Id</th>
                                                            <th>Bill From</th>
                                                            <th>Bill Number</th>
                                                            <th>Branch</th>
                                                            <th>Currency</th>
                                                            <th>Amount</th>
                                                            <th>Payment Method</th>
                                                            <th>Payment Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Send Bill</td>
                                                            <td>12345</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Credit Card</td>
                                                            <td><span style="color: #89C45B;">Active</span></td>
                                                        </tr>

                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>QR-Code Bill</td>
                                                            <td>12345</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Debit Card</td>
                                                            <td><span style="color: #ff6c60;">Reject</span></td>
                                                        </tr>

                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>POS Order</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Apple Pay</td>
                                                            <td><span style="color: #FCB322;">Refund</span></td>
                                                        </tr>

                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td><span style="color: #1fb5ad;">Approve</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="menu2" class="tab-pane fade">
                                    <div class="row">
                                        <div class="col-md-12" style="background: white;">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <h4 class="page-title-style">Subscription Fees & Status</h4>
                                                        <p style="font-size:11px;">Annual in Advance basis. When the Industry is blocked, Merchant can not select this industry during payment.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h4>Account</h4>
                                        <p style="font-size:11px;">(Subscription fees, Hosting and Marketing fees will be charged to this account)</p>

                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Account Number</th>
                                                    <th>Expired Date</th>
                                                    <th>CCV</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>First Capital Pte Ltd</td>
                                                    <td>xxxx-xxxx-xxxx-9845</td>
                                                    <td>DD/MMM/YYYY</td>
                                                    <td>XXX</td>
                                                    <td>
                                                        <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h4>Subscription Fees (Annual)</h4>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>End Date</th>
                                                    <th>Subscribe / Renew</th>
                                                    <th>* Select Industry</th>
                                                    <th>Promotion Code (if any)</th>
                                                    <th>Amount (annual)</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>23/Mar/2018</td>
                                                    <td>12 Months</td>
                                                    <td>
                                                        <select class="form-control">
                                                            <option value="">Select Industry</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input type="text" class="form-control">
                                                    </td>
                                                    <td>
                                                        SGD 240.00
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary">Submit</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h4>Hosting Fees (Monthly)</h4>
                                        <div class="form-inline" style="padding-bottom: 10px;">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option value="">Select Industry</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <button type="button" class="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Items</th>
                                                    <th>Free</th>
                                                    <th>Activities</th>
                                                    <th>Rate</th>
                                                    <th>Fees</th>
                                                    <th>Remark</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Page Views</td>
                                                    <td>100,000</td>
                                                    <td>202,045</td>
                                                    <td>0.001</td>
                                                    <td>=(200,000-100,000)*0.01</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Notification</td>
                                                    <td>10,000</td>
                                                    <td>5,456</td>
                                                    <td>0.001</td>
                                                    <td>=0</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4">Total Payable:SGD</td>
                                                    <td>12.05</td>
                                                    <td>PAID</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h4>Marketing Fees (Monthly)</h4>
                                        <div class="form-inline" style="padding-bottom: 10px;">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option value="">Select Industry</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <button type="button" class="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Items</th>
                                                    <th>Activities</th>
                                                    <th>Reach</th>
                                                    <th>Rate</th>
                                                    <th>Fees</th>
                                                    <th>Remark</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Membership</td>
                                                    <td>20</td>
                                                    <td></td>
                                                    <td>0.5</td>
                                                    <td>10.00</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Promotions</td>
                                                    <td>4</td>
                                                    <td></td>
                                                    <td>1.0</td>
                                                    <td>4.00</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Push Marketing</td>
                                                    <td>30</td>
                                                    <td>3,005</td>
                                                    <td>0.001</td>
                                                    <td>=3,005*0.001 = 3.01</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4">Total Payable:SGD</td>
                                                    <td>17.01</td>
                                                    <td>PAID</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</section>

<div class="modal fade" id="addPaymentModal" role="dialog">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Payment Method</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Gateway Provider</label>
                    <select class="form-control" style="width 100%:">
                        <option value="">Select Gateway Provider</option>
                        <option value="1">Stripe</option>
                        <option value="2">FOMOPay</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Payment Method</label>
                    <select class="form-control" style="width 100%:">
                        <option value="">Select Payment Method</option>
                        <option value="1">Visa</option>
                        <option value="2">Mastercard</option>
                        <option value="2">AMEX</option>
                        <option value="2">Apple Pay</option>
                        <option value="2">Android Pay</option>
                        <option value="2">Ali Pay</option>
                        <option value="2">WeChat Pay</option>
                        <option value="2">BaiDu</option>
                        <option value="2">China Union Pay</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Charges</label>
                    <input type="text" class="form-control" name="bank-name" id="bank-name" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>Per Transaction</label>
                    <input type="text" class="form-control" name="bank-name" id="bank-name" style="width: 100%;">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button class="btn btn-danger" id="create-payment-method-btn">Submit</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="addIndustryModal" role="dialog">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Merchant's Industry</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Industy Name</label>
                    <input type="text" class="form-control" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>Industry Icon</label>
                    <input type="file" class="form-control" style="width: 100%;">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button class="btn btn-danger" id="create-industry-btn">Submit</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="blockPaymentMethodModal" role="dialog">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Block Payment Method</h4>
            </div>
            <div class="modal-body">
                <p>Are you sure want to block this payment method?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button class="btn btn-primary" id="block-payment-method-btn">Block</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="unblockPaymentMethodModal" role="dialog">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Unblock Payment Method</h4>
            </div>
            <div class="modal-body">
                <p>Are you sure want to unblock this payment method?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button class="btn btn-primary" id="block-payment-method-btn">Unblock</button>
            </div>
        </div>
    </div>
</div>
<!-- Placed js at the end of the document so the pages load faster -->
<!--Core js-->
<script src="<?php echo base_url();?>bower_components/jquery/dist/jquery.js"></script>
<script src="<?php echo base_url();?>assets/js/jquery-ui/jquery-ui-1.10.1.custom.min.js"></script>
<script src="<?php echo base_url();?>bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="<?php echo base_url();?>bower_components/bootstrap-table/dist/bootstrap-table.min.js"></script>
<script src="<?php echo base_url();?>assets/js/jquery.dcjqaccordion.2.7.js"></script>
<script src="<?php echo base_url();?>assets/js/jquery.scrollTo.min.js"></script>
<script src="<?php echo base_url();?>assets/js/jQuery-slimScroll-1.3.0/jquery.slimscroll.js"></script>
<script src="<?php echo base_url();?>assets/js/jquery.nicescroll.js"></script>
<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="<?php echo base_url();?>assets/js/flot-chart/excanvas.min.js"></script><![endif]-->
<script src="<?php echo base_url();?>assets/js/skycons/skycons.js"></script>
<script src="<?php echo base_url();?>assets/js/jquery.scrollTo/jquery.scrollTo.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="<?php echo base_url();?>assets/js/calendar/clndr.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
<script src="<?php echo base_url();?>assets/js/calendar/moment-2.2.1.js"></script>
<script src="<?php echo base_url();?>assets/js/evnt.calendar.init.js"></script>
<script src="<?php echo base_url();?>assets/js/jvector-map/jquery-jvectormap-1.2.2.min.js"></script>
<script src="<?php echo base_url();?>assets/js/jvector-map/jquery-jvectormap-us-lcc-en.js"></script>
<script src="<?php echo base_url();?>assets/js/gauge/gauge.js"></script>
<!--clock init-->
<script src="<?php echo base_url();?>assets/js/css3clock/js/css3clock.js"></script>
<!--Easy Pie Chart-->
<script src="<?php echo base_url();?>assets/js/easypiechart/jquery.easypiechart.js"></script>
<!--Sparkline Chart-->
<script src="<?php echo base_url();?>assets/js/sparkline/jquery.sparkline.js"></script>
<!--Morris Chart-->
<script src="<?php echo base_url();?>assets/js/morris-chart/morris.js"></script>
<script src="<?php echo base_url();?>assets/js/morris-chart/raphael-min.js"></script>
<!--jQuery Flot Chart-->
<script src="<?php echo base_url();?>assets/js/flot-chart/jquery.flot.js"></script>
<script src="<?php echo base_url();?>assets/js/flot-chart/jquery.flot.tooltip.min.js"></script>
<script src="<?php echo base_url();?>assets/js/flot-chart/jquery.flot.resize.js"></script>
<script src="<?php echo base_url();?>assets/js/flot-chart/jquery.flot.pie.resize.js"></script>
<script src="<?php echo base_url();?>assets/js/flot-chart/jquery.flot.animator.min.js"></script>
<script src="<?php echo base_url();?>assets/js/flot-chart/jquery.flot.growraf.js"></script>
<script src="<?php echo base_url();?>assets/js/dashboard.js"></script>
<script src="<?php echo base_url();?>assets/js/jquery.customSelect.min.js" ></script>
<!--common script init for all pages-->
<script src="<?php echo base_url();?>assets/js/scripts.js"></script>
<script src="<?php echo base_url();?>assets/js/app/finance.js"></script>
<script src="<?php echo base_url();?>assets/ckeditor/ckeditor.js"></script>
<!--script for this page-->
</body>
</html>