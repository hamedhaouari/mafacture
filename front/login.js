//import {User} from '../enteties/user.js'


const API_URI = "http://localhost/mafacture/back/web/"
const CDN_URI = ""
	//Vue.component('v-select', VueSelect.VueSelect);
	//Vue.use(VueTables.ServerTable);
	//Vue.use(VueRouter);
	Vue.mixin({


			data: function() {
				return {
					api_url: API_URI,
					cdn_uri : CDN_URI,
				  email:"",
					password:""


			}
		},
		methods: {

			 login: async function() {
				 //var email = getElementById('exampleInputEmail1');
				  //var MP = getElementById('exampleInputPassword1');

			var data = JSON.stringify({"email":this.email,"password":this.password});

var config = {
  method: 'post',
  url: 'http://localhost/mafacture/back/web/login',
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
	localStorage.setItem('user', response.data);
	window.location.href = "index.html";
})
.catch(function (error) {
  console.log(error);
	alert("Login ou mot de passe incorrecte");
});


		}

	},
	created : function(){
		localStorage.clear();
	}
	})
	const app = new Vue({
		el: '#app'
	})
