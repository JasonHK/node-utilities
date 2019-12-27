// Type definitions for jest-in-case 1.0
// Project: https://github.com/thinkmill/jest-in-case#readme
// Definitions by: Geovani de Souza <https://github.com/geovanisouza92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />
/// <reference types="node" />

declare const global: NodeJS.Global;

declare function cases<TestCase extends cases.TestConfig>(title: string, tester: cases.Tester<TestCase>, testCases: cases.TestCases<TestCase>): void;

declare namespace cases
{
    interface TestConfig {
        name?: string;
        only?: boolean;
        skip?: boolean;
        [key: string]: any;
    }

    type Tester<TestCase extends TestConfig> = (opts: TestCase, done: jest.DoneCallback) => any;

    type TestCases<TestCase extends TestConfig> = TestCase[] | Record<string, TestCase>;
}

export = cases;
