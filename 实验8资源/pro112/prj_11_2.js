function setState(stateClass, image, message) {
    var stage = document.getElementById("stage");
    var picture = document.getElementById("picture");
    var messageBox = document.getElementById("message");

    stage.className = "stage " + stateClass;
    picture.src = image;
    messageBox.value = message;
}

function preloadImages() {
    var images = ["image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg"];

    for (var i = 0; i < images.length; i++) {
        var image = new Image();
        image.src = images[i];
    }
}

window.onload = function () {
    var stage = document.getElementById("stage");

    preloadImages();

    stage.onmouseover = function () {
        setState("state-hover", "image22.jpg", "");
    };

    stage.onmouseout = function (event) {
        var next = event.relatedTarget;

        if (!next || !stage.contains(next)) {
            setState("state-default", "image21.jpg", "");
        }
    };

    stage.onclick = function () {
        setState("state-click", "image23.jpg", "单击鼠标");
    };

stage.ondblclick = function () {
        setState("state-dblclick", "image24.jpg", "双击鼠标");
    };
};
