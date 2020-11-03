// Exercise 1

let names = ["Jan", "Roman", "Lukas", "Peter", "Jakub", "<strong>Adrian</strong>", "Martin"];

names.forEach(name =>
    $("ul").append("<li>" + name + "</li>")
);

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === "Adrian") {
//         $("ul").append("<li><strong>" + names[i] + "</strong></li>");
//     } else {
//         $("ul").append("<li>" + names[i] + "</li>");
//     }
// };


// Exercise 2

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append("<h1>" + additionalBlock.title + "</h1>");
$("body").append("<p>" + additionalBlock.text + "</p>");