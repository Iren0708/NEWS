<template>
    <div class="sidebar-news" style="font-size: 15px">
      <div class="text-news">
        <div class="sidebar-news-block">
          <img src="/src/assets/Home.svg" width="17" height="20" alt="Дом" />
          <button href="" style="margin-left: 10px; padding: 0">
            Последние новости
          </button>
        </div>
      </div>
      <div class="text-news">
        <div class="sidebar-news-block">
          <img src="/src/assets/Fire.svg" width="16" height="20" alt="Огонь" />
          <button href="" style="margin-left: 10px; padding: 0">
            Самые просматриваемые
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .sidebar-news {
    overflow-y: auto;
  }
  .text-news {
  }
  .text-news:hover {
    color: #1976d2;
    background: #ddeaf8;
  }
  .sidebar-news-block {
    padding: 8px 0 3px 5px;
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  