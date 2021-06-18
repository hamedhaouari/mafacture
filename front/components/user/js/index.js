import {User} from '../../../enteties/user.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var UserComponent = Vue.extend({
	data: function () {
		return {
			prop: new User(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Utilisateur|{count} Utilisateur|un seul Utilisateur",
						limit: 'User Par Page',
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
          this.prop = await new User(a).getone()
        }
	},
	template: all
})
// register
Vue.component('user-component', UserComponent)
