#!/usr/bin/env node

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
    require('@babel/register')({
        extensions: ['.ts'],
    });
}

require(isDev ? '../src/cli' : '../dist/cli');
