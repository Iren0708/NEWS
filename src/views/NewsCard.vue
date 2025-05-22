<template>
  <div>
    <div>
      <h2 class="Zag">
        <button class="btn" @click="openNews">
          <v-icon style="width: 24px;height: 24px; padding: 0 !important; " 
             icon="mdi: mdi-arrow-left"></v-icon></button>{{ Zag }} 
      </h2>
    </div>
    <div style="padding-left: 20px;">
      <div class="data">{{ data }}</div>
      <div class="btn" style="padding-left: 0 !important;">
        <button class="redact">
          <v-icon
            icon="mdi-pencil"
            color="#1976D2"
            width="18px"
            height="18px"
          ></v-icon
          >Редактировать
        </button>
        <button class="snyat">
          <v-icon
            icon="mdi-close"
            color="#1976D2"
            width="14px"
            height="14px"
          ></v-icon>Снять с публикации
        </button>
        <button class="delete">
          <v-icon
            icon="mdi-delete" color="#FF5252" width="14px" height="18px"
          ></v-icon>Удалить
        </button>
      </div>
      <div class="im_nazv">
        <div class="image"></div>
        <div class="nazvanie" >{{ nazvanie }}</div>
      </div>
      <div class="text">
        <div>{{ par1 }}</div>
        <div>{{ par2 }}</div>
        <div>{{ par3 }}</div>
        <div>{{ par4 }}</div>
        <div>{{ par5 }}</div>
        <div>{{ par6 }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Zag {
  background: #f6f6f6;
  width: 1611px;
  height: 152px;
  padding-top: 56px;
  padding-bottom: 56px;
  padding-right: 24px;
  padding-left: 24px;
  font-family: Open Sans;
  width: 350px;
  font-size: 34px;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
}
.nazvanie {
  display: flex;
  flex-wrap: wrap;
  width: 430px;
  font-family: Open Sans;
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
}
.btn {
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
}
.data {
  text-align: left;
  padding-left: 20px;
  font-size: 12px;
  color: gray;
  margin-top: 20px;
  margin-bottom: 0px;
  font-family: Open Sans;
  width: 350px;
}
.image {
  background: #d9d9d9;
  width: 733px;
  height: 429px;
}
.text {
  display: flex;
  flex-wrap: wrap;
  width: 921px;
  height: 375px;
  text-align: justify;
  padding-top: 10px;
}
.im_nazv {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.redact {
  min-width: 193px;
  height: 40px;
  border: 1px solid #aaafb9;
  border-radius: 5px 0px 0px 5px;
  margin-top: 20px;
  padding-bottom: 35px;
}
.snyat {
  min-width: 193px;
  height: 40px;
  border: 1px solid #aaafb9;
  border-radius: 0px 0px 0px 0px;
  margin-top: 20px;
  padding-bottom: 35px;
}
.delete {
  min-width: 193px;
  height: 40px;
  border: 1px solid #aaafb9;
  border-radius: 0px 5px 5px 0px;
  margin-top: 20px;
  padding-bottom: 35px;
}
</style>


<script>
export default {
    name: 'NewsCard',
    data() {
    return {
      Zag: 'В Обществе прошли мероприятия, посвящённые Дню Победы',
      data: '16 мая 2024 12:00',
      nazvanie: 'В Обществе прошли мероприятия, посвящённые Дню Победы. В них приняли участие 156 работников.',
      par1: 'Собравшихся приветствовал генеральный директор СПО «Арктика» Юрий Душкин:',
      par2: '– В мае 2005 года у центральной вахты нашего предприятия была открыта мемориальная стела, посвящённая памяти работников СПО «Арктика» – участников Великой Отечественной. На стеле в бронзе отлиты имена 138 воинов-победителей. Когда дети и молодые люди приходят на предприятие с экскурсиями, они обращают внимание на этот мемориальный комплекс. Замечательно, что мы сохраняем память о тех, кто ковал Победу: на фронте или в тылу, совершая трудовые подвиги, осуществляя ремонт судов и кораблей. Низкий им поклон... ',
      par3: 'Председатель Совета ветеранов СПО «Арктика» Геннадий Подганин отметил, что всё меньше остаётся свидетелей событий Великой Отечественной войны. Уже нет в живых ни одного участника боевых действий – бывших работников СПО «Арктика». Сейчас в составе ветеранской организации 13 тружеников тыла, одна вдова фронтовика, двое жителей блокадного Ленинграда и более 380 человек, относящихся к категории «дети войны». Он подчеркнул, что задача поколения детей войны – как можно чаще встречаться со школьниками и студентами, чтобы рассказывать об уроках той войны.',
      par4: 'По традиции руководители предприятия и ветераны возложили цветы к стеле у центральной вахты. А затем они проехали к памятному знаку Александру Дубинину и мемориальной доске Александру Паршинову на площади Ломоносова в Северодвинске. Ветераны почтили память бывших директоров, которые были участниками Великой Отечественной войны.',
      par5: '8 мая СПО «Арктика» присоединилось к всероссийской акции «Георгиевская ленточка». У центральной вахты предприятия сотрудники отдела обучения и развития персонала раздавали всем желающим символ памяти о героизме, доблести и славе защитников Отечества.',
      par6: 'Также 8 мая руководители СПО «Арктика» во главе с генеральным директором Юрием Душкиным приняли участие в городских мероприятиях Северодвинска, посвящённых памяти победителей. В полдень у знака «Ратному подвигу северодвинцев» состоялся торжественный митинг и возложение цветов к Вечному огню. В церемонии приняли участие представители руководства города и области, предприятий и общественных организаций Северодвинска, военнослужащие, почётные гости.',
    };
  },   
  methods: {
    openNews() {
      this.$router.push({ name: 'News' });
    },
  }, 
}
</script>