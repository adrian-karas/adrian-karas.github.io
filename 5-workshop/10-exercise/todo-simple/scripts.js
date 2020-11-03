let count = 2;

$('button').click(() => {
    $('ul').append('<li id="item-' + count + '">' + $('input').val() + '</li>');
    count++;
})

$('.todos-container').on('click', (event) => {
    $(event.target).css('text-decoration','line-through');
  });
