<template>
    <div class="conteiner">
      <div>
        <div class="zagolovok"><h2 class="nazvanie">Последние новости</h2></div>
      </div>
      <div
      v-if="listNews.length"
      class="news-grid"
      >
      <div
        v-for="(news, index) in listNews" :key="news.num">
        <NewsBig v-if="index === 0" :news="news"/>
      
       
          <div v-else>
            <div class="img"></div>
            <div class="data">{{ news.data }}</div>
            <a href="" class="text-for-news" v-html="news.nazvanie"></a>
          </div>
      </div>
    </div>
      <p v-else>
        Новостей нет
      </p>
    </div>
  </template>
  
  <script>
import NewsBig from '../components/UI/NewsBig.vue';
  export default {
    name: 'News',
    components: {
      NewsBig,
    },
    data() {
      return {
        listNews: [
          {
            num: 1,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 2,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 3,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 4,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 5,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 6,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 7,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 8,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
          {
            num: 9,
            data: '16 мая 2024 12:00',
            nazvanie: 'В обществе прошли праздничные мероприятия, посвящённые Дню Победы',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .news-grid{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
  }
  .conteiner {
    left: 0 !important;
  }
  .nazvanie {
    font-family: Open Sans;
    width: 350px;
    font-size: 40px;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .ListNews {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px 33px;
  }
  .data {
    font-size: 12px;
    color: gray;
    top: 1px;
    text-align: left;
    display: flex;
  }
  .text-for-news {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 14px;
    font-family: Open Sans;
    text-decoration: none;
    color: black;
    display: flex;
    flex-wrap: wrap;
    width: 270px;
    text-align: left;
    display: flex;
  }
  .img {
    background: #d9d9d9;
    width: 319px;
    height: 180px;
    display: flex;
  }
  
  .zagolovok {
    background: #f6f6f6;
    width: 1611px;
    height: 15%;
    padding-top: 16px;
    padding-right: 24px;
    padding-left: 24px;
    width: 100%;
    height: 100%;
    display: flex;
  }
  </style>
  