window.addEventListener('DOMContentLoaded', function() {
  var urlParams = new URLSearchParams(window.location.search);
  var imageUrl = urlParams.get('image');
  
  if (imageUrl) {
    var imageElement = document.getElementById('myImage');
    imageElement.src = imageUrl;
  }
});
