const API_URI = "http://localhost/mafacture/back/web/"
const CDN_URI = ""
	Vue.mixin({
			data: function() {
				return {
					api_url: API_URI,
					cdn_uri : CDN_URI
			}
		}
	})
	const app = new Vue({
		el: '#app'
	})
