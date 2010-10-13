/**
 * jQuery keyFilter plugin
 *
 * @author Tomasz Jakub Rup
 * @see https://code.google.com/p/jquery-plugins-ext/
 */
(function($){
	/**
	 * Filter for entering characters.
	 * @param regexp Regular expression filtering.
	 * @example To enter only numbers use $('input').keyFilter(/^[0-9]$/)
	 */
	$.fn.keyFilter = function(regexp) {
		return this.each(function() {
			$(this).keypress(function(e) {
				return String.fromCharCode(e.which).match(regexp) != null;
			});
		});
	}
})(jQuery)
