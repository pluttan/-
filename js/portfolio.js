function getRandomInt(max) {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getimage() {
    a = getRandomInt(4)
    if (a == 1) { return { "background-image": "url(../img/img_portfolio/nature_" + String(getRandomInt(100)) + ".jpg)" } }
    else {
        if (a == 2) { return { "background-image": "url(../img/img_portfolio/city_" + String(getRandomInt(100)) + ".jpg)" } }
        else {
            if (a == 3) { return { "background-image": "url(../img/img_portfolio/people_" + String(getRandomInt(100)) + ".jpg)" } }
            else { if (a == 4) { return { "background-image": "url(../img/img_portfolio/nature_" + String(getRandomInt(100)) + ".jpg)" } } }
        }
    }
}

$(document).ready(function () {
    lists = 3;
    photo = 6;
    for (list = 1; list < lists + 1; list++) {
        for (p = 1; p < photo + 2; p++) {
            $("#portfolio_image_" + list + "_" + p).css(getimage());
        }
    }
    i = 0;
    portfolio_animation = function () {
        $("#portfolio_images").css({ "margin-left": -40 - i });
        i++;
        if (i % 1500 == 0) {
            lists++;
            portappend = '<div class="portfolio_images_list" id="portfolio_images_list_' + lists + '">'
            for (p = 1; p < photo + 1; p++) {
                portappend += '<div class="portfolio_image_' + p + '" id="portfolio_image_' + lists + '_' + p + '"></div>'
            }
            $("#portfolio_images").append(portappend + '</div>');
            function get_bg() {
                for (p = 1; p < photo + 1; p++) {
                    $("#portfolio_image_" + lists + "_" + p).css(getimage());
                };
            };
            setTimeout(() => get_bg(), 100)
        };
    };

});
