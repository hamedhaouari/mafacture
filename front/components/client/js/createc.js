import {Client} from '../../../enteties/client.js'
import {create} from '../html/_create.js'

export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Client()
			}
	},
	methods: {
		create : async function(){
          this.prop.create().then((resp) => {
						console.log(resp)
					 setTimeout( () => $(".modal").modal('hide'), 500 )
       })
			 .catch((err) => {
				 console.error(err);
				 alert("Impossible d'ajouter ce client, il existe déjà");
				 });
		}
	},
	template: create
})
// register
Vue.component('create-client-component', createc)
