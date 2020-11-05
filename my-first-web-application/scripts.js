
// initial variables
let currentPhoto = 0;

let imagesData = [{
    photo: './images/mountain-landscape-2031539_1920.jpg',
    title: 'Mountains',
    description: 'A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally considered to be steeper than a hill. Mountains are formed through tectonic forces or volcanism. (wikipedia.org)'
}, {
    photo: './images/mountains-100367_1920.jpg',
    title: 'Birds',
    description: 'Birds are a group of warm-blooded vertebrates constituting the class Aves, characterized by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. (wikipedia.org)'
}, {
    photo: './images/road-220058_1280.jpg',
    title: 'Road',
    description: 'A road is a thoroughfare, route, or way on land between two places that has been paved or otherwise improved to allow travel by foot or by some form of conveyance. (wikipedia.org)'
}, {
    photo: './images/road-1072823_1280.jpg',
    title: 'Forest',
    description: 'A forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function. (wikipedia.org)'
}, {
    photo: './images/sun-5685447_1920.jpg',
    title: 'Sunrise',
    description: 'Sunrise is the moment when the upper limb of the Sun appears on the horizon in the morning. The term can also refer to the entire process of the solar disk crossing the horizon and its accompanying atmospheric effects. (wikipedia.org)'
}];

// create loadPhoto function
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('h1').text(imagesData[currentPhoto].title);
    $('p').text(imagesData[currentPhoto].description);
    $('.thumbnail').css('box-shadow', '0px 4px 4px 1px #999999');
    $('.thumbnail[data-index="' + photoNumber + '"]').css('box-shadow', '0px 6px 6px 1px #454545');
};

// keyboard navigation
$(document).keydown(function (e){
    console.log(e.keyCode);
    if ((e.keyCode == 37) || (e.keyCode == 40)) // left || bottom arrow key
    {
        $('#left-cover').click();
    }
    else if ((e.keyCode == 39) || (e.keyCode == 38)) // right || top arrow key
    { 
        $('#right-cover').click();
    }
});

// mouse click navigation via arrows on the left/right side of the main photo
$('#right-cover').click(() => {
    currentPhoto++;
    if (currentPhoto >= imagesData.length) {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$('#left-cover').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
})

// create thumbnails and imgs with specific "data-index" attribute
imagesData.forEach((item, index) => {
    $('.thumbnails-container').append(` <div class="thumbnail" data-index="${index}">
                                            <img id="thphoto" data-index="${index}" src="${imagesData[index].photo}">
                                            <div class="title" data-index="${index}">${imagesData[index].title}</div>
                                        </div>`);
    $('.thumbnail').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        currentPhoto = numberIndex;
        loadPhoto(currentPhoto);
    });
});

// load the main photo and box-shadow the corresponding thumbnail
loadPhoto(currentPhoto);