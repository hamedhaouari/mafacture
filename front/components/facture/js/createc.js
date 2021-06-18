import {Facture} from '../../../enteties/facture.js'
import {Client} from '../../../enteties/client.js'
import {Service} from '../../../enteties/service.js'
import {Lignefacture} from '../../../enteties/lignefacture.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Facture(),
			client: new Client(),
			service:new Service(),//Anissa
			lignefacture: new Lignefacture(),//Anissa
			cins: [],
			servs:[],
			lignes: [],
			}
	},
	methods: {
		create : async function(){
					//console.log(this.prop.totalfacture)

          this.prop.create().then((resp) => {
						console.log(resp)
					  setTimeout(() => $(".modal").modal('hide'), 500 )
       })

		 },
			 getCin : async function(){
						 this.cins = await new Client().getall();
			 },
			 getServ: async function(){
						 this.servs = await new Service().getall(); //Anissa
			 },
			 getLigne: async function(a){
						 this.ligneF = await new Lignefacture().getall(a);
			 },

	},
	mounted : function () {
	this.getCin();
		//this.getServ(); //Anissa
	//	this.getLigne(this.prop.id_facture);
	},

	template: create
})
// register
Vue.component('create-facture-component', createc)
