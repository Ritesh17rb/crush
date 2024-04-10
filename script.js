function changeQuality() {
    var quality = document.getElementById("quality").value;
    var container = document.getElementById("imageContainer");

    // Remove the existing image or video element if any
    var existingElement = container.querySelector('img, video');
    if (existingElement) {
        container.removeChild(existingElement);
    }

    // Depending on the selected quality, create and append the appropriate element
    switch (quality) {
        case "144":
        case "240":
        case "360":
        case "480":
        case "720":
            var image = document.createElement('img');
            image.src = "images/moon_" + quality + "p.jpg";
            container.appendChild(image);
            break;
        case "1080":
            var video = document.createElement('video');
            video.src = "images/1080p.mp4";
            video.autoplay = true; // Automatically play the video
            video.controls = true; // Show video controls
            container.appendChild(video);
            break;
        default:
            var defaultImage = document.createElement('img');
            defaultImage.src = "images/moon_144p.jpg";
            container.appendChild(defaultImage);
    }
}
