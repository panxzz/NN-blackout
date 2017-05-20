var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://rawgit.com/panxzz/NN-blackout/master/lib/jquery-3.2.1.slim.min.js";
document.head.appendChild(s);
console.log("hi from blackout.js");

//check the date/time to see if the blackout is currently going on
$.getScript('https://rawgit.com/panxzz/NN-blackout/master/lib/check-date.js', function(){

    //if it is blackout time then "break" the page
    $.getScript('https://rawgit.com/panxzz/NN-blackout/master/lib/break-stuff.js', function(){

        //after 10 seconds or any click on the page pop the modal
        window.setTimeout(popModal, 10000);
    });

    var popModal = function(){
        $.getScript('https://rawgit.com/panxzz/NN-blackout/master/lib/modal-display.js', function(){
            //modal is displayed
        });
    }
});