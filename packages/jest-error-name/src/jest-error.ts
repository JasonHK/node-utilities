"use strict";

import { JestErrorTypes } from "./jest-error-types";

import { JestErrors } from "./types/jest-errors";

import { isAsymmetricMatcher } from "./utilities/is-asymmetric-matcher";
import { isRegExp } from "./utilities/is-regexp";

export class JestError
{
    private readonly _error: JestErrors;
    private readonly _message: string | undefined;
    private readonly _name: string | undefined;
    private readonly _type: JestErrorTypes;

    public get error(): JestErrors { return this._error; }

    public get message(): string | undefined { return this._message; }

    public get name(): string | undefined { return this._name; }

    public get type(): JestErrorTypes { return this._type; }

    public constructor(error?: JestErrors)
    {
        this._name = undefined;
        this._message = undefined;

        if (typeof error === "undefined")
        {
            this._type = JestErrorTypes.ANY;
        }
        else if (typeof error === "string")
        {
            this._type = JestErrorTypes.STRING;
            this._message = error;
        }
        else if (typeof error === "function")
        {
            this._type = JestErrorTypes.CLASS;
            this._name = error.name;
        }
        else if (isRegExp(error))
        {
            this._type = JestErrorTypes.REGEXP;
            this._message = String(error);
        }
        else if (isAsymmetricMatcher(error))
        {
            this._type = JestErrorTypes.MATCHER;
        }
        else if ((typeof error === "object") && (error !== null))
        {
            this._type = JestErrorTypes.OBJECT;
        }
    }
}
