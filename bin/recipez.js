#!/usr/bin/env node

const meow = require('meow');
const colors = require('colors');
const app = require('../dist').app;
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp').sync;
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const cli = meow(
    `
Usage:

> npx recipez https://www.allrecipes.com/recipe/273685/chili-lime-chicken/
`,
    {
        flags: {
            output: {
                type: 'boolean',
                alias: 'o',
            },
        },
    },
);

const main = async (url, flags) => {
    console.log(colors.bold(`Importing recipe from ${url}`));
    const result = await app(url);
    const out = path.resolve(process.cwd(), flags.output || 'cookbook/');
    const file = path.join(out, result.recipe.name + '.md');

    await mkdirp(out);
    console.log(colors.green(`Writing ${file}`));

    await writeFile(file, result.contents);
};

main(cli.input, cli.flags);
