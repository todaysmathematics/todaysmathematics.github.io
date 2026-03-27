import { mathClock, dayOfMonth, sumArray, recurse, translate } from '../mathClock';

const mockDay = (day: number) => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
        getDate: () => day,
        getMonth: () => 0,
        getFullYear: () => 2026,
    } as unknown as Date));
};

afterEach(() => jest.restoreAllMocks());

describe('sumArray', () => {
    it('sums single-digit strings', () => {
        expect(sumArray(['1', '4'])).toBe(5);
    });

    it('handles a single element', () => {
        expect(sumArray(['7'])).toBe(7);
    });

    it('sums three digits', () => {
        expect(sumArray(['2', '9', '1'])).toBe(12);
    });
});

describe('recurse', () => {
    it('translates a single digit', () => {
        expect(recurse('1')).toBe('Knowledge ');
    });

    it('translates two digits', () => {
        expect(recurse('14')).toBe('Knowledge Culture Freedom ');
    });

    it('strips non-word characters', () => {
        expect(recurse('1!')).toBe('Knowledge ');
    });

    it('returns empty string for empty input', () => {
        expect(recurse('')).toBe('');
    });
});

describe('translate', () => {
    it('day 1 → Knowledge only (single digit, no connector)', () => {
        const result = translate('1');
        expect(result).toContain('Knowledge');
        expect(result).not.toContain('born');
        expect(result).not.toContain('brings');
    });

    it('day 14 → Knowledge + Culture Freedom + "all being born to" + Power Refinement', () => {
        // 1 < 4 → "all being born to"; 1+4=5 → Power Refinement
        const result = translate('14');
        expect(result).toContain('Knowledge');
        expect(result).toContain('Culture Freedom');
        expect(result).toContain('all being born to');
        expect(result).toContain('Power Refinement');
    });

    it('day 21 → Wisdom + Knowledge + "which brings forth" + Understanding', () => {
        // 2 > 1 and 1 > 0 → "which brings forth"; 2+1=3 → Understanding
        const result = translate('21');
        expect(result).toContain('Wisdom');
        expect(result).toContain('Knowledge');
        expect(result).toContain('which brings forth');
        expect(result).toContain('Understanding');
    });

    it('day 30 → "all being born to" because second digit is 0', () => {
        // 3 > 0 but condition also requires numbers[1] > 0, which fails → "all being born to"
        const result = translate('30');
        expect(result).toContain('Understanding');
        expect(result).toContain('Cipher');
        expect(result).toContain('all being born to');
    });
});

describe('dayOfMonth', () => {
    it('returns the current day as a string', () => {
        mockDay(15);
        expect(dayOfMonth()).toBe('15');
    });

    it('returns single-digit days without zero-padding', () => {
        mockDay(5);
        expect(dayOfMonth()).toBe('5');
    });
});

describe('mathClock', () => {
    it('day 1 → contains KNOWLEDGE in uppercase', () => {
        mockDay(1);
        expect(mathClock()).toContain('KNOWLEDGE');
    });

    it('day 7 → contains GOD in uppercase', () => {
        mockDay(7);
        expect(mathClock()).toContain('GOD');
    });

    it('day 14 → contains KNOWLEDGE and CULTURE FREEDOM in uppercase', () => {
        mockDay(14);
        const result = mathClock();
        expect(result).toContain('KNOWLEDGE');
        expect(result).toContain('CULTURE FREEDOM');
    });

    it('day 21 → contains WISDOM and UNDERSTANDING in uppercase', () => {
        mockDay(21);
        const result = mathClock();
        expect(result).toContain('WISDOM');
        expect(result).toContain('UNDERSTANDING');
    });
});
