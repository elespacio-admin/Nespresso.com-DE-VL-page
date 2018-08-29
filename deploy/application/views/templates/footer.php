			</div>
		<?php if(!$isDistribution): ?>
			</div>
			<!--====== SCRIPTS JS ======-->
			<script src="https://www.nespresso.com/shared_res/mos/free_html/de/vertuo/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="https://www.nespresso.com/shared_res/mos/free_html/de/vertuo/js/vendor/bootstrap.min.js"></script>
     <!--====== PLUGINS JS ======-->
     <script src="https://www.nespresso.com/shared_res/mos/free_html/de/vertuo/js/vendor/jquery.easing.1.3.js"></script>
     <script src="https://www.nespresso.com/shared_res/mos/free_html/de/vertuo/js/vendor/jquery-migrate-1.2.1.min.js"></script>
		<?php endif;?>
		<!--===== ACTIVE JS=====-->
		<script src="<?php echo $settings['base_url'];?>/assets/scripts/main.js"></script>
		<?php if(!$isDistribution): ?>
			<footer class="nespresso-footer"></footer>
		<?php endif;?>
  </body>
</html>