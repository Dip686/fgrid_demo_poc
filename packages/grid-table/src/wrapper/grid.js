import { gridStore } from '../store/gridstore';
import { get } from 'svelte/store';
import  GlobalComponent  from '../component/GlobalComponet.svelte';
import  globalSearchWrapper  from '../../../globalsearch/public/globalsearch';
export default class Grid {
	constructor(config) {
		this.state = {};
	}
	getStore () {
		return(get(gridStore));
	}
	setStore (obj) {
		gridStore.set({...get(gridStore), ...obj});
	}
	render() {
		let gridTableObj = this, 
			GSObj = new globalSearchWrapper({
			props:{},
			target:document.getElementsByClassName('search-container')[0]
		}),
			GridObj = new GlobalComponent({
			props: {},
			target: document.getElementsByClassName('grid-container')[0]
		});
		GSObj.render();
		GSObj._app.$on('contentChanged', (e) =>{
			let serachQuery = e.detail,
				data = 	gridTableObj.getStore().data;
				data = data.filter((val)=> val[1].includes(serachQuery));
			gridTableObj.setStore({data});
		});
	}
}