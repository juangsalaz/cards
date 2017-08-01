<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	public function index()
	{
		if ($this->session->userdata('user_id') != "") {
			$nickname = $this->session->userdata('nickname');
			$data['nickname'] = $nickname;
			$data['company_name'] = $this->session->userdata('company_name');

			$access_token = $this->session->userdata('access_token');

			$curl = curl_init();

			curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://cq-merchant.auth0.com/userinfo",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_ENCODING => "",
			  CURLOPT_MAXREDIRS => 10,
			  CURLOPT_TIMEOUT => 30,
			  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			  CURLOPT_CUSTOMREQUEST => "GET",
			  CURLOPT_HTTPHEADER => array(
			    "authorization: Bearer ".$access_token,
			    "cache-control: no-cache",
			    "postman-token: e99ed592-db54-51e4-24f5-35e5cd64a34d"
			  ),
			));

			$response = curl_exec($curl);
			$err = curl_error($curl);

			curl_close($curl);

			if ($err) {
			  echo "cURL Error #:" . $err;
			} else {
			  $array_user_profile = json_decode($response);
			}

			$data['user_profile'] = $array_user_profile;

			$this->load->view('navigation_view', $data);
			$this->load->view('merchant_dashboard_view', $data);
		} else {
			header('location:../login');
		}
	}

	public function add_merchant()
	{
		if ($this->session->userdata('user_id') != "") {
			$this->load->view('cms_add_merchant_view');
		} else {
			header('location:../login');
		}
	}

	public function merchant_list()
	{
		if ($this->session->userdata('user_id') != "") {
			$this->load->view('cms_merchant_list_view');
		} else {
			header('location:../login');
		}
	}

	public function logout()
	{
		$this->session->sess_destroy();
		header('location:../login');
	}

	
}
