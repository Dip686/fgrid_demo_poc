import { gridStore } from '../store/gridstore';
import { get } from 'svelte/store';
import  GlobalComponent  from '../component/GlobalComponet.svelte';

export default class Grid {
	constructor(config) {
		this.state = {};
	}
	getStore () {
		console.log(get(gridStore));
	}
	setStore (obj) {
		gridStore.set(obj);
	}
	render() {
		let GSObj = new GlobalComponent({
			props: {},
			target: document.getElementsByClassName('grid-container')[0]
		});
	}
}