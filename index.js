var sounds;
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clickButton = this.innerHTML;
        makeSounds(clickButton);
        buttonAnimation(clickButton);
    });
} 

document.addEventListener("keypress", function(event){
    makeSounds(event.key);
    buttonAnimation(event.key);
});

function makeSounds(key){
    switch (key) {
        case 'w':
            sounds = new Audio("sounds/crash.mp3");
            sounds.play();
            break;
        case 'a':
            sounds = new Audio("sounds/kick-bass.mp3");
            sounds.play();
            break;
        case 's':
            sounds = new Audio("sounds/snare.mp3");
            sounds.play();
            break;
        case 'd':
            sounds = new Audio("sounds/tom-1.mp3");
            sounds.play();
            break;
        case 'j':
            sounds = new Audio("sounds/tom-2.mp3");
            sounds.play();
            break;
        case 'k':
            sounds = new Audio("sounds/tom-3.mp3");
            sounds.play();
            break;
        case 'l':
            sounds = new Audio("sounds/tom-4.mp3");
            sounds.play();
            break;
    }
}

function buttonAnimation(pressedKey){
    var clickedKey = document.querySelector("." + pressedKey);
    clickedKey.classList.add("pressed");

    setTimeout(function(){
        clickedKey.classList.remove("pressed");
    }, 100);
}