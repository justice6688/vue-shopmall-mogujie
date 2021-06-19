<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="item-recommend">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.item-recommend{
    flex: 1;
}
.item-recommend img{
    width: 65px;
    height: 65px;
    margin-bottom: 3px;
}
a{
    color: black;
    text-decoration: none;
}
</style>