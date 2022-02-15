<template>
  <div class="star star-24">
    <span class="star-item"  v-for="(item ,index) in starClassses" :key='index' :class="item"></span>
  </div>
</template>

<script>
export default {
  props:{
    rating:{
      requied:true,
      type:Number,
      default:5
    }
  },
  computed:{
    starClassses(){
      let result = [];
      let rating =this.rating;
      //全星-on  5个或5个以下
      let onClass = Math.floor(rating);
      for(let i=0 ;i<onClass;i++){
        result.push('on');
      }
      //半星--half 1个或0个
      (rating-onClass>0) && result.push('half');
      //0星--off  根据数组的长度决定
      while(result.length<5){
        result.push('off');
      }
      return result;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
  .star { // 2x图 3x图
                  float: left;
                  font-size: 0;

                  .star-item {
                    display: inline-block;
                    background-repeat: no-repeat;
                  }

                  &.star-48 {
                    .star-item {
                      width: 20px;
                      height: 20px;
                      margin-right: 22px;
                      background-size: 20px 20px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &.on {
                        bg-image('../../../public/images/stars/star48_on');
                      }

                      &.half {
                        bg-image('../../../public/images/stars/star48_half');
                      }

                      &.off {
                        bg-image('../../../public/images/stars/star48_off');
                      }
                    }
                  }

                  &.star-36 {
                    .star-item {
                      width: 15px;
                      height: 15px;
                      margin-right: 6px;
                      background-size: 15px 15px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &.on {
                        bg-image('../../../public/images/stars/star36_on');
                      }

                      &.half {
                        bg-image('../../../public/images/stars/star36_half');
                      }

                      &.off {
                        bg-image('../../../public/images/stars/star36_off');
                      }
                    }
                  }

                  &.star-24 {
                    .star-item {
                      width: 10px;
                      height: 10px;
                      margin-right: 3px;
                      background-size: 10px 10px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &.on {
                        bg-image('../../../public/images/stars/star24_on');
                      }

                      &.half {
                        bg-image('../../../public/images/stars/star24_half');
                      }

                      &.off {
                        bg-image('../../../public/images/stars/star24_off');
                      }
                    }
                  }
                }

</style>