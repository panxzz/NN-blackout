var loadStepCount = 0;
var maxLoadSteps = 10;
var stepDelay = 500;

function breakStuff() {
    console.log("trying to break shit");

    $("img").each(function(){
        //console.log($(this));
        var imgLeft = $(this).position().left;
        var imgTop = $(this).position().top;
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();
        //console.log('x' + imgLeft);
        //console.log('y' + imgTop);
        //console.log('w' + imgWidth);
        //console.log('h' + imgHeight);
        var boxString = createBox(imgLeft, imgTop, imgWidth, imgHeight);
        //console.log(boxString);
        $(document.body).append(boxString);
    });

    setTimeout(loadStep, stepDelay);
}

function loadStep() {
    loadStepCount++;

    $(".white-box").each(function() {
        var currentHeight = $(this).height();
        var stepHeight = currentHeight / 10;
        $(this).height(currentHeight - stepHeight);
        //var stepTop = $(this).position().top - stepHeight;
        //$(this).offset({top: stepTop});
    });

    if(loadStepCount < maxLoadSteps)
        setTimeout(loadStep, stepDelay);
    else
        console.log("stepcount reached max");
}

function createBox(x, y, w, h) {
    return '<div class="white-box" style="background-color: #f08; position: absolute; top: ' + y + '; left: ' + x + '; width: ' + w + 'px; height: ' + h + 'px;"></div>';
}