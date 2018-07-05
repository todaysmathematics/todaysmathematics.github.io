define(['jquery', 'moment', 'noget'], function ($, moment, noget) {

    $('#todaysmath').hide().fadeIn(300);
    $('#date').hide().fadeIn(300);
    
//    $('#hour').hide().fadeIn(1000);
//    $('#minute').hide().fadeIn(2000);
//    $('#second').hide().fadeIn(3000);
//    $('#millisecond').hide().fadeIn(1000);

//     var timeClock = function () {
//         $('#time').text(moment().format('H:mm:ss.SSS'));
//         var time = moment($('#time').text(), "H:mm:ss.SSS");
        
//         var unit = time.format("SSS");
//         $('#millisecond').html(noget.translate(unit)).attr('title', unit);
//     }

    var mathClock = function () {

        $('#date').text(moment().format('M.D.YYYY'));
//        var time = moment($('#time').text(), "H:mm:ss.SSS");
        var unit = 0;

        unit = moment().format('D')
        $('#todaysmath').html(noget.translate(unit)).attr('title', unit);

//         unit = time.format("H");
//         $('#hour').html(noget.translate(unit)).attr('title', unit);

//         unit = time.format("m");
//         $('#minute').html(noget.translate(unit)).attr('title', unit);

//         unit = time.format("s");
//         $('#second').html(noget.translate(unit)).attr('title', unit);

    }

//    timeClock();    
    mathClock();    
//    setInterval(timeClock, 100);
    setInterval(mathClock, 1000);
    
});

