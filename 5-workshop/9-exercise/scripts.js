let counter = 0;

$("#inc").click(() => {
    counter++;
    $("h2").text(counter);
})

$("#dec").click(() => {
    counter--;
    $("h2").text(counter);
})
