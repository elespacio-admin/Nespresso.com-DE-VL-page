<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo $header['title']; ?></title>
    <meta name="description" content="<?php echo $header['og_description']; ?>">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

    <meta property="og:title" content="<?php echo $header['og_title']; ?>" />
    <meta property="og:description" content="<?php echo $header['og_description']; ?>" />
    <meta property="og:image" content="<?php echo $settings['base_url']. "/assets/images/social/" . $header['og_image']; ?>" />
    <meta property="og:site_name" content="<?php echo $header['og_site_name']; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo $settings['base_url'] . $header['og_url']; ?>" />

    <script src="<?php echo $settings['base_url'];?>/assets/scripts/modernizr.js"></script>
    <script src="<?php echo $settings['base_url'];?>/assets/scripts/picturefill.js"></script>

    <?php if(!$isDistribution): ?>
      <!--====== MAIN STYLESHEETS ======-->
      <link rel="stylesheet" href="https://www.nespresso.com/shared_res/mos/free_html/de/vertuo/css/normalize.css">
      <link rel="stylesheet" href="https://www.nespresso.com/ecom/medias/sys_master/public/11324746399774/animate.css">
      <link href="https://www.nespresso.com/ecom/medias/sys_master/public/11324747481118/style.css" rel="stylesheet">
      <link href="https://www.nespresso.com/ecom/medias/sys_master/public/11310902902814/responsive.css" rel="stylesheet">
      <script src="https://www.nespresso.com/shared_res/mos/free_html/de/vertuo/js/vendor/modernizr-2.8.3.min.js"></script>

      <!-- This CSS files is emulating Nespresso wrapper: geader and footer sizes -->
      <link rel="stylesheet" type="text/css" href="<?php echo $settings['base_url'];?>/assets/styles/nespresso-wrapper.css">
    <?php endif;?>

    <link rel="stylesheet" type="text/css" href="<?php echo $settings['base_url'];?>/assets/styles/main.css?v=<?php echo $settings['version'];?>">
    <!-- <script src="<?php //echo $settings['base_url'];?>/assets/scripts/jquery.1.7.1.min.js"></script> -->
  </head>

  <body>
    <?php if(!$isDistribution): ?>
    <div class="nespresso-wrapper">

      <div class="nespresso-header"></div>
      <div class="nespresso-header--attached"></div>
    <?php endif;?>

      <div id="nvertuo2018" class="">