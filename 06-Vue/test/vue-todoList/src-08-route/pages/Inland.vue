<template>
  <div>
    <ul class="news-list">
      <li v-for="m in messages" :key="m.id">
        <!-- <router-link :to="'/home/guonei/detail/' + m.id"> -->
        <router-link :to="`/home/guonei/detail/${m.id}`">
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <div class="news-detail">
      <ul>
        <router-view></router-view>
      </ul>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      messages: [
        { id: 1, title: "01-蚂蚁已服" },
        { id: 2, title: "02-郑爽xxxx" },
        { id: 3, title: "03-阿里嗝屁了" },
        { id: 4, title: "04-蚂蚁已服" },
      ],
    };
  },
};
</script>


<style  scoped>
.news-list {
  background-color: seagreen;
}
.news-detail {
  background-color: slategrey;
}
</style>
