import { writable } from 'svelte/store';
export const gridStore = writable({
  data: [['Rahul', 'Das', 25],
        ['Dip', 'Mukherjee', 25],
        ['Diptarag', 'Mukherjee', 35],
        ['Priyanjit', 'Dey', 25],
        ['Md', 'Owais', 24],
        ['Nilarnab', 'Mukherjee', 26],
        ['Debanjan', 'Dey', 29]],
  schema: ['First Name', 'Last Name', 'Age']      
});
