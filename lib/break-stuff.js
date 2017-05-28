var loadStepCount = 0;
var maxLoadSteps = 20;
var stepDelay = 500;

function breakStuff() {
    $("img").each(function(){
        var imgLeft = $(this).position().left;
        var imgTop = $(this).position().top;
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();

        var leftBorder = $(this).css('borderLeftWidth');
        leftBorder = leftBorder.substr(0, leftBorder.length - 2);
        var rightBorder = $(this).css('borderRightWidth');
        rightBorder = rightBorder.substr(0, rightBorder.length - 2);
        var topBorder = $(this).css('borderTopWidth');
        topBorder = topBorder.substr(0, topBorder.length - 2);
        var bottomBorder = $(this).css('borderBottomWidth');
        bottomBorder = bottomBorder.substr(0, bottomBorder.length - 2);

        imgWidth += (parseInt(leftBorder) + parseInt(rightBorder));
        imgHeight += (parseInt(topBorder) + parseInt(bottomBorder));

        //var bgColor = $(this).css('backgroundColor');
        //console.log(bgColor);
        
        var boxString = createBox(imgLeft, imgTop, imgWidth, imgHeight);
        $(document.body).append(boxString);
    });

    setTimeout(loadStep, stepDelay);
}

function loadStep() {
    loadStepCount++;

    $(".white-box").each(function() {
        var currentHeight = $(this).height();
        var stepHeight = Math.max(currentHeight / 5, 10);
        $(this).height(currentHeight - stepHeight);
        
        var currentTop = $(this).position().top;
        //$(this).top(currentTop + stepHeight);
        //var stepTop = $(this).position().top;// - stepHeight;
        $(this).offset({top: currentTop + stepHeight});
    });

    if(loadStepCount < maxLoadSteps)
        setTimeout(loadStep, stepDelay);
}

function createBox(x, y, w, h) {
    return '<div class="white-box" style="background-color: #fff; position: absolute; top: ' + y + '; left: ' + x + '; width: ' + w + 'px; height: ' + h + 'px;"></div>';
}