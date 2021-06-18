import {Lignefacture} from '../../../enteties/lignefacture.js'
import {del} from '../html/_delete.js'


export var deletec = Vue.extend({
	props: ['prop'],
	methods: {
		del : async function(){
				this.prop.delete().then((resp) => {
					console.log(resp)
					setTimeout(() => $(".modal").modal('hide'), 500 )
				})
				.catch((err) => {
					console.error(err);
			});
		}
	},
  template: del
})
// register
Vue.component('del-lignefacture-component', deletec)
