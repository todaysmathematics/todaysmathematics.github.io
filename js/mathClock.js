
function mathClock() {
    const dateUnit = getDayOfMonth();
    const math = translate(dateUnit);

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

    return todaysMath;
}

function getDayOfMonth() {
    const today = new Date();
    const day = today.getDate();
    return String(day);
}

function translate(sourceText) {
    sourceText = sourceText.replace(/\W/g, '');

    var translation = '';
    translation += recurse(sourceText);

    while(sourceText.length > 1) {
        var numbers = sourceText.split('');
        var sum = sumArray(numbers);

        if(numbers[0] > numbers[1] && numbers[1] > 0) {
            translation += 'which brings forth '; // 'not being born to ';
        }
        else {
            translation += 'all being born to ';
        }

        sourceText = sum.toString();
        translation += recurse(sourceText);
    }

    return translation;
}

function recurse(sourceText) {
    if(sourceText.length == 0) {
        return '';
    }
    else {
        sourceText = sourceText.replace(/\W/g, '');
        var supremeAlphanumerics = supreme().alphanumerics;
        var firstChar = sourceText.split('')[0].toUpperCase();
        var restChars = sourceText.substring(1, sourceText.length);
        return supremeAlphanumerics[firstChar] + ' ' + recurse(restChars);
    }
}

function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return sum;
}

function supreme() {
    return {
        alpha: {
            A: 'Allah',
            B: 'Be or Born',
            C: 'Cee (See)',
            D: 'Divine',
            E: 'Equality',
            F: 'Father',
            G: 'God',
            H: 'He or Her',
            I: 'I or Islam',
            J: 'Justice',
            K: 'King or Kingdom',
            L: 'Love, Hell or Right',
            M: 'Master',
            N: 'In or Now Nation',
            O: 'Cypher',
            P: 'Power',
            Q: 'Queen',
            R: 'Rule or Ruler',
            S: 'Self or Savior',
            T: 'Truth or Square',
            U: 'You, Universe, and U-N-I-Verse',
            V: 'Victory',
            W: 'Wisdom',
            X: 'Unknown',
            Y: 'Why',
            Z: 'Zig-Zag-Zig'
        },
        numerics: {
            1: 'Knowledge',
            2: 'Wisdom',
            3: 'Understanding',
            4: 'Culture Freedom',
            5: 'Power Refinement',
            6: 'Equality',
            7: 'God',
            8: 'Build Destroy',
            9: 'Born',
            0: 'Cipher'
        },
        alphanumerics: {
            A: 'Allah',
            B: 'Be Born',
            C: 'Cee (See)',
            D: 'Divine',
            E: 'Equality',
            F: 'Father',
            G: 'God',
            H: 'He or Her',
            I: 'I Islam',
            J: 'Justice',
            K: 'King Kingdom',
            L: 'Love Hell Right',
            M: 'Master',
            N: 'In Now Nation',
            O: 'Cypher',
            P: 'Power',
            Q: 'Queen',
            R: 'Rule Ruler',
            S: 'Self Savior',
            T: 'Truth Square',
            U: 'You Universe U N I Verse',
            V: 'Victory',
            W: 'Wisdom',
            X: 'Unknown',
            Y: 'Why',
            Z: 'Zig Zag Zig',
            1: 'Knowledge',
            2: 'Wisdom',
            3: 'Understanding',
            4: 'Culture Freedom',
            5: 'Power Refinement',
            6: 'Equality',
            7: 'God',
            8: 'Build Destroy',
            9: 'Born',
            0: 'Cipher'
        }
    }
}
