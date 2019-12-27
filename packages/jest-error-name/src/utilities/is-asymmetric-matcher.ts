"use strict";

import { AsymmetricMatcher } from "../types/asymmetric-matcher";

export function isAsymmetricMatcher(payload: unknown): payload is AsymmetricMatcher
{
    return (
        ((typeof payload !== "undefined") && (payload !== null)) &&
        (typeof payload["asymmetricMatch"] === "function")
    );
}
