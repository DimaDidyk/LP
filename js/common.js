 $(document).ready(function(){
    // mobile header menu
    $("#sandwich, .menu_item, #main-menu a").click(function() {
        $("#sandwich").toggleClass("active");
        $("#mobile-menu").toggle(600);
    });
});