#!/usr/bin/env node

import meow from 'meow';
import colors from 'colors';
import fs from 'fs';
import path from 'path';
import _mkdirp from 'mkdirp';
import { promisify } from 'util';
import { app } from './index';
import { AssertionError } from 'assert';

const mkdirp = _mkdirp.sync;
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

const main = async (input: string[], flags: any) => {
    const [url] = input;

    if (!url) {
        console.log(colors.red('Pass a url to a recipe.'));
        process.exit(1);
    }

    console.log(colors.bold(`Importing recipe from ${url}`));
    const result = await app(url);
    const out = path.resolve(process.cwd(), flags.output || 'cookbook/');
    const file = path.join(out, result.recipe.name + '.md');

    await mkdirp(out);
    console.log(colors.green(`Writing ${file}`));

    await writeFile(file, result.contents);
};

main(cli.input, cli.flags);
