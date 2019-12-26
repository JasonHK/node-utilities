"use strict";

/**
 * Get the name of a variable as a string.
 * 
 * @remarks
 * You must wrap the variable with an object literal, like the example below:
 * 
 * ```typescript
 * const variable = 1337;
 * 
 * // Should return "variable"
 * getVariableName({ variable });
 * ```
 * 
 * @since 0.0.1
 * 
 * @param wrapper The target variable wrapped by an object literal
 * @return The name of the variable
 */
export function getVariableName(wrapper: object): string
{
    if ((typeof wrapper !== "object") || (wrapper === null))
    {
        throw new TypeError(`${ getVariableName({ wrapper }) } is not an object`);
    }

    const keys: string[] = Object.keys(wrapper);
    switch (keys.length)
    {
        case 0:
            throw new TypeError(`${ getVariableName({ wrapper }) } has no properties`);
        case 1:
            return keys[0];
        default:
            throw new TypeError(`${ getVariableName({ wrapper }) } should have one property only`);
    }
}
