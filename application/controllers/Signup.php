<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Auth0\SDK\API\Management;

class Signup extends CI_Controller {

	public function index()
	{
		$this->load->view('register_merchant_view');
	}

	public function success()
	{
		$this->load->view('register_success_view');
	}

}
