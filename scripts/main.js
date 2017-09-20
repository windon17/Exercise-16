$(document).ready(function () {
    //Part 2
    function show() {
        $(".display-basic").show();
        console.log("display");
    }
    $("#btnShow").on("click", show);

    function hide() {
        $(".display-basic").hide();
    }
    $("#btnHide").on("click", hide);

    function toggle() {
        $(".display-basic").toggle();
    }
    $("#btnToggle").on("click", toggle);

    //Part 3
    $(document).ready(function () {
        $(".part3").show();
        console.log("part3");
    });

    //Part 4
    function fadeInFast() {
        $(".display-fade").fadeIn("fast");
    }
    $("#btnFadeIn").on("click", fadeInFast);

    function fadeOutSlow() {
        $(".display-fade").fadeOut("slow");
    }
    $("#btnFadeOut").on("click", fadeOutSlow);

    function toggleFade() {
        $(".display-fade").fadeToggle();
    }
    $("#btnFadeToggle").on("click", toggleFade);

    //Part 5
    function slideDown1000() {
        $(".display-slide").slideDown(1000);
    }
    $("#btnSlideDown").on("click", slideDown1000);

    function slideUp500() {
        $(".display-slide").slideUp(500);
    }
    $("#btnSlideUp").on("click", slideUp500);

    function slideTogg() {
        $(".display-slide").slideToggle();
    }
    $("#btnSlideToggle").on("click", slideTogg);
});