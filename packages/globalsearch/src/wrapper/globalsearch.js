import { globalSearchStore } from '../store/gsstore';
import  GlobalSearchComponent  from '../component/globalSearchComponent.svelte';

export default class globalSearchWrapper {
	constructor(config) {
		this.state = {};
		this.state.unSubscribe = globalSearchStore.subscribe(value => {
			this.state.globalSearchStore = value;
		});

	}
	render() {
		let GSObj = new GlobalSearchComponent({
			globalSearchStore,
			target: document.body
		});
	}
}