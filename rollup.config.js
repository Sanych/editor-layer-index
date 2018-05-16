import json from 'rollup-plugin-json';

export default {
    input: 'index.mjs',
    output: {
        name: 'eli',
        file: 'dist/index.js',
        format: 'umd'
    },
    plugins: [
        json()
    ]
};