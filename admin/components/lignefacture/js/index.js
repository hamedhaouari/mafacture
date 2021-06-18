import {Lignefacture} from '../../../enteties/lignefacture.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
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
						count:  "Affichage de {from} à {to} des {count} Lignefactures|{count} articles|un seul lignefacture",
						limit: 'Lignefactures Par Page',
						filterBy: "",
					},
					headings: {
						
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
	template: all
})
// register
Vue.component('lignefacture-component', LignefactureComponent)