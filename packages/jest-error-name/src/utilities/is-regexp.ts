"use strict";

export function isRegExp(payload: unknown): payload is RegExp
{
    return (
        ((typeof payload !== "undefined") && (payload !== null)) &&
        (typeof payload["test"] === "function")
    );
}
