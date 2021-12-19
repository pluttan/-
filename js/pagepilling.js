var deleteLog = false;
var verticalCentered = false;
timeout_of_loading= 40;

$(document).ready(function () {
    $("#pagepiling").pagepiling({
        menu: "#menu",
        anchors: ["main", "portfolio", "about", "order", "comments"],
        afterLoad: function(anchorLink, index){
			//using index
			if(index == 2){
				interval_portfolio_images = setInterval(portfolio_animation, 100);
			}
            else{
                clearInterval(interval_portfolio_images);
            }
        }
    });
});
