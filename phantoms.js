
<img id="myImage" onclick="changeImage()" src="http://36.media.tumblr.com/a3fb66cc80ea1a93d0b24c84c8bcab96/tumblr_inline_nvkabqeS8K1sotnhf_500.png" width="180" height="180">

<p>Click the cat to make it taller.</p>

<script>
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("blogs")) {
        image.src = "http://36.media.tumblr.com/a3fb66cc80ea1a93d0b24c84c8bcab96/tumblr_inline_nvkabqeS8K1sotnhf_500.png";
    } else {
        image.src = "https://media.thetab.com/blogs.dir/7/files/2015/03/pusheen-final.png";
    }
}
</script>
