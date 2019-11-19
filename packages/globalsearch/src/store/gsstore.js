import { writable } from 'svelte/store';
export const globalSearchStore = writable({
  defaultGlobalSearchString: 'Rahul Das'
});
