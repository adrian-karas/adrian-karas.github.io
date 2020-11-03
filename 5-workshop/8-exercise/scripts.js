let clicked = false;

$("#b1").click(() => {
    console.log("Yeah, you clicked me");
})

$("#b2").click(() => {
    $("#b1").text($("input:text").val());
})

$("#b3").click(() => {
    if (clicked === false) {
        $("button").css("background",$("input:text").val());
        clicked = true;
    }
})
