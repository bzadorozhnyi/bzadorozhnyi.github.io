$(function () {
    $("#datepicker").datepicker({
        onSelect: function (dateText, _) {
            $("#message-about-date").text("Звичайно, я зможу зустрітися з Вами " + dateText + ". 👋");
        }
    });
});

$(function () {
    $("#menu").menu();
});

$("#menu li[data-target]").on('click', function () {
    var target = $(this).data("target");
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 300);
});