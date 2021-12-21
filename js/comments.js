$(document).mousemove(function(event) {
    x = event.pageX;
    y = event.pageY;
    if (y<200){$('#up_of_comments').show(1000)}
    else{$('#up_of_comments').hide(1000)}
});