<script>
  import { globalSearchStore } from '../store/gsstore';

  let GSObj,
    unSubscribe = globalSearchStore.subscribe(value =>{
      GSObj = value;
    });
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
Search Across Grid: <input class={GSObj.className} bind:value={GSObj.searchString}/>