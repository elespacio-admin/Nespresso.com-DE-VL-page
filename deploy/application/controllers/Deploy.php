<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Deploy extends CI_Controller {

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

  // private function parseParams($data, $params = '') {

  //   $lang = strpos($params, 'de') === false ? 'en' : 'de';
  //   $isMobile = strpos($params, 'mobile') === false ? 0 : 1;

  //   $data['lang'] = $lang;
  //   $data['isMobile'] = $isMobile;

  //   return $data;
  // }

 /**
 * Copy a file, or recursively copy a folder and its contents
 * @author      Aidan Lister <aidan@php.net>
 * @version     1.0.1
 * @link        http://aidanlister.com/2004/04/recursively-copying-directories-in-php/
 * @param       string   $source    Source path
 * @param       string   $dest      Destination path
 * @param       int      $permissions New folder creation permissions
 * @return      bool     Returns true on success, false on failure
 */
  private function xcopy($source, $dest, $permissions = 0755)
  {
      // Check for symlinks
      if (is_link($source)) {
          return symlink(readlink($source), $dest);
      }

      // Simple copy for a file
      if (is_file($source)) {

        $filesToOmit = $this->data['files_to_omit'];

        for($i = 0; $i < count($filesToOmit); $i++) {

          if(strpos($source, $filesToOmit[$i]) !== false) {

            break;
          }
        }

        if($i == count($filesToOmit)) {

          return copy($source, $dest);
        }
        else {

          return null;
        }
      }

      // Make destination directory
      if (!is_dir($dest)) {
          mkdir($dest, $permissions);
      }

      // Loop through the folder
      $dir = dir($source);
      while (false !== $entry = $dir->read()) {
          // Skip pointers
          if ($entry == '.' || $entry == '..') {
              continue;
          }

          // Deep copy directories
          $this->xcopy("$source/$entry", "$dest/$entry", $permissions);
      }

      // Clean up
      $dir->close();
      return true;
  }

  private function mkpath($path)
  {
    if(@mkdir($path, 0755) or file_exists($path)) return true;
    return ($this->mkpath(dirname($path)) and mkdir($path, 0755));
  }

  private function replace_urls($tokens, $url, $content) {

    foreach ($tokens as $token) {

      $content = str_replace($token, $url, $content);
    }

    return $content;
  }

  private function render_page($url, $sufix, $dest_path) {

    // create curl resource
    $ch = curl_init();

    // set url
    curl_setopt($ch, CURLOPT_URL, $this->data['source_url'].$url.$sufix.'_distribution');

    //return the transfer as a string
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    // $output contains the output string
    $output = curl_exec($ch);

    // close curl resource to free up system resources
    curl_close($ch);

    // replace URLs
    $output = $this->replace_urls($this->data['urls_to_replace'], $this->get_distribution_url($sufix), $output);

    $this->mkpath($this->pagesDir.$dest_path);

    $myfile = fopen($this->pagesDir.$dest_path."/index.html", "w") or die("Unable to open file!");

    fwrite($myfile, $output);
    fclose($myfile);
  }

  private function replace_in_file($target, $sufix) {

    $path = $this->distDir.$target;

    $myfile = fopen($path, "r+") or die("Unable to open file! - ".$path);

    $content = fread($myfile, filesize($path));
    fclose($myfile);

    $myfile = fopen($path, "w") or die("Unable to open file! - ".$path);

    // replace URLs
    $content = $this->replace_urls($this->data['urls_to_replace'], $this->get_distribution_url($sufix), $content);

    fwrite($myfile, $content);
    fclose($myfile);
  }

  private function get_distribution_url($sufix) {
    return $this->data[str_replace('/', '', 'distribution_url_'.$sufix)];
  }

  public function __construct(){
    parent::__construct();

    $this->load->model('deploy_model');
    $this->load->library('Helpers');
  }

  public function render_view($params = 'desktop_en'){

    $data = $this->deploy_model->getJsonData();

    foreach ($data['variants'] as $value) {

      $this->data = $data;
      $this->distDir = '../distribution'.$value['dest_dir'];
      $this->assetsDistDir = $this->distDir.'/assets';
      $this->pagesDir = $this->distDir;

      $this->mkpath($this->assetsDistDir);

      $this->xcopy('./assets', $this->assetsDistDir);

      // render pages to files
      foreach ($data['site_map'] as $location) {

        $this->render_page($location['src_path'], $value['url_sufix'], $location['dest_path']);
      }

      // replace paths in static assets
      foreach ($data['txt_assets'] as $asset) {

        $this->replace_in_file($asset, $params);
      }
    }

    $this->load->view('deploy/render');
  }
}
