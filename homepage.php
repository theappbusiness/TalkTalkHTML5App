<!doctype html> 
<!--[if IEMobile]> <html class="no-js ie-mobile" lang="en"> <![endif]--> 
<!--[if (lt IE 7)&!(IEMobile) ]> <html class="no-js ie6" lang="en"> <![endif]--> 
<!--[if (IE 7)&!(IEMobile) ]> <html class="no-js ie7" lang="en"> <![endif]--> 
<!--[if (IE 8)&!(IEMobile) ]> <html class="no-js ie8" lang="en"> <![endif]--> 
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]--> 
<head> 
	<title>Talk Talk - The X Factor</title>
	
	<?php include("includes/head.php"); ?>

    <link rel="stylesheet" href="css/site.css" /> 
	<?php

	if (array_key_exists("debug", $_GET) && $_GET["debug"] == "true") {

	?>	
		<!-- for development only, should not be used on production -->
	    <link rel="stylesheet" href="dev/css/debug.css" />
		<!-- end development css -->
	<?php	

	} 

	?>
    <!-- Less CSS: for development only, should not be used on production (uncomment to use Less.js) --> 
    <!--  
    <link rel="stylesheet/less" type="text/css" href="dev/less/templates/layouts/layouts.less" />
    <link rel="stylesheet/less" type="text/css" href="dev/less/templates/components/components.less" />
    <link rel="stylesheet/less" type="text/css" href="dev/less/templates/pages/pages.less" />
     
    <script src="dev/less/less.js"></script>
    <script> less.env = "development"; less.watch(); </script>
    --> 
    
    <?php
		/* Less PHP docs : http://leafo.net/lessphp/ */
		require 'dev/less/lessc.inc.php';
		$less1 = new lessc('dev/less/templates/layouts/layouts.less');
		file_put_contents('css/templates/layouts/layouts.css', $less1->parse());
		
		$less2 = new lessc('dev/less/templates/components/components.less');
		file_put_contents('css/templates/components/components.css', $less2->parse());
		
		$less3 = new lessc('dev/less/templates/pages/pages.less');
		file_put_contents('css/templates/pages/pages.css', $less3->parse());
	?>
	
	<!-- Compiled Less CSS -->
	<link rel="stylesheet" type="text/css" href="css/templates/layouts/layouts.css" /> 
	<link rel="stylesheet" type="text/css" href="css/templates/components/components.css" />
    <link rel="stylesheet" type="text/css" href="css/templates/pages/pages.css" />
    <script>
    	//document.write('<script src=' + 'js/lib/zepto.min' + '.js><\/script>');	
    	//document.write('<script src=' + 'js/lib/jquery-1.7.2.min' + '.js><\/script>');	
		document.write('<script src=' +
		('__proto__' in {} ? 'js/lib/zepto.min' : 'js/lib/jquery-1.7.2.min') +
		'.js><\/script>');
	</script>
</head> 
 
<body class="debug-gridx"> 
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
		
	<div id="wrapper">
		
		<div id="container" class="en-gb talktalk home pg-listvideo"> 
 
			<div id="main" class="layout-4-column">

				<div id="content" role="main">
					<!-- main content -->

					<div id="hero">
						<div id="main-promo" data-component-name="main-promo">
							<a role="button" class="prev" href="#"></a>
							<div id="carousel"></div>
							<a role="button" class="next" href="#"></a>
						</div><!-- id="main-promo" -->

						<div id="main-feature">
							<h2>Star in your own music video</h2>
							<p>
								TalkTalk are sponsoring The X Factor, 
								and to make Britain better off, 
								we&#39;re giving the nation the chance to star in our TV ads.
							<p/>
							<a href="#" class="btn-create-video"></a>
						</div><!-- id="main-feature" -->
					</div><!-- id="hero" -->
				   
				   <!-- for selected states apply contextual class = link class -->
				   	<div id="categories" class="home" data-component-name="tabs">
				   		<a href="#" data-category="home" class="home"></a>
				   		<a href="#" data-category="televised" class="televised"></a>
				   		<a href="#" data-category="songs" class="songs"></a>
				   		<a href="#" data-category="popular" class="popular"></a>
				   		<a href="#" data-category="friends" class="friends"></a>
				   		<div class="search" data-component-name="search">
				   			<form action="" method="post">
				   				<input type="text" value="search" class="searchfield" />
				   				<input type="submit" value="go" />
				   			</form>
				   		</div>
					</div><!-- id="categories" -->

					<div id="videos" class="home" data-component-name="videolist">

							<a href="#" style="background: transparent url('img/video-1.png') 0 0 no-repeat;">
								
								<div class="details">
									<h3 class="user-name">User Name</h3>
									<p class="song">Song</p>
									<div class="views">10,000</div>
								</div>
							</a>
							<!-- Note: background images are more peformant then images -->
							<!-- Note: use -webkit-background-size to resize automatically for hi-res --> 
							<!-- Note: for performance in Android and lower iOS reduce the number of DOM nodes -->
							<a href="#" style="background: transparent url('img/video-2.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-3.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-4.png') 0 0 no-repeat;"></a>

							<a href="#" style="background: transparent url('img/video-1.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-2.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-3.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-4.png') 0 0 no-repeat;"></a>

							<a href="#" style="background: transparent url('img/video-1.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-2.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-3.png') 0 0 no-repeat;"></a>
							<a href="#" style="background: transparent url('img/video-4.png') 0 0 no-repeat;"></a>

					</div><!-- id="videos" -->

				</div><!-- id="content" -->
				
			</div><!-- id="main" --> 
 
		</div><!-- id="container" -->

		<div id="header" class="nav-bar" role="banner"> 
			
			<div class="header-wrap">
				<div id="logo" data-component-name="logo"></div>

				<ul id="talktalk-links" data-component-name="header-links">
					<li class="talktalk-tv">
						<a href="">Talk Talk TV</a>
					</li>
					<li class="xfactor">
						<a href="">X Factor</a>
					</li>
					<li class="btn-facebook">
						<div class="fb-like" data-href="http://www.talktalk.com" data-send="false" data-layout="button_count" data-width="80" data-show-faces="false"></div>
					</li>
					<li class="btn-twitter">
						<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.talktalk.com">Tweet</a>
						<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
					</li>
				</ul>
			</div><!-- .header-wrap -->

		</div><!-- id="header" --> 
		
	</div><!-- id="wrapper" --> 

<?php include("includes/scripts.php"); ?>

</body> 
</html>