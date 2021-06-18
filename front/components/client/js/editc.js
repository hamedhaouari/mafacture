import {Client} from '../../../enteties/client.js'
import {edit} from '../html/_edit.js'


export var editc = Vue.extend({
	props: ['prop'],
	methods: {
		 edit: async function() {
           this.prop.edit().then((resp) => {
						 console.log(resp)
						setTimeout( () => $(".modal").modal('hide'), 500 )
    			})
				.catch((err) => {
					console.error(err);
				});
        }
	},
  template: edit
})
// register
Vue.component('edit-client-component', editc)
