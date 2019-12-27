"use strict";

import { AsymmetricMatcher } from "./asymmetric-matcher";
import { Constructable } from "./constructable";

export type JestErrors = AsymmetricMatcher | Constructable | Error | RegExp | string | undefined;
