import {Lignefacture} from '../../../enteties/lignefacture.js'
import {Service} from '../../../enteties/service.js'
import {Facture} from '../../../enteties/facture.js'
import {Client} from '../../../enteties/client.js'
import {create} from '../html/_create.js'


export var createlf = Vue.extend({
	//props: ['facture'],
	data: function () {
		return {
				prop: new Lignefacture(),
				serv: new Service(),
				fact: new Facture(),
				clt: new Client(),
				servs:[],
				facts:[],
				clts:[],
				prix:"",
				libelleservice:"",



			}
	},
	methods: {

		create : async function(){
					//console.log(this.prop.totalfacture)
//	this.prop.facture_id_facture = this.facture.id_facture

		var ss = this.prop.service_idservice ;


		this.serv = await new Service().getInfoServ(ss);
	 	console.log(this.serv.prixservice);//Anissa comment je récupère un élément selon l'id
	  this.prix=this.serv.prixservice; //Anissa
		this.libelleservice=this.serv.libelleservice;

    var Total =  this.prop.quantite_service * this.prix;
    this.prop.prix_total = Total; //Anissa
    //this.prop.service_idservice += this.libelleservice; //Anissa //Comment afficher le libéllé de service

          this.prop.create().then((resp) => {
						console.log(resp)
					  setTimeout(() => $(".modal").modal('hide'), 500 )
       })


		 },
	/*	 getprixServ: async function(a){
					 this.serv = await new Service().getone(a);
					 	console.log(this.serv.prixservice);//Anissa comment je récupère un élément selon l'id
					 this.prix=this.serv.prixservice; //Anissa

		 },*/
		getServ: async function(){
					this.servs = await new Service().getall(); //Anissa
		},

	/*	getCin : async function(a){
					this.clt = await new Client().getone(a);
					return(clt.cin_client);

		}*/
		getFact: async function(){
					this.facts = await new Facture().getall(); //Anissa
		},


	},
	created : function () {
		this.getFact();
		this.getServ(); //Anissa
		//this.getCin(this.prop.facture_id_facture);

	},
	template: create
})
// register
Vue.component('create-lignefacture-component', createlf)
