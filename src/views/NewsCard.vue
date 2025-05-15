
<template>
<div class="conteiner">
        <div class="zagolovok" >
          <v-icon icon="mdi:mdi-arrow-left" style="width: 24px;height: 24px;"></v-icon>
          <h2 class="nazvanie" style="font-family: Open Sans;font-weight: 600;font-size: 34px;line-height: 40px;letter-spacing: 0%;"
 >В обществе прошли мероприятия, посвящённые Дню Победы</h2>
        </div>
      <div class="oblastotobr">
      <div class="img"></div>
      <div>
        <div class="data">16 мая 2024 12:00</div>
        <div class="text">В обществе прошли мероприятия, посвящённые Дню Победы. В них приняли участие 156 работников.</div>
      </div>
    </div>
</div>    
</template>
<style scoped>
  .oblastotobr {
    width: 1800px;
    height: 353px;
    display: flex;
    flex-wrap: wrap;
  }
  .img {
    background: #d9d9d9;
    width: 627px;
    height: 353px;
  }
  .data {
    text-align: left;
    padding-left: 20px;
    font-size: 12px;
    color: gray;
    margin-bottom: 30px;
    font-family: Open Sans;
    width: 350px;
  }
  .text-for-news {
    text-align: left;
    padding-left: 20px;
    margin-bottom: 15px;
    font-weight: 600px;
    font-size: 20px;
    font-family: Open Sans;
    width: 350px;
  }
  .text {
    text-align: left;
    padding-left: 20px;
    margin-bottom: 50px;
    font-family: Open Sans;
    font-weight: 400px;
    width: 350px;
  }
  .btn {
    background: #1976d2;
    border-radius: 5px;
    color: white;
    text-align: left;
    padding-left: 20px;
  }
  .conteiner {
    left: 0 !important;
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
    flex-direction: row;
    align-items: center;
    padding: 56px 24px;
    gap: 10px;
  }
  </style>
  
  <script>
export default {
    name: 'NewsCard',
    
}
</script>