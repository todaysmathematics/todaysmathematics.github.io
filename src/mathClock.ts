interface SupremeAlpha {
    [key: string]: string;
}

interface SupremeNumerics {
    [key: string]: string;
}

interface SupremeAlphanumerics {
    [key: string]: string;
}

interface Supreme {
    alpha: SupremeAlpha;
    numerics: SupremeNumerics;
    alphanumerics: SupremeAlphanumerics;
}

function includes(text: string, subString: string): boolean {
    return text.indexOf(subString) !== -1;
}

export function dayOfMonth(): string {
    const today = new Date();
    const day = today.getDate();
    return String(day);
}

function sumArray(numbers: string[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return sum;
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
            '1': 'Knowledge',
            '2': 'Wisdom',
            '3': 'Understanding',
            '4': 'Culture Freedom',
            '5': 'Power Refinement',
            '6': 'Equality',
            '7': 'God',
            '8': 'Build Destroy',
            '9': 'Born',
            '0': 'Cipher'
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
            '1': 'Knowledge',
            '2': 'Wisdom',
            '3': 'Understanding',
            '4': 'Culture Freedom',
            '5': 'Power Refinement',
            '6': 'Equality',
            '7': 'God',
            '8': 'Build Destroy',
            '9': 'Born',
            '0': 'Cipher'
        }
    };
}

function recurse(sourceText: string): string {
    if (sourceText.length === 0) {
        return '';
    } else {
        sourceText = sourceText.replace(/\W/g, '');
        const supremeAlphanumerics = supreme().alphanumerics;
        const firstChar = sourceText.split('')[0].toUpperCase();
        const restChars = sourceText.substring(1, sourceText.length);
        return supremeAlphanumerics[firstChar] + ' ' + recurse(restChars);
    }
}

function noget_translate(sourceText: string): string {
    sourceText = sourceText.replace(/\W/g, '');

    let translation = '';
    translation += recurse(sourceText);

    while (sourceText.length > 1) {
        const numbers = sourceText.split('');
        const sum = sumArray(numbers);

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

export function mathClock(): string {

    function toLowerCaseDiv(text: string, substring: string): string {
        function div(text: string): string {
            return `<div style="font-size:25px">${text}</div>`;
        }

        function space(text: string): string {
            return ` ${text} `;
        }

        return text.split(space(substring)).join(div(substring.toLowerCase()));
    }

    function formatTodaysMath(math: string): string {
        const whichBringsForth = 'WHICH BRINGS FORTH';
        const allBeingBornTo = 'ALL BEING BORN TO';

        if (includes(math, ` ${allBeingBornTo} `)) {
            return toLowerCaseDiv(math, allBeingBornTo);
        } else if (includes(math, ` ${(whichBringsForth)} `)) {
            return toLowerCaseDiv(math, whichBringsForth);
        } else {
            return math;
        }
    }

    const upperCaseMath = noget_translate(dayOfMonth()).toUpperCase();
    return formatTodaysMath(upperCaseMath);
}