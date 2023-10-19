<div class="bar__social-vertical">

   
<?php
$args = array(
    'post_type' => 'side_bar',
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'ASC'
);

$posts = new WP_Query($args);

if ($posts->have_posts()) {
    echo '<div> <ul class="social-icons">';
    while ($posts->have_posts()) {
        $posts->the_post();
        $social_icon_class = get_field('social_icon');
        $social_icon_id = get_field('social-icon');
        echo '<li class="bar-item-vertical"><a  href="#' . $social_icon_id . '"><i class="social-icon ' . $social_icon_class . '"></i></a></li>';
    }
    echo '</ul> </div>';
}

wp_reset_postdata();
?>

    </div>