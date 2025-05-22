<template>

    <div>
        <button v-if="unRegisteredUser" class="btnn" @click="goToOneNews">Войти</button>
        <v-menu :width="254" :height="118">
      <template v-slot:activator="{ props }">
        <div class="user-info" v-if="!unRegisteredUser"  v-bind="props">
          <span> {{ fullName }} </span>
          <v-icon icon="mdi:mdi-menu-down"></v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item link @click="navigateToSettings">
          <div class="news">
            <v-icon icon="mdi:mdi-cog"></v-icon>
            <span class="news-text"> Настройки </span>
          </div>
        </v-list-item>
        <v-list-item link @click="logout">
          <div class="news">
            <v-icon icon="mdi:mdi-exit-to-app"></v-icon>
            <span class="news-text"> Выход </span>
          </div>
        </v-list-item>
      </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    name: "UserMenuOptionApi",
    inject: ['usersService'],
    data: () => ({
      unRegisteredUser: true,
    }),
    async mounted() {
      const localStorageUser = localStorage.getItem("currentUser");
      if (!localStorageUser) {
        this.unRegisteredUser = true;
      } else {
        this.unRegisteredUser = false;
        await this.userService.getUserById(parseInt(JSON.parse(localStorageUser)))
            .then((response) => {
              //Обработка полученных данных
            })
            .catch(error => {
              //Обработка ошибки
              console.log(error);
            })
            .finally(() => {
              //Дополнительные действия после выполнения запроса
            })
      }
    },
    mathods: {
        navigateToProfile() {
      console.log('Переход на страницу профиля'); // Логика перехода на страницу профиля
    },
    logout() {
      console.log('Выход из системы'); // Логика выхода из системы
    },
    
    }
  }
</script>
<style>
.btnn {
    background: none;
    border-radius: 5px;
    color: white;
    text-align: left;
    height:  32px;
    margin: 8px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  </style>