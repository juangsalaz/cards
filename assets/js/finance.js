<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Finance extends CI_Controller {

	public function index()
	{
		if ($this->session->userdata('user_id') != "") {
			$nickname = $this->session->userdata('nickname');
			$data['nickname'] = $nickname;

			$this->load->view('navigation_view', $data);
			$this->load->view('company_finance_view', $data);

		} else {
			header('location:'.base_url());
		}
	}
}
