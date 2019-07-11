// Any global variables can be defined up here
var answer;

/*
    Code in the setup function will only be run once at the start of the animation
*/
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    answer = round(random(1, 100));
}

/*
    The draw function is executed once per frame.
*/
function draw() {
    // Update
    var guess = prompt("what is your guess?", "type your number here (1- 100)");
    if (answer < guess) {
        alert("The number is smaller");
    } else if (answer > guess) {
        alert("The number is bigger");
    } else {
        alert("You did it!");
        noLoop();
    }
}


function mouseClicked() {
    noLoop();
}
