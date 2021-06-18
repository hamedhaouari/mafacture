import {Service} from '../../../enteties/service.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var ServiceComponent = Vue.extend({
	data: function () {
		return {
			prop: new Service(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Services|{count} articles|un seul service",
						limit: 'Services Par Page',
						filterBy: "",
					},
					headings: {
						"idservice" :"Id",

						"libelleservice":"Désignation",

						"categorie_service":"Catégorie",

						"prixservice":"Prix"
					},
					filterByColumn:true,
					perPageValues: [10, 25, 50, 100],
					debounce : 500
				}
			}
	},
	methods: {
		view: async function(a) {
          this.prop = await new Service(a).getone()
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
Vue.component('service-component', ServiceComponent)
