define(['jquery', 'moment', 'noget'], function ($, moment, noget) {
  
    var mathClock = function () {
        var dateUnit = moment().format('D');
        var math = noget.translate(dateUnit);
        
        var mathUpperCase = math.toUpperCase();

        var abbtUpperCase = 'ALL BEING BORN TO';
        var abbtLowerCase = abbtUpperCase.toLowerCase();
        
        var wbfUpperCase = 'WHICH BRINGS FORTH';
        var wbfLowerCase = wbfUpperCase.toLowerCase();

        var todaysMath = '';
        if (mathUpperCase.indexOf(` ${abbtUpperCase} `) !== -1) {
            todaysMath = mathUpperCase
            .split(` ${abbtUpperCase} `)
            .join(`<div style="font-size:25px">${abbtLowerCase}</div>`);
        }
        else if (mathUpperCase.indexOf(` ${wbfUpperCase} `) !== -1) {
            todaysMath = mathUpperCase
            .split(` ${wbfUpperCase} `)
            .join(`<div style="font-size:25px">${wbfLowerCase}</div>`);
        } 
        else {
            todaysMath = mathUpperCase;
        }

        $('#todaysmath').html(todaysMath).attr('title', dateUnit);
    }

    mathClock();
    setInterval(mathClock, 1000);
    
    var todaysDate = moment().format('M.D.YYYY');  
    $('#date').hide().fadeIn(300).text(todaysDate);

    $('#todaysmathRow').hide().fadeIn(300);
    $('#todaysmath').hide().fadeIn(300);

});

/*

// upgrade project to typescript and use this:

import $ from 'jquery';
import moment from 'moment';
import noget from 'noget';

const mathClock = (): void => {
    const dateUnit: string = moment().format('D');
    const math: string = noget.translate(dateUnit);
    const todaysMath: string = math.toUpperCase()
        .split(' ALL BEING BORN TO ')
        .join('<div style="font-size:25px">all being born to</div>');
    $('#todaysmath').html(todaysMath).attr('title', dateUnit);
};

mathClock();
setInterval(mathClock, 1000);

const todaysDate: string = moment().format('M.D.YYYY');
$('#date').hide().fadeIn(300).text(todaysDate);

$('#todaysmathRow, #todaysmath').hide().fadeIn(300);

*/
