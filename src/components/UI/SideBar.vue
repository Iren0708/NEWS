<template>
  <v-navigation-drawer :height="1040" :width="267">
    <v-list-item 
      v-for="(item, index) in menuItems" 
      :key="index" 
      link
    >
      <div class="news">
        <v-icon :icon="item.icon"></v-icon>
        <span class="news-text">{{ item.label }}</span>
      </div>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'SideBar',
  setup() {
    const route = useRoute();

    const menuItems = computed(() => {
      if (route.name === 'Uprav') {
        return [
          {
            label: 'Управление новостями',
            icon: 'mdi-cog'
          },
          { 
            label: 'Справочник разделов',
            icon: 'mdi-book-open'
          }
        ];
      } else {
        return [
          { 
            label: 'Последние новости',
            icon: 'mdi-home'
          },
          { 
            label: 'Самые просматриваемые',
            icon: 'mdi-fire'
          }
        ];
      }
    });

    return { menuItems };
  }
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