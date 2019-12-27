"use strict";

const SCOPED_PACKAGES = new Map(
    [
        [
            "_jasonhk_",
            [
                "variable-name",
            ],
        ],
    ]);

module.exports = {
    [`^packages/([^/]+)(?:#readme|/README.md)`](_, name)
    {
        return `modules/${ getPackagePrefix(name) }${ name.replace(/-/g, "_") }.html`;
    }
};

function getPackagePrefix(name)
{
    for (const scope of SCOPED_PACKAGES)
    {
        if (scope[1].includes(name))
        {
            return scope[0];
        }
    }

    return "";
}
