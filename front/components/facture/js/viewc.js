import {Facture} from '../../../enteties/facture.js'
import {Lignefacture} from '../../../enteties/lignefacture.js'

import {view} from '../html/_view.js'
import {Client} from '../../../enteties/client.js'


export var viewc = Vue.extend({
	props: ['prop'],
	data: function () {
		return {
				client: new Client(),
				ligne :  new Lignefacture(),
				totale : 0,
				link: ''
			}
	},
	methods: {
		 envoyer: async function() {
			 this.client.id_client = this.prop.client_id_client
			 this.client = await this.client.getone(this.client.id_client)

			 var data = JSON.stringify({"invoice_id":this.prop.id_facture,"invoice_amount":this.prop.totalfacture,"invoice_owner":this.prop.client_id_client,"invoice_email":this.client.email_client});

	 		 var config = {
	 		  method: 'post',
	 		  url: 'https://mc-zen.com/sandbox/link',
	 		  headers: {
	 		    'Content-Type': 'application/json'
	 		  },
	 		  data :data
	 		};

	 		axios(config)
	 		.then(function (response) {
	 		  this.link = JSON.stringify(response.data);
	 		})
	 		.catch(function (error) {
	 		  console.log(error);
	 		});

				}

	},


	template: view
})

// register
Vue.component('view-facture-component', viewc)
