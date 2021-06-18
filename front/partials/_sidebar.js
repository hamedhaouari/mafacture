const sidebar = /*html*/ `

<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav d-print-none">
  <router-link
  to="/Home"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
  >
  <li :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']">
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
      <i class="icon-grid menu-icon"></i>
      <span class="menu-title">Tableau de bord</span>
    </a>
  </li>
  </router-link>
<router-link
  to="/Client"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']">
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
    <i class="icon-head menu-icon"></i>
    <span class="menu-title">Mes Clients</span>
    </a>
  </li>
</router-link>

	<router-link
  to="/Facture"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']">
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
    <i class="icon-paper menu-icon"></i>
    <span class="menu-title">Mes Factures</span>
    </a>
  </li>
</router-link>

 <router-link
  to="/Service"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
    <i class="icon-layout menu-icon"></i>
    <span class="menu-title">Mes Services</span>
    </a>
  </li>
</router-link>
<router-link
 to="/Lignefacture"
 v-slot="{ href, route, navigate, isActive, isExactActive }"
 custom
>
 <li
   :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
 >
   <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
   <i class="icon-grid-2 menu-icon"></i>
   <span class="menu-title">Lignes Facture</span>
   </a>
 </li>
</router-link>
  <li class="redbg nav-item" id="#routerbtn">
<a class="nav-link" href="./login.html" >
<i class="ti-power-off menu-icon"></i>
<span class="menu-title">Se deéconnecter </span>
</a>
</li>

</ul>

</nav>`



    	export var SideBar = Vue.extend({

				template: sidebar
			})
			// register
			Vue.component('sidebar-component', SideBar)
