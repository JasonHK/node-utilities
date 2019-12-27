"use strict";

import { getVariableName } from "src/get-variable-name";

import JestInCase from "jest-in-case";

const cases = JestInCase;

namespace ValidTestCases
{
    export const TestCases: JestInCase.TestCases<TestCase> = [];

    (
        function(): void
        {
            var globalVariable = 1337;
            TestCases.push({ wrapper: { globalVariable }, expected: "globalVariable" });
        }
    )();

    (
        function(): void
        {
            let localVariable = "1337";
            TestCases.push({ wrapper: { localVariable }, expected: "localVariable" });
        }
    )();

    (
        function(): void
        {
            const localConstant = Symbol("1337");
            TestCases.push({ wrapper: { localConstant }, expected: "localConstant" });
        }
    )();

    export interface TestCase extends JestInCase.TestConfig
    {
        wrapper: object;
        expected: string;
    }
}

namespace ErrorTestCases
{
    export const TestCases: JestInCase.TestCases<TestCase> = [];

    (
        function()
        {
            const unwrappedVariable = 1337;
            TestCases.push({ wrapper: unwrappedVariable, error: new TypeError("wrapper is not an object") });
        }
    )();
    
    (
        function()
        {
            TestCases.push({ wrapper: {}, error: new TypeError("wrapper has no properties") });
        }
    )();
    
    (
        function()
        {
            const randomVariable = "1337";
            const anotherVariable = Symbol(1337);
            TestCases.push({ wrapper: { randomVariable, anotherVariable }, error: new TypeError("wrapper should have one property only") });
        }
    )();

    export interface TestCase extends JestInCase.TestConfig
    {
        wrapper: unknown;
        error: jest.Constructable | Error | RegExp | string | undefined;
    }
}

describe(
    "getVariableName(wrapper: object): string",
    (): void =>
    {
        cases<ValidTestCases.TestCase>(
            "Valid Cases",
            ({ expected, wrapper }): void =>
            {
                expect(getVariableName(wrapper)).toBe(expected);
            },
            ValidTestCases.TestCases);

        cases<ErrorTestCases.TestCase>(
            "Error Cases",
            ({ error, wrapper }): void =>
            {
                expect(
                    (): void =>
                    {
                        getVariableName(wrapper as any);
                    })
                    .toThrowError(error);
            },
            ErrorTestCases.TestCases);
    });
