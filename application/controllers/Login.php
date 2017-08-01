<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Auth0\SDK\API\Management;

class Login extends CI_Controller {

	public function index()
	{
		$this->load->view('login_merchant_view');
	}

	public function login_success($access_token, $nickname, $user_id, $company_name, $license_number)
	{
		$array_session = array(
				'access_token' 	=> $access_token,
				'nickname'		=> $nickname,
				'user_id'		=> $user_id,
				'company_name'	=> $company_name,
				'license_number'	=> $license_number
			);

		$this->session->set_userdata($array_session);

		header('location:'.base_url().'index.php/dashboard');
	}
	
}
