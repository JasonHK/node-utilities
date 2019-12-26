"use strict";

import { getVariableName } from "./get-variable-name";

/**
 * Get the names of a list of variables as an `Array` of string.
 * 
 * @remarks
 * You must wrap the variables with an `Array` of object literal, like the
 * example below:
 * 
 * ```typescript
 * const object = { property: 1337 };
 * const { property } = object;
 * 
 * // Should return ["object", "property"]
 * getVariableName(
 *     [
 *         { object },
 *         { property },
 *     ]);
 * ```
 * 
 * @since 0.0.1
 * 
 * @param wrappers The target variables wrapped by an `Array` of object literal
 * @return The names of the variables
 */
export function getVariableNames(wrappers: object[]): string[]
{
    if (!Array.isArray(wrappers))
    {
        throw new TypeError(`${ getVariableName({ wrappers }) } is not an Array`);
    }
    else if (wrappers.length === 0)
    {
        throw new TypeError(`${ getVariableName({ wrappers }) } has no items`);
    }

    return wrappers.map(getVariableName);
}
