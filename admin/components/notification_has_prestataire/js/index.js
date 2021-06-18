import {Notification_has_prestataire} from '../../../enteties/notification_has_prestataire.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var Notification_has_prestataireComponent = Vue.extend({
	data: function () {
		return {
			prop: new Notification_has_prestataire(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Notification_has_prestataires|{count} articles|un seul notification_has_prestataire",
						limit: 'Notification_has_prestataires Par Page',
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
          this.prop = await new Notification_has_prestataire(a).getone()
        }
	},
	template: all
})
// register
Vue.component('notification_has_prestataire-component', Notification_has_prestataireComponent)