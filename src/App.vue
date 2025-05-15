<script>
import NavBar from './components/UI/NavBar.vue';
import SideBar from './components/UI/SideBar.vue';
export default {
  name: 'App',
  components: { SideBar, NavBar},
  data() {
    return {
      isSideBarOpen: false,
    };
  },
  created(){

  }
};
</script>

<template>
  <v-app>
    <nav-bar
      @toggle-sidebar="
        (isOpen) => {
          isSideBarOpen = isOpen;
        }
      "
    />
    <v-main style="margin-top: 45px ;">
      <side-bar v-if="isSideBarOpen" />
      <div
      :style="isSideBarOpen ? 'margin-left: 266px;' : ''"
      >
      <router-view>

      </router-view> 
      </div>
    </v-main>
  </v-app>
</template>


<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.v-main {
  top: 40px;
  width: 100% !important;
  padding: 0 !important;
}
.v-app {
  max-width: 1680px;
}
</style>
