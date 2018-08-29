<div class="nvertuo2018Home">
	<section class="intro">
		<!-- <div class="introContent"> -->
			<div class="introText">
				<h1 class="introHeader header--medium"><?php echo $intro['header'];?></h1>
				<h2 class="introTitle header--main"><?php echo $intro['title'];?></h2>
				<a class="introTitleCTA block-button" href="<?php echo $intro['cta_link'];?>"><span class="label button--label"><?php echo $intro['cta'];?></span></a>
			</div>
		<!-- </div> -->
		<div class="introScroll">
		<span class="introScrollCTA header--small"><?php echo $intro['scroll'];?><i class="introScrollIcon"></i></span>
	</section>
	<section class="choice" data-component="TabsComponent">
		<h2 class="choiceTitle header--main"><?php echo $choice['title'];?></h2>
		<div class="choiceTabs">
			<button class="choiceTab original">
				<span class="choiceTabLabel header--medium"><?php echo $choice['original_label'];?></span>
			</button>
			<button class="choiceTab vertuo">
				<span class="choiceTabLabel header--medium"><?php echo $choice['vertuo_label'];?></span>
			</button>
		</div>
		<div class="choiceOptions">
			<div id="choice-original" class="choiceContainer original is-visible">
				<?php foreach ($choice['original'] as $choiceItem) { ?>
					<div class="choiceItem <?php echo $choiceItem['class'];?>">
						<div class="choiceItemGraphic"></div>
						<h3 class="choiceItemHeader header--medium"><?php echo $choiceItem['header'];?></h3>
						<h4 class="choiceItemTitle header--slim"><?php echo $choiceItem['title'];?></h4>
						<p class="choiceItemBody body--normal"><?php echo $choiceItem['body'];?></p>
						<div class="choiceItemCTA">
							<span class="choiceItemCTALabel body--normal"><?php echo $choiceItem['cta'];?></span>
							<button class="choiceItemCTAButton round-button plus"><span class="icon"></span></button>
						</div>
						<?php if(isset($choiceItem['feature_a'])):?>
							<div class="choiceItemFeatures">
								<div class="choiceItemFeature">
									<div class="choiceItemFeatureGraphic"></div>
									<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_a'];?></p>
								</div>
								<div class="choiceItemFeature">
									<div class="choiceItemFeatureGraphic"></div>
									<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_b'];?></p>
								</div>
							</div>
						<?php endif; ?>
					</div>
				<?php } ?>
			</div>
			<div id="choice-vertuo" class="choiceContainer vertuo">
				<?php foreach ($choice['vertuo'] as $choiceItem) { ?>
					<div class="choiceItem <?php echo $choiceItem['class'];?>">
						<div class="choiceItemGraphic"></div>
						<h3 class="choiceItemHeader header--medium"><?php echo $choiceItem['header'];?></h3>
						<h4 class="choiceItemTitle header--slim"><?php echo $choiceItem['title'];?></h4>
						<p class="choiceItemBody body--normal"><?php echo $choiceItem['body'];?></p>
						<div class="choiceItemCTA">
							<span class="choiceItemCTALabel body--normal"><?php echo $choiceItem['cta'];?></span>
							<button class="choiceItemCTAButton round-button plus"><span class="icon"></span></button>
						</div>
						<?php if(isset($choiceItem['feature_a'])):?>
							<div class="choiceItemFeatures">
								<div class="choiceItemFeature">
									<div class="choiceItemFeatureGraphic"></div>
									<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_a'];?></p>
								</div>
								<div class="choiceItemFeature">
									<div class="choiceItemFeatureGraphic"></div>
									<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_b'];?></p>
								</div>
							</div>
						<?php endif; ?>
					</div>
				<?php } ?>
			</div>
		</div>
	</section>
</div>


<?php //foreach ($intro_body as $body) { ?>
	<!-- <p class="body-text__big"><?php //echo $body;?></p> -->
<?php //} ?>
<!-- <div class="portrait"> -->
	<!--img src="<?php //echo $settings['base_url'];?>/assets/images/home/quote-author.png"-->
<!-- </div> -->