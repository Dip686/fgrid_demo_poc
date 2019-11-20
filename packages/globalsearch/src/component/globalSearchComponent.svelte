<script>
  import { globalSearchStore } from '../store/gsstore';
  import { createEventDispatcher } from 'svelte';
  
  let GSObj,
    dispatcher = createEventDispatcher(),
    unSubscribe = globalSearchStore.subscribe(value =>{
      GSObj = value;
    });
  function dispatchEvents (e) {
    dispatcher('contentChanged', e.target.value);
  }
</script>
<style>
.warn-input {
  border-color: red
}
.success-input {
  border-color: green
}
.default-input {
  border-color: black
}
</style>
Search Across Grid: <input 	on:input ={dispatchEvents} class={GSObj.className} bind:value={GSObj.searchString}/>