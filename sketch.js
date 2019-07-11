// Any global variables can be defined up here


/*
    The draw function is executed once per frame.
*/
function draw() {
    // Update
    var name = prompt("what is your name?", "type your name here");
    if (name == "Bill Nye") {
        alert("Science rules");
    }
    alert("Nice to meet you " + name);
    noLoop();
}
