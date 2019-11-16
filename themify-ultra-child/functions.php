<?php
/**
* Enqueues child theme stylesheet, loading first the parent theme stylesheet.
*/
function themify_custom_enqueue_child_theme_styles() {
    wp_enqueue_style( 'parent-theme-css', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'themify_custom_enqueue_child_theme_styles', 11 );

add_action('wp_enqueue_scripts', 'themify_add_scripts');

function themify_add_scripts(){
	// Scripts
    wp_enqueue_script( 'niceScr', '/wp-content/themes/themify-ultra-child/js/jquery.nicescroll.js');
    wp_enqueue_script( 'magnificPopup', '/wp-content/themes/themify-ultra-child/js/jquery.magnific-popup.min.js');
    wp_enqueue_script( 'myscript', '/wp-content/themes/themify-ultra-child/js/custom-scripts.js');
	
	// Styles
    wp_enqueue_style( 'preloader-W8', '/wp-content/themes/themify-ultra-child/css/preloader.css');
    wp_enqueue_style( 'magnificPopup', '/wp-content/themes/themify-ultra-child/css/magnific-popup.css');
    wp_enqueue_style( 'myWoocommerce', '/wp-content/themes/themify-ultra-child/css/my-woocommerce.css');
    wp_enqueue_style( 'fonts', '/wp-content/themes/themify-ultra-child/fonts/fonts.css');
    wp_enqueue_style( 'mediaQ', '/wp-content/themes/themify-ultra-child/css/media.css');
}

define('THEMIFY_UPGRADER', false); // Notification upgrade theme off
