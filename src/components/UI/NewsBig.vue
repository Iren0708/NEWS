<template>
    <div class="oblastotobr">
      <div class="img"></div>
      <div>
        <div class="data">16 мая 2024 12:00</div>
        <div class="text-for-news">В обществе прошли мероприятия, посвящённые Дню Победы </div>
        <div class="text">В обществе прошли мероприятия, посвящённые Дню Победы. В них приняли участие 156 работников.</div>
        <button class="btn">Читать далее</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsBig',
  };
  </script>
  
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
  </style>
  