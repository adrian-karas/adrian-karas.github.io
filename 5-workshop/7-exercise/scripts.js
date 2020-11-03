$("#b1").click(() => {
    console.log("Yeah, you clicked me");
})

$("#b2").click(() => {
    $("#b1").text("Clicked 2nd");
})

$("#b3").click(() => {
    $("button").css("background","red");
})