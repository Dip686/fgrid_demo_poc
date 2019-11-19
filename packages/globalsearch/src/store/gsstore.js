import { writable } from 'svelte/store';
export const globalSearchStore = writable({
  searchString: 'Rahul Das',
  className: 'warn-input'
});
