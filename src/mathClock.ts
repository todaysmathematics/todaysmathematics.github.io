const ALPHANUMERICS: Record<string, string> = {
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
    '0': 'Cipher',
};

export function dayOfMonth(): string {
    const today = new Date();
    return String(today.getDate());
}

export function sumArray(numbers: string[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return sum;
}

export function recurse(sourceText: string): string {
    if (sourceText.length === 0) {
        return '';
    }
    sourceText = sourceText.replace(/\W/g, '');
    const firstChar = sourceText[0].toUpperCase();
    const restChars = sourceText.substring(1);
    return ALPHANUMERICS[firstChar] + ' ' + recurse(restChars);
}

export function translate(sourceText: string): string {
    sourceText = sourceText.replace(/\W/g, '');

    let translation = recurse(sourceText);

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
    const WHICH_BRINGS_FORTH = 'WHICH BRINGS FORTH';
    const ALL_BEING_BORN_TO = 'ALL BEING BORN TO';

    function wrapConnector(text: string, connector: string): string {
        const wrapped = `<div class="connector">${connector.toLowerCase()}</div>`;
        return text.split(` ${connector} `).join(wrapped);
    }

    const upperCaseMath = translate(dayOfMonth()).toUpperCase();

    if (upperCaseMath.includes(` ${ALL_BEING_BORN_TO} `)) {
        return wrapConnector(upperCaseMath, ALL_BEING_BORN_TO);
    } else if (upperCaseMath.includes(` ${WHICH_BRINGS_FORTH} `)) {
        return wrapConnector(upperCaseMath, WHICH_BRINGS_FORTH);
    }
    return upperCaseMath;
}
