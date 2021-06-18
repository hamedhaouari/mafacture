export class Lignefacture {


	     idlignefacture

			 facture_id_facture

			 prestataire_idprestataire

			 service_idservice

			 quantite_service

			 prix_total

			 libelleservice

			 categorie_service

			 prixservice

    primary = "idlignefacture"

    fields =  ["service_idservice","quantite_service" ,"prix_total"]

    labels =  ["service_idservice","quantite_service" ,"prix_total"]

		columns = ["libelleservice", "prixservice", "service_idservice", "prix_total" , 'Actions']
	  columnsembed = ["libelleservice", "prixservice", "service_idservice", "prix_total" ]

    constructor (data) {
		 if(data){
			var keys = Object.keys(data);
			keys.forEach( x => {

				if( this.hasOwnProperty(x)){
					this[x] = data[x]
				}
			})
		}
    }

	async search(x){

		const encoded = encodeURI(API_URI+'lignefacture?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'lignefacture')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }


    async getone(){

       let p = this.primary
       const resp = await  axios.get(API_URI+'lignefacture?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"lignefacture",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

    async delete(){

		const resp =  await  axios({

					url: API_URI+"lignefacture",

					method: "DELETE",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

    async create(){

		delete this[this.primary];
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"lignefacture",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

}
