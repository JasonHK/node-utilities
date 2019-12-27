"use strict";

import { getVariableNames } from "src/get-variable-names";

import JestInCase from "jest-in-case";

const cases = JestInCase;

namespace ValidTestCases
{
    export const TestCases: JestInCase.TestCases<TestCase> = [];

    (
        function(): void
        {
            var globalVariable = 1337;
            TestCases.push(
                {
                    wrappers: [
                        { globalVariable },
                    ],
                    expected: [
                        "globalVariable",
                    ],
                });
        }
    )();

    (
        function(): void
        {
            let localVariable = "1337";
            TestCases.push(
                {
                    wrappers: [
                        { localVariable },
                    ],
                    expected: [
                        "localVariable",
                    ],
                });
        }
    )();

    (
        function(): void
        {
            const localConstant = Symbol("1337");
            TestCases.push(
                {
                    wrappers: [
                        { localConstant },
                    ],
                    expected: [
                        "localConstant",
                    ],
                });
        }
    )();

    (
        function(): void
        {
            const objectConstant = { innerProperty: Symbol("1337") };
            const { innerProperty } = objectConstant;

            TestCases.push(
                {
                    wrappers: [
                        { objectConstant },
                        { innerProperty },
                    ],
                    expected: [
                        "objectConstant",
                        "innerProperty",
                    ],
                });
        }
    )();

    export interface TestCase extends JestInCase.TestConfig
    {
        wrappers: object[];
        expected: string[];
    }
}

namespace ErrorTestCases
{
    export const TestCases: JestInCase.TestCases<TestCase> = [];

    (
        function()
        {
            TestCases.push({ wrapper: {}, error: new TypeError("wrappers is not an Array") });
        }
    )();
    
    (
        function()
        {
            TestCases.push({ wrapper: [], error: new TypeError("wrappers has no items") });
        }
    )();

    (
        function()
        {
            const unwrappedVariable = 1337;
            TestCases.push(
                {
                    wrapper: [
                        unwrappedVariable,
                    ],
                    error: new TypeError("wrapper is not an object"),
                });
        }
    )();
    
    (
        function()
        {
            TestCases.push(
                {
                    wrapper: [
                        {},
                    ],
                    error: new TypeError("wrapper has no properties"),
                });
        }
    )();
    
    (
        function()
        {
            const randomVariable = "1337";
            const anotherVariable = Symbol(1337);
            TestCases.push(
                {
                    wrapper: [
                        { randomVariable, anotherVariable },
                    ],
                    error: new TypeError("wrapper should have one property only"),
                });
        }
    )();

    export interface TestCase extends JestInCase.TestConfig
    {
        wrapper: unknown;
        error: jest.Constructable | Error | RegExp | string | undefined;
    }
}

describe(
    "getVariableNames(wrapper: object): string",
    (): void =>
    {
        cases<ValidTestCases.TestCase>(
            "Valid Cases",
            ({ expected, wrappers }): void =>
            {
                expect(getVariableNames(wrappers)).toStrictEqual(expected);
            },
            ValidTestCases.TestCases);

        cases<ErrorTestCases.TestCase>(
            "Error Cases",
            ({ error, wrapper }): void =>
            {
                expect(
                    (): void =>
                    {
                        getVariableNames(wrapper as any);
                    })
                    .toThrowError(error);
            },
            ErrorTestCases.TestCases);
    });
