<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page_model extends CI_Model {

  public function __construct(){
    // Call the CI_Model constructor
    parent::__construct();
  }


  public function getJsonData($path = 'home', $params){

    $returnValue = "";

    // get settings
    $dataFile = file_get_contents('data/data_'.$params['lang'].'.json');
    $dataJSON = json_decode($dataFile, true);

    // get content string
    if ( array_key_exists ( $path , $dataJSON ) ){
      $returnValue = $dataJSON[$path];
    } else {
      return "";
    }

    $returnValue["lang"] = $params["lang"];
    $returnValue["isDistribution"] = $params["isDistribution"];

    $returnValue["settings"] = $dataJSON["settings"];

    return $returnValue;
  }
}