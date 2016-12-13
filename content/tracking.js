(function () {
    $(document).ready(function () {
	var s4 = function() {
	    return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
	}
	var guid = function() {
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	}
	if (document.cookie.indexOf("id") < 0) {
	    var id = guid();
	    var today = new Date();
	    var newDate = new Date();
	    newDate.setDate(today.getDate() + 365);
	    document.cookie = "id = " + id + "; expires = " + newDate + "; domain=falconn-lib.org;path=/";
	    $.ajax("/spy");
	}
	$('a').click(function (event) {
	    var href = $(this).attr("href");
	    $.ajax("/spy_link_click?" + escape(href));
	});
	$('a').mousedown(function (event) {
	    var href = $(this).attr("href");
	    $.ajax("/spy_link_mousedown?" + escape(href));
	});
    });
}());
