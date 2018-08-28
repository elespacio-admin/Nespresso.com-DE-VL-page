<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo $header['title']; ?></title>
    <meta name="description" content="<?php echo $header['og_description']; ?>">
    <meta charset="utf-8">
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
      <!-- Those two CSS files are coming from original/destination page wrapper -->
      
      <link rel="stylesheet" type="text/css" href="<?php echo $settings['base_url'];?>/assets/styles/nespresso-original-desktop.css">
      <link rel="stylesheet" type="text/css" href="<?php echo $settings['base_url'];?>/assets/styles/nespresso-wrapper.css?v=<?php echo $settings['version'];?>">
    <?php endif;?>

    <link rel="stylesheet" type="text/css" href="<?php echo $settings['base_url'];?>/assets/styles/main.css?v=<?php echo $settings['version'];?>">

    <script src="<?php echo $settings['base_url'];?>/assets/scripts/main.js"></script>
    <script src="<?php echo $settings['base_url'];?>/assets/scripts/jquery.1.7.1.min.js"></script>
  </head>

  <body>
    <?php if(!$isDistribution): ?>
    <div class="nespresso-wrapper">

      <div class="black-nespresso-bar"></div>
    <?php endif;?>

      <div id="nvertuo2018" class="">