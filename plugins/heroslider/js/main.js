jQuery(document).ready(function($) {
	var wrapper = $('.cd-hero-slider');
	var lastIndex;
	if ( wrapper.length > 0 ) {
	    lastIndex = wrapper.children('li').length - 1;
		window.setInterval(function(){autoplaySlider()}, 4000);
	}
	function autoplaySlider() {
	    var current = wrapper.find('.selected');
	    var currentId = current.index();
	    if (currentId < 0) {
	        currentId = 0;
	    }
	    var nextId = currentId + 1;
	    if (nextId > lastIndex) {
	        nextId = 0;
	    }
	    var next = wrapper.children('li').eq(nextId);
	    wrapper.children('li').removeClass('move-left');
	    current.removeClass('selected').addClass('move-left').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
	        current.removeClass('is-moving');
	    });
	    next.addClass('selected');
	}
});