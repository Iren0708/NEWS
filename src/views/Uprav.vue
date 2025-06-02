<template>
  <div>
    <div>
      <div class="zag"><h2 class="nazv">Управление новостями</h2></div>
    </div>
    <div class="btn">
      <button class="dob">
        <v-icon
          icon="mdi-plus"
          color="#1976D2"
          width="20px"
          height="20px"
        ></v-icon
        >Добавить новость
      </button>
      <button class="red">
        <v-icon
          icon="mdi-pencil"
          color="#1976D2"
          width="18px"
          height="18px"
        ></v-icon
        >Редактировать
      </button>
      <button class="del">
        <v-icon
          icon="mdi-delete"
          color="#FF5252"
          width="14px"
          height="18px"
        ></v-icon
        >Удалить
      </button>
    </div>
    <div>
      <table>
        <thead style="color: #7c878e; font-size: 14px; font-weight: 600">
          <tr>
            <th>
              <v-checkbox v-model="selectAll"></v-checkbox>
            </th>
            <th>Статус</th>
            <th>Заголовок новости</th>
            <th>Раздел</th>
            <th>Автор</th>
            <th>Дата и время создания</th>
            <th>Дата и время публикации</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in news" :key="item.id">
            <td>
              <input
                type="checkbox"
                v-model="selectedItems"
                :value="item.id"
              /></input>
            </td>
            <td><v-chip
                :style="{
                  backgroundColor: getStatusColor(item.status),
                  padding: '2px 6px',
                }"
              >
                {{ item.status }}
              </v-chip>
            </td>
            <td>{{ item.zag }}</td>
            <td>{{ item.razdel }}</td>
            <td>{{ item.avtor }}</td>
            <td>{{ toDate(item.datasozd) }}</td>
            <td>{{ toDate(item.datapubl) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/plugins/api/services/NewsService.js';

export default {
  name: 'uprav',
  data() {
    return {
      news: [],
      selectedItems: [],
      selectAll: false,
    };
  },
  watch: {
    selectAll(val) {
      this.selectedItems = val ? this.news.map(item => item.id) : [];
    }},
  methods: {
      getStatusColor(status) {
        switch (status) {
          case 'Опубликовано':
            return '#B1E9CF';
          case 'Черновик':
            return '#FFFBD7';
          case 'На таймере':
            return '#B3E5FC';
        }},
    async fetchNews() {
      try {
        this.news = await getNewsList();
      } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
        alert('Ошибка при загрузке новостей');
        console.log(await getNewsList());
      }
    },
    toDate(dateStr) {
      return new Date(dateStr).toLocaleString();
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style scoped>
.zag {
  background: #f6f6f6;
  width: 1611px;
  height: 15%;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  display: flex;
}
.nazv {
  font-family: Open Sans;
  width: 350px;
  font-size: 40px;
  width: 100%;
  height: 100%;
  display: flex;
}
.btn {
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  padding: 24px 0 24px 24px;
  overflow-x: auto;
}
th,
td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #aaafb9;
}
.dob {
  min-width: 193px;
  height: 40px;
  border: 1px solid #aaafb9;
  border-radius: 5px 0px 0px 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 35px;
}
.red {
  min-width: 193px;
  height: 40px;
  border: 1px solid #aaafb9;
  border-radius: 0px 0px 0px 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 35px;
}
.del {
  min-width: 193px;
  height: 40px;
  border: 1px solid #aaafb9;
  border-radius: 0px 5px 5px 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 35px;
}
</style>
