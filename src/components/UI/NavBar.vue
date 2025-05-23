<template>
  <v-app-bar color="#01579B" fixed :height="45" :width="1860">
    <v-btn
      class="mdi mdi-menu round-button custom-icon"
      @click="toggleSidebar"
      variant="icon"
      :height="34"
      :width="24"
    />
    <v-icon icon="mdi:mdi-bullhorn custom-icons"></v-icon>
    <span class="news"> Новости </span>
    <div class="search-field">
      <v-text-field
        placeholder="Поиск новостей"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        :height="32"
        density="compact"
        :hide-details="true"
        :width="291"
      ></v-text-field>
    </div>
    <div>
      <UserMenu/>
    </div>
    
  </v-app-bar>
</template>

<script>

import UserMenu from './UserMenu.vue';
import UserPanel from './UserPanel.vue';

export default {
  components:{
    UserMenu, UserPanel
  },
  data() {
    return {
      isSideBarOpen: false,
      dropdownOpen: false,
      fullName: 'Шестакова И.А.', //Свое имя пользователя
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleSidebar() {
      this.isSideBarOpen = !this.isSideBarOpen;
      this.$emit('toggle-sidebar', this.isSideBarOpen);
    },
  },
};
</script>

<style>
.search-field {
  margin-left: auto;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  gap: 4px;
}
.custom-navbar .v-toolbar__content {
  height: 42px !important; /* Чтобы было обязательным */
}
.user-info {
  gap: 8px;
  height: 24px;
  width: 120px;
  position: relative;
}
.custom-icons {
  width: 22px;
  height: 20px;
  margin-left: 5px;
}
.news {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.news-text {
  margin-left: 8px; /* Отступ между иконкой и текстом */
}
.dropdown-menu {
  position: absolute;
  top: 100%; /* Положение под элементом */
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  z-index: 10; /* чтобы меню было над другими элементами */
}
.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background-color: #f0f0f0; /* эффект наведения */
}
</style>
