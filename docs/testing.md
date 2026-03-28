# Testing

## Stack

- **Jest** — test runner
- **ts-jest** — TypeScript support for Jest

## Running Tests

```bash
npm test
```

## Test Location

Tests live in `tests/` at the project root, mirroring the structure of `src/`.

```
tests/
  mathClock.test.ts    # Unit tests for src/mathClock.ts
```

## What's Tested

### `sumArray`
- Sums digit strings correctly
- Handles single element arrays
- Handles multiple digits

### `recurse`
- Translates a single digit to its Supreme Mathematics meaning
- Translates multi-character strings character by character
- Strips non-word characters
- Returns empty string for empty input

### `translate`
- Single-digit days produce no connector phrase
- Multi-digit days produce the correct connector:
  - `which brings forth` when first digit > second digit (and second digit > 0)
  - `all being born to` otherwise
- Correctly reduces to the root digit and appends its translation
- Edge case: second digit of 0 always uses `all being born to`

### `dayOfMonth`
- Returns today's day as a string
- No zero-padding on single-digit days

### `mathClock`
- Output is uppercase
- Correct translation for known days

## Mocking

`Date` is mocked in tests using `jest.spyOn` to pin the day of month, making tests deterministic regardless of when they run.

```ts
const mockDay = (day: number) => {
    jest.spyOn(global, 'Date').mockImplementation(() => ({
        getDate: () => day,
        getMonth: () => 0,
        getFullYear: () => 2026,
    } as unknown as Date));
};
```

`jest.restoreAllMocks()` is called after each test to reset state.

## What's Not Tested

- `index.ts` — DOM rendering logic. This would require a DOM environment (e.g. jsdom) and is a candidate for future integration tests.
- `src/data/alphanumerics.ts` — the data itself is not directly tested. A future test could assert all 10 digits and 26 letters are present and map to non-empty strings.
