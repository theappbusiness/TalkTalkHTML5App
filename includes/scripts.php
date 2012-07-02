<script src="js/lib/iscroll.js"></script> 
<script src="js/lib/swipeview.js"></script>
<script src="js/chassis.js"></script>  
<script src="js/site.js"></script>
<script src="js/talktalk.js"></script>
<script src="js/categories.js"></script>
<script>
	var _gaq=[['_setAccount','UA-783784-2'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
<?php

if (array_key_exists("debug", $_GET) && $_GET["debug"] == "true") {
?>	
	<!-- development QA only (remove), not for production use -->

	<script src="dev/js/chassis.debug.js"></script>
	<!--
	<script src="dev/js/chassis.annotations.js"></script>
	-->
	
	<!-- end development scripts -->
<?php	

} 

?>






