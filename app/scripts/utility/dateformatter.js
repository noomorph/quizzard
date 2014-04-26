/* exported DateFormatter */

function DateFormatter() {
	this.format = function (date) {
	    var d = date.getDate(),
	        m = date.getMonth() + 1,
	        y = date.getYear();
	    y = y < 200 ? y + 1900 : y;
	    m = m < 10 ? "0" + m : m;
	    d = d < 10 ? "0" + d : d;
	    return d + "." + m + "." + y;
	};
}
