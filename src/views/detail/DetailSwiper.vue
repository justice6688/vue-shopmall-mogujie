<template>
       <swiper class="swiper-item">
           <swiper-item v-for="(item,index) in topImages" :key="index">
               <img :src="item" alt="">
           </swiper-item>
       </swiper>
</template>

<script>
import Swiper from '../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../components/common/swiper/SwiperItem.vue'


export default {
    data() {
        return {
            
        }
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    
    }
}
</script>

<style scoped>
.swiper-item{
    width: 100%;
    height: 300px;
}
</style>