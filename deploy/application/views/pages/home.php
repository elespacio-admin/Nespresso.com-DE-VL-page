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
		<div class="choiceGraphicTexts">
			<span class="choice--label choiceGraphicText original outer">O<br>r<br>i<br>g<br>i<br>n<br>a<br>l</span>
			<span class="choice--label choiceGraphicText vertuo outer">V<br>e<br>r<br>t<br>u<br>o</span>
		</div>
		<div class="constraint-wrapper">
			<div class="choiceTabs">
				<button class="choiceTab original">
					<img src="<?php echo $settings['base_url'].'/assets/images/choice-tab-original.png'?>" alt="<?php echo $choice['original_alt'];?>">
					<span class="choiceTabLabel header--medium"><?php echo $choice['original_label'];?></span>
				</button>
				<button class="choiceTab vertuo">
					<img src="<?php echo $settings['base_url'].'/assets/images/choice-tab-vertuo.png'?>" alt="<?php echo $choice['vertuo_alt'];?>">
					<span class="choiceTabLabel header--medium"><?php echo $choice['vertuo_label'];?></span>
				</button>
			</div>
		<div class="choiceOptions">
				<div id="choice-original" class="choiceContainer original is-visible">
					<span class="choice--label choiceGraphicText original inner">O<br>r<br>i<br>g<br>i<br>n<br>a<br>l</span>
					<?php foreach ($choice['original'] as $choiceItem) { ?>
						<div class="choiceItem">
							<div class="choiceItemGraphic <?php echo $choiceItem['class'];?>">
								<img src="<?php echo $settings['base_url'].'/assets/images/'.$choiceItem['image']?>" alt="<?php echo $choiceItem['image'];?>">
							</div>
							<h3 class="choiceItemHeader header--medium"><?php echo $choiceItem['header'];?></h3>
							<h4 class="choiceItemTitle header--slim"><?php echo $choiceItem['title'];?></h4>
							<p class="choiceItemBody body--normal"><?php echo $choiceItem['body'];?></p>
							<div class="choiceItemCTA">
								<span class="choiceItemCTALabel body--normal"><?php echo $choiceItem['cta'];?></span>
								<button class="choiceItemCTAButton round-button plus" data-id="original-<?php echo $choiceItem['class'];?>" aria-label="<?php echo $generic['more'];?>"><i class="icon" aria-hidden></i></button>
							</div>
							<?php if(isset($choiceItem['feature_a'])):?>
								<div class="choiceItemFeatures">
									<div class="choiceItemFeature">
										<div class="choiceItemFeatureGraphic sprite <?php echo $choiceItem['icon_a'];?>"></div>
										<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_a'];?></p>
									</div>
									<div class="choiceItemFeature">
										<div class="choiceItemFeatureGraphic sprite <?php echo $choiceItem['icon_b'];?>"></div>
										<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_b'];?></p>
									</div>
								</div>
							<?php endif; ?>
							<aside class="overlay <?php echo $choiceItem['class'];?>" role="dialog" aria-labelledby="dialogTitle" data-id="original-<?php echo $choiceItem['class'];?>" data-component="OverlayComponent">
								<div class="overlayWrapper">
									<button class="overlayClose round-button close big" aria-label="<?php echo $generic['close'];?>"><i class="icon"></i></button>
									<div class="overlayContent">
										<h5 id="dialogTitle" class="overlayHeader header--slim"><?php echo $choiceItem['header'];?></h5>
										<ul class="overlayItems">
											<?php if(isset($choiceItem['overlay_items'])):?>
												<?php foreach ($choiceItem['overlay_items'] as $oItem) { ?>
													<li class="overlayItem <?php echo $oItem['size'];?>">
														<div class="overlayItemGraphic" data-image="<?php echo $settings['base_url'].'/assets/images/'.$oItem['image']?>"></div>
														<h6 class="overlayItemName header--medium"><?php echo $oItem['name'];?></h6>
														<?php if(isset($oItem['description'])): ?>
															<p class="overlayItemDescription body--normal"><?php echo $oItem['description'];?></p>
														<?php endif; ?>
													</li>
												<?php } ?>
											<?php endif;?>
										</ul>
									</div>
									<a href="<?php echo $choiceItem['overlay_cta_link'];?>" class="overlayCTA block-button"><span class="label button--label"><?php echo $choiceItem['overlay_cta'];?></span></a>
								</div>
							</aside>
						</div>
					<?php } ?>
				</div>
				<div id="choice-vertuo" class="choiceContainer vertuo">
					<span class="choice--label choiceGraphicText vertuo inner">V<br>e<br>r<br>t<br>u<br>o</span>
					<?php foreach ($choice['vertuo'] as $choiceItem) { ?>
						<div class="choiceItem">
							<div class="choiceItemGraphic <?php echo $choiceItem['class'];?>">
								<img src="<?php echo $settings['base_url'].'/assets/images/'.$choiceItem['image']?>" alt="<?php echo $choiceItem['image'];?>">
							</div>
							<h3 class="choiceItemHeader header--medium"><?php echo $choiceItem['header'];?></h3>
							<h4 class="choiceItemTitle header--slim"><?php echo $choiceItem['title'];?></h4>
							<p class="choiceItemBody body--normal"><?php echo $choiceItem['body'];?></p>
							<div class="choiceItemCTA">
								<span class="choiceItemCTALabel body--normal"><?php echo $choiceItem['cta'];?></span>
								<button class="choiceItemCTAButton round-button plus" data-id="vertuo-<?php echo $choiceItem['class'];?>" aria-label="<?php echo $generic['more'];?>"><i class="icon" aria-hidden></i></button>
							</div>
							<?php if(isset($choiceItem['feature_a'])):?>
								<div class="choiceItemFeatures">
									<div class="choiceItemFeature">
										<div class="choiceItemFeatureGraphic sprite <?php echo $choiceItem['icon_a'];?>"></div>
										<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_a'];?></p>
									</div>
									<div class="choiceItemFeature">
										<div class="choiceItemFeatureGraphic sprite <?php echo $choiceItem['icon_b'];?>"></div>
										<p class="choiceItemFeatureLabel header--medium"><?php echo $choiceItem['feature_b'];?></p>
									</div>
								</div>
							<?php endif; ?>
						</div>
						<aside class="overlay <?php echo $choiceItem['class'];?>" role="dialog" aria-labelledby="dialogTitle" data-id="vertuo-<?php echo $choiceItem['class'];?>" data-component="OverlayComponent">
								<div class="overlayWrapper">
									<button class="overlayClose round-button close big" aria-label="<?php echo $generic['close'];?>"><i class="icon"></i></button>
									<div class="overlayContent">
										<h5 id="dialogTitle" class="overlayHeader header--slim"><?php echo $choiceItem['header'];?></h5>
										<ul class="overlayItems">
											<?php if(isset($choiceItem['overlay_items'])):?>
												<?php foreach ($choiceItem['overlay_items'] as $oItem) { ?>
													<li class="overlayItem <?php echo $oItem['size'];?>">
														<div class="overlayItemGraphic" data-image="<?php echo $settings['base_url'].'/assets/images/'.$oItem['image']?>"></div>
														<h6 class="overlayItemName header--medium"><?php echo $oItem['name'];?></h6>
														<?php if(isset($oItem['description'])): ?>
															<p class="overlayItemDescription body--normal"><?php echo $oItem['description'];?></p>
														<?php endif; ?>
													</li>
												<?php } ?>
											<?php endif;?>
										</ul>
									</div>
									<a href="<?php echo $choiceItem['overlay_cta_link'];?>" class="overlayCTA block-button"><span class="label button--label"><?php echo $choiceItem['overlay_cta'];?></span></a>
								</div>
							</aside>
					<?php } ?>
				</div>
			</div>
		</div>
	</section>
	<section class="services">
		<div class="constraint-wrapper">
			<h2 class="servicesTitle header--main"><?php echo $services['title'];?></h2>
			<div class="servicesItemsWrapper" data-component="ServicesComponent">
			<ul class="servicesItems">
				<?php foreach ($services['items'] as $item) { ?>
					<li class="servicesItem">
						<div class="servicesItemGraphic sprite <?php echo $item['icon'];?>">
						</div>
						<p class="servicesItemLabel list--label"><?php echo $item['label'];?></p>
					</li>
				<?php } ?>
			</ul>
			</div>
			<div class="servicesContent">
				<div class="servicesGraphic">
					<div class="servicesGraphicContent">
						<img src="<?php echo $settings['base_url']?>/assets/images/services-devices.png" alt="<?php echo $services['alt'];?>">
					</div>
				</div>
				<div class="servicesText">
					<h3 class="servicesTextHeader header--medium"><?php echo $services['header'];?></h3>
					<h4 class="servicesTextTitle header--slim"><?php echo $services['callout_title'];?></h4>
					<h4 class="servicesTextBody body--normal"><?php echo $services['body'];?></h4>
				</div>
			</div>
		</div>
	</section>
	<section class="expertise">
		<div class="constraint-wrapper">
			<h2 class="expertiseTitle header--main"><?php echo $expertise['title'];?></h2>
			<div class="expertiseSpacer"></div>
			<div class="expertiseItems">
				<?php foreach ($expertise['items'] as $item) { ?>
					<div class="expertiseItem">
						<div class="expertiseItemGraphic sprite <?php echo $item['icon'];?>"></div>
						<h3 class="expertiseItemHeader header--medium"><?php echo $item['header'];?></h3>
						<p class="expertiseItemBody body--normal small"><?php echo $item['body'];?></p>
					</div>
				<?php } ?>
			</div>
			<a href="<?php echo $expertise['cta_link'];?>" class="expertiseCTA block-button transparent"><span class="label button--label"><?php echo $expertise['cta'];?></span></a>
			<div class="expertiseBackground"></div>
		</div>
	</section>
	<section class="member">
		<div class="constraint-wrapper">
			<h2 class="memberHeader header--medium"><?php echo $member['header'];?></h2>
			<h3 class="memberTitle header--main"><?php echo $member['title'];?></h3>
			<div class="memberGraphic">
				<img src="<?php echo $settings['base_url']?>/assets/images/<?php echo $member['image'];?>" alt="<?php echo $member['alt'];?>">
			</div>
			<h4 class="memberCallout header--slim"><?php echo $member['callout'];?></h4>
			<p class="memberBody body--normal"><?php echo $member['body'];?></p>
			<a class="memberCTA block-button" href="<?php echo $member['cta_link'];?>"><span class="label button--label"><?php echo $member['cta'];?></span></a>
		</div>
		<div class="memberSticky" data-component="StickyBarComponent"
			data-start-selector=".nvertuo2018 .choice"
			data-end-selector=".nvertuo2018 .member"
		>
			<div class="memberStickyWrapper">
				<div class="memberStickyLeft">
				<div class="memberStickyGraphic"><img src="<?php echo $settings['base_url']?>/assets/images/<?php echo $member['sticky_image'];?>" alt="<?php echo $member['sticky_alt'];?>"></div>
				<p class="memberStickyBody sticky--label"><?php echo $member['sticky_body'] ?></p>
				</div>
				<div class="memberStickyRight">
					<a class="memberCTA block-button small" href="<?php echo $member['cta_link'];?>"><span class="label button--label"><?php echo $member['cta'];?></span></a>
				</div>
			</div>
		</div>
	</section>
</div>
