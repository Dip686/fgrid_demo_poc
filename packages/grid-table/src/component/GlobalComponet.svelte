<script>
    import { gridStore } from '../store/gridstore.js';
    let dataArr,
    schemaArr;
    gridStore.subscribe(obj => {
        dataArr = obj.data;
        schemaArr = obj.schema;
    });
 
</script>
<style>
    div{
        width: 400px;
        height: 500px;
        overflow-y: scroll;
        border: 2px solid black;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
<div>
    <table>
        <tr>
            {#each schemaArr as columnName}
                <th>{columnName}</th>
            {/each}
        </tr>

        {#each dataArr as currDataArr}
            <tr>
                    {#each currDataArr as cellValue}
                        <td>{cellValue}</td>
                        
                    {/each}
            </tr>
        {/each}    
    </table>
</div>