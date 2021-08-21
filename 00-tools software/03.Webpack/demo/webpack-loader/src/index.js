import './css/index.css';
import './css/index.scss';
// console.log('ok');

import Vue from 'vue';
import Header from './Header.vue';


new Vue({
  el:"#root",
  render:h=>h(Header)
})