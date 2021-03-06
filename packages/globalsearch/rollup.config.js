import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: './src/wrapper/globalsearch.js',
	output: [
		{ file: pkg.module, 'format': 'es', dir: 'public/'},
		{ file: pkg.main, 'format': 'umd', file: 'public/umdfile.js', name},
		{ file: pkg.main, 'format': 'iife', file: 'public/iifefile.js', name}
	],
	plugins: [
		svelte(),
		resolve()
	]
};
