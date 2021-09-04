function makePalette(){
    const PALETTE = [
        "brown",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black"];

    for (let i = 0; i < PALETTE.length; i++) {
        const color = PALETTE[i];
        let button = $("<button></button>");
        button.css("background-color", color);
        $(".palette").append(button);

        $('.palette button').first().addClass('active');
    }
}

makePalette();

function makeGrid(){
    const grid = $(".grid");

    for (let i = 0; i < 64; i++) {
      let newDiv = $("<div class = 'cell' ></div>");
      grid.append(newDiv);
    }
}

makeGrid();

function onPaletteClick() {
    
    $('.palette button').removeClass('active');

    $('.palette button').click(function(){
    
    let click = $(this)
    click.addClass('active');
    });

}
 
$('.palette button').click(onPaletteClick);

function onGridClick(){
    $('.grid .cell').click(function(){
        let color = $('.palette .active').css('background-color');
        let clickedCell = $(this);
        clickedCell.css('background-color', color);
    });
}
  
$('.grid .cell').click(onGridClick);

function clearOnClick(){
    $('.grid .cell').css('background-color', '');
}

$('.controls .clear').click(clearOnClick);

function onFillAllClick(){
    let color = $('.palette .active').css('background-color');
    $('.grid .cell').css('background-color', color);
}

$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick(){
    let activeColor = $('.palette .active').css("background-color")
    let cells = $('.cell')
  
    for(let i = 0;i < cells.length;i++){
      let cell = cells[i]
    if($(cell).css('background-color') == 'rgba(0, 0, 0, 0)'){
    $(cell).css('background-color', activeColor)
    }
  }
  
  }
  
  $('.fill-empty').click(onFillEmptyClick)    