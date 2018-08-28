<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Deploy_model extends CI_Model {

  public function __construct(){
    // Call the CI_Model constructor
    parent::__construct();
  }

  public function getJsonData(){

    $returnValue = "";

    // get settings
    $dataFile = file_get_contents('data/distribution.json');
    $dataJSON = json_decode($dataFile, true);

    $returnValue = $dataJSON;

    return $returnValue;
  }

  public function get_page_markup($url){
  }
}