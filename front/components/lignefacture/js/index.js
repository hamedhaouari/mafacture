import {Lignefacture} from '../../../enteties/lignefacture.js'
import {all} from '../html/_index.js'
import {createlf} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var LignefactureComponent = Vue.extend({
	data: function () {
		return {
			prop: new Lignefacture(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Lignefacture|{count} articles|une seule lignefacture",
						limit: 'Lignefacture Par Page',
						filterBy: ""
					},
					headings: {
						"idlignefacture" : "Ligne Facture",

						"facture_id_facture" : "Facture",

						"prestataire_idprestataire" : "Prestatire",

						"service_idservice": "Service",

						"quantite_service" : "Quantité",

						"prix_total" : "Prix Total"

					},
					filterByColumn:true,
					perPageValues: [10, 25, 50, 100],
					debounce : 500
				}
			}
	},
	methods: {
		view: async function(a) {
          this.prop = await new Lignefacture(a).getone()
        }
	},
	mounted: function () {
		let self = this
		$(".modal").on("shown.bs.modal", function () {
	    if ($(".modal-backdrop").length > 1) {
	        $(".modal-backdrop").not(':first').remove();
	    }
	  })
		$(".modal").on("hide.bs.modal.bs.modal", function () {
			$(".modal-backdrop").remove();
			self.$refs.table.refresh();
		})
		console.log(self.$refs)
	},

	template: all
})
// register
Vue.component('lignefacture-component', LignefactureComponent)
