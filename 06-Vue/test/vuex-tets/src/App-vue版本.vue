<template>
  <div>
    <p>点击了<b>{{ count }}</b>次，次数是<b>{{ evenOrOdd }}</b></p>

    <button @click="incrent">+</button>
    <button @click="decrease">-</button>
    <button @click="increntIfOdd">incrent if odd【偶数时增加】</button>
    <button @click="increntIfAsync">increment async【异步增加】</button>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    evenOrOdd(){
      return this.count%2===0?"偶数":"奇数"
    }
  },
  methods:{
    incrent(){//增加1
      this.count++;
    },
    decrease(){//减少1
      this.count--;
    },
    increntIfOdd(){//偶数时增加
      if(this.count%2===0){
        this.count++;
      }
    },
    increntIfAsync(){//异步增加1
      setTimeout(()=>{
        this.count++;
      },1000)
    }
  }
};
</script>


<style  scoped>
b{
  color: red;
}
</style>
