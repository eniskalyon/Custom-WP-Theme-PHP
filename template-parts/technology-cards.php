<?php
                $args = array(
                    'post_type' => 'technologies',
                    'posts_per_page' => -1, // Display all posts
                    'orderby' => 'date',
                    'order' => 'ASC',
                );
            
                $technologies_query = new WP_Query($args);
            
                if ($technologies_query->have_posts()) { ?>
                    <section class="section-block section-portfolio section-<?php echo $counter; ?> reveal-section reveal">
                        <?php
                        while ($technologies_query->have_posts()) {
                            $technologies_query->the_post();
                            $image = get_field('portfolio_thumbnail'); // Get ACF custom field value
            
                            ?>
                            <div class="section-block">
                                <?php if ($image) : ?>
                                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
                                <?php endif; ?>
                                <h3><?php the_title(); ?></h3>
                            </div>
            
                        <?php
                        }
                        ?>
                    </section>
                <?php
                    wp_reset_postdata(); // Reset post data to the main query
                }














