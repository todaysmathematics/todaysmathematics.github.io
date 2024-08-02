
function mathClock(): string {
    const dateUnit: string = getDayOfMonth();
    const math: string = translate(dateUnit);

    const mathUpperCase: string = math.toUpperCase();

    const abbtUpperCase: string = 'ALL BEING BORN TO';
    const abbtLowerCase: string = abbtUpperCase.toLowerCase();

    const wbfUpperCase: string = 'WHICH BRINGS FORTH';
    const wbfLowerCase: string = wbfUpperCase.toLowerCase();

    let todaysMath: string = '';
    if (mathUpperCase.indexOf(` ${abbtUpperCase} `) !== -1) {
        todaysMath = mathUpperCase
            .split(` ${abbtUpperCase} `)
            .join(`<div style="font-size:25px">${abbtLowerCase}</div>`);
    } else if (mathUpperCase.indexOf(` ${wbfUpperCase} `) !== -1) {
        todaysMath = mathUpperCase
            .split(` ${wbfUpperCase} `)
            .join(`<div style="font-size:25px">${wbfLowerCase}</div>`);
    } else {
        todaysMath = mathUpperCase;
    }

    return todaysMath;
}

function getDayOfMonth(): string {
    const today: Date = new Date();
    const day: number = today.getDate();
    return String(day);
}

function translate(sourceText: string): string {
    sourceText = sourceText.replace(/\W/g, '');

    let translation: string = '';
    translation += recurse(sourceText);

    while (sourceText.length > 1) {
        const numbers: string[] = sourceText.split('');
        const sum: number = sumArray(numbers);

        if (parseInt(numbers[0]) > parseInt(numbers[1]) && parseInt(numbers[1]) > 0) {
            translation += 'which brings forth ';
        } else {
            translation += 'all being born to ';
        }

        sourceText = sum.toString();
        translation += recurse(sourceText);
    }

    return translation;
}

function recurse(sourceText: string): string {
    if (sourceText.length === 0) {
        return '';
    } else {
        const cleanedText = sourceText.replace(/\W/g, '');
        const supremeAlphanumerics = supreme().alphanumerics;
        const firstChar = cleanedText.charAt(0).toUpperCase();
        const restChars = cleanedText.substring(1);
        return `${supremeAlphanumerics[firstChar]} ${recurse(restChars)}`;
    }
}

function sumArray(numbers: string[]): number {
    let sum: number = 0;
    for (const num of numbers) {
        sum += parseInt(num);
    }
    return sum;
}

interface Supreme {
    alpha: { [key: string]: string };
    numerics: { [key: string]: string };
    alphanumerics: { [key: string]: string };
}

function supreme(): Supreme {
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

