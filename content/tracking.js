function guid() {
    function s4() {
	return Math.floor((1 + Math.random()) * 0x10000)
	    .toString(16)
	    .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	s4() + '-' + s4() + s4() + s4();
}

if (document.cookie.indexOf("id") >= 0) {
}
else {
    var id = guid();
    var today = new Date();
    var newDate = new Date();
    newDate.setDate(today.getDate() + 365);
    document.cookie = "id = " + id + "; expires = " + newDate + "; domain = falconn-lib.org";
    $.ajax("/spy");
}

$(document).ready(function () {
    $('a').click(function (event) {
	var href = $(this).attr("href");
	$.ajax("/spy_link_click?" + escape(href));
    });
    $('a').mousedown(function (event) {
	var href = $(this).attr("href");
	$.ajax("/spy_link_mousedown?" + escape(href));
    });
});
