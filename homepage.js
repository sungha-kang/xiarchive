const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

const leftInfo = document.getElementById("left-info");
const rightInfo = document.getElementById("right-info");

// Show xiarchive when hovering over the left image
leftImage.addEventListener("mouseenter", function() {
    leftInfo.hidden = false;
});

// Show project index when hovering over the right image
rightImage.addEventListener("mouseenter", function() {
    rightInfo.hidden = false;
});