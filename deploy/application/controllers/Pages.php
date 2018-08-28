<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

	/**
	* Index Page for this controller.
	*
	* Maps to the following URL
	*    http://example.com/index.php/pages
	*  - or -
	*    http://example.com/index.php/pages/index
	*  - or -
	* Since this controller is set as the default controller in
	* config/routes.php, it's displayed at http://example.com/
	*
	* So any other public methods not prefixed with an underscore will
	* map to /index.php/welcome/<method_name>
	* @see http://codeigniter.com/user_guide/general/urls.html
	*/

  private function parseParams($params = '') {

    $data = array();

    $lang = (strpos($params, '_de') === false) ? 'en' : 'de';
    $isDistribution = (strpos($params, '_dist') === false) ? 0 : 1;

    $data['lang'] = $lang;
    $data['isDistribution'] = $isDistribution;

    return $data;
  }

  public function __construct(){
    parent::__construct();

    $this->load->model('page_model');
    $this->load->library('Helpers');
  }

  public function home_view($params = 'desktop_en'){

    $parsedParams = $this->parseParams($params);
    $data = $this->page_model->getJsonData('home', $parsedParams);

    $this->load->view('templates/header', $data);
    $this->load->view('pages/home', $data);
    $this->load->view('templates/footer', $data);
  }

  public function home_redirect(){

    //header("location: /");
    exit;
  }

  public function styleguide(){

    $this->load->view('pages/styleguide');
  }
}
