<template>
    <div class="toast"  v-show="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message:'',
            isShow:false
        }
    },
    methods:{
        show(message,time){
            this.isShow=true
            this.message=message
            setTimeout(()=>{
                this.isShow=false
                this.message=''
            },time)
        }
    }
}
</script>

<style scoped>
.toast{
    width: 150px;
    height: 30px;
    padding: 5px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #ffffff;
    background-color: rgb(49, 45, 45,.6);
    z-index: 20;
}
</style>