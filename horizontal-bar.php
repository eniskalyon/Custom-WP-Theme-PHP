<div class="">

   
<?php
$args = array(
    'post_type' => 'social_bar',
    'posts_per_page' => -1
);

$posts = new WP_Query($args);

if ($posts->have_posts()) {
    echo '<ul class="bar__horizontal bar__horizontal-initial">';
    while ($posts->have_posts()) {
        $posts->the_post();
        $social_icon_class = get_field('social_icon');
        echo '<li class="bar-item"><a href="' . get_permalink() . '"><i class="' . $social_icon_class . '"></i></a></li>';
    }
    echo '</ul>';
}

wp_reset_postdata();
?>

    </div>