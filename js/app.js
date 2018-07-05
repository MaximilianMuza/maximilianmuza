var moveImg = document.getElementById('moveImg');
var introContainer = document.getElementById('introContainer');
// var introVideo = document.getElementById('introVideo');

introContainer.style.height = moveImg.clientHeight + 'px';
// var videoHeight = introVideo.clientHeight;

window.onscroll = function() {
	var scrollTop = window.pageYOffset;
    moveImg.style.top = -(scrollTop / 2) + 'px';
   	introContainer.style.height = (moveImg.clientHeight + parseInt(moveImg.style.top) + 100) + 'px';
    // introContainer.style.height = (moveImg.clientHeight + parseInt(moveImg.style.top) + videoHeight + 100) + 'px';
};