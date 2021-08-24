<template>
  <!-- <div class="footer">Footer page</div> -->
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span> <span>已完成{{finishSize}}</span> / 全部{{plans.length}} </span>
    <!-- <button class="btn btn-danger" v-show="isShow">清除已完成任务</button> -->
     <button class="btn btn-danger" v-show="finishSize>0" @click="clearComplatePlan">清除已完成任务</button>
  </div>
</template>




<script>
export default {
  props:['plans','checkAll','clearComplatePlan'],
  computed:{
    finishSize(){
      // let newArr = this.plans.filter((item)=>{return !item.complate})
      // return newArr.length
      //return this.plans.filter((item)=>{return item.complate}).length
      
      // return this.plans.reduce((pre,next)=>{
      //   return pre+(next.complate?0:1)
      // },0)
      // return this.plans.reduce((pre,next)=> pre+(next.complate===true?1:0),0);
      return this.plans.reduce((pre,next)=> pre+(next.complate?1:0),0);
    },
    // isShow(){
    //   //已完成>0的时候才显示
    //   // finishSize
    //   return this.finishSize>0?true:false;
    // }
    isCheckAll:{
      //通过计算判断 是否全选中
      get(){
        return this.plans.length===this.finishSize && this.finishSize>0
      },
      set(val,oldVal){
        // console.log(val,oldVal);
        //修改finishSize 的值的时候，修改plans中所有 plan.complate 取反
        // 子组件不能修改父组件的数据，所以需要调用父组件的方法
        this.checkAll(val);
      }
    }
  }
};
</script>

<style  scoped>
/* .footer {
  background-color: aquamarine;
} */
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>

