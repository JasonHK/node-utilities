"use strict";

export interface AsymmetricMatcher
{
    asymmetricMatch: (received: unknown) => boolean;
}
