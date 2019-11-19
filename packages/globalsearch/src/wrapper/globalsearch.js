import { globalSearchStore } from '../store/gsstore';
import { get } from 'svelte/store';
import  GlobalSearchComponent  from '../component/globalSearchComponent.svelte';

export default class globalSearchWrapper {
	constructor(config) {
		this.state = {};
	}
	getStore () {
		console.log(get(globalSearchStore));
	}
	setStore (obj) {
		globalSearchStore.set(obj);
	}
	render() {
		let GSObj = new GlobalSearchComponent({
			props: {},
			target: document.getElementsByClassName('search-container')[0]
		});
	}
}