<template>
  <v-navigation-drawer :height="1040" :width="267" >
    <v-list-item link>
      <div class="news">
        <v-icon icon="mdi-home"></v-icon>
        <!-- Иконка для первого элемента списка -->
        <span class="news-text"> Последние новости </span>
      </div>
    </v-list-item>
    <v-list-item link>
      <div class="news">
        <v-icon icon="mdi-fire"></v-icon>
        <!-- Иконка для второго элемента списка -->
        <span class="news-text"> Самые просматриваемые </span>
      </div>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style>
.news {
  display: flex;
  align-items: center;
}
.news-text {
  margin-left: 8px; /* Отступ между иконкой и текстом */
}
</style>
