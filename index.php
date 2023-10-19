<?php
get_header();


?>
 
   
  

    <div class="container-wrapper">
    <div class="container-sidebar">
    <?php include(get_template_directory() . '/vertical-bar.php'); 
    include(get_template_directory() . '/horizontal-bar.php'); ?>
     <iframe src='https://my.spline.design/interactivespherescopy-919e82778791be748a2d9740271fb926/' frameborder='0' width='100%' height='60%'></iframe>
    
        <div class="name">
    <img class="img_name name-img" src="<?php echo get_template_directory_uri(); ?>/name.png" alt="Image Description">
        </div>

    </div>
       
    
    
    
    

    <div class="container-sections">
    <?php include(get_template_directory() . '/sections-wrapper.php'); ?>
    </div>

    <div class="container-contact">
        <div class="container-contact-content">
        
<!--         
        <p class="section-block">Wordpress Theme & Plugin Development</p>
        <p class="section-block">ReactJs Implementation on WP</p>
        <p class="section-block">Gutenberg Blocks</p>
        <p class="section-block">REST API</p>
        <p class="section-block">ACF</p> -->
        <h3 class="section-block">eniskalyon@gmail.com</h3>
        <a class="button-cv" href=""><i class="fa-solid fa-file fa-beat"></i> Download CV</a>
        <a class="button-cv button-cv-mobile" href=""><i class="fa-solid fa-file fa-beat"></i> Download CV</a>
        </div>
       
    </div>
   
   </div>
    

    
    

<?php 

get_footer();
?>