<template>

    <div>
        <UserPanel/>
        
    </div>
</template>
<script>
import UserPanel from './UserPanel.vue';

export default {
    name: "UserMenuOptionApi",
    inject: ['usersService'],
    components:{
      UserPanel
  },
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