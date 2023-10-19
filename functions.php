<?php



function portfolio_files() {
  wp_enqueue_script('main-portfolio-js', get_template_directory_uri() . '/build/index.js', '1.0', true);
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  wp_enqueue_style('portfolio_main_styles', get_theme_file_uri('/scss/style.css'));
  wp_enqueue_style('portfolio_extra_styles', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'portfolio_files');

function theme_features() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  
}

