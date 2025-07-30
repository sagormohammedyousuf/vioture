$(document).ready(function () {
    $(".sidebar_switch").click(function (event) {
        event.preventDefault(); // Prevent the default action of the link

        const sidebar = $(".listing_sidebar");

        sidebar.fadeToggle(350, function () {
            // This function is called after the fadeToggle completes
            if (sidebar.is(":visible")) {
                sidebar.addClass("show").css('opacity', '1');
            } else {
                sidebar.removeClass("show").css('opacity', '0');
            }
        });

    });
});
