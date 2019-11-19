<script>
  import { globalSearchStore } from '../store/gsstore';

  let GSObj,
    unSubscribe = globalSearchStore.subscribe(value =>{
      GSObj = value;
    });
</script>
Search Across Grid: <input  bind:value={GSObj.searchString}/>