<div class="sections-wrapper">
    <?php
    $args = array(
        'post_type' => 'side_bar',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
    );
    
    $sidebar_posts = new WP_Query( $args );
    $portfolio_section = get_page_by_path( 'portfolio_post', OBJECT, 'side_bar' );
    $technologies_section = get_page_by_path( 'technologies_post', OBJECT, 'side_bar' );
    if ( $sidebar_posts->have_posts() ) {
        $counter = 0;
        while ( $sidebar_posts->have_posts() ) {
            $sidebar_posts->the_post();
            if (get_post_field('post_name') === $portfolio_section->post_name) {
            include( locate_template( 'template-parts/portfolio-cards.php' ) );
            } else if (get_post_field('post_name') === $technologies_section->post_name) {
                include( locate_template( 'template-parts/technology-cards.php' ) );
            }
            
            else {
                 ?>
                    <section class="section-block section-<?php echo $counter; ?> reveal-section reveal">
                        <h2><?php the_title(); ?></h2>
                        <?php the_content(); ?>
                    </section>
                    <?php
                    $counter++;
            }
             
        }
        
        wp_reset_postdata();
    }
    ?>
</div>
