<template>
    <div class="addItem">
        <input type="text" class="form-control" v-model="item.name">
        <font-awesome-icon v-on:click="addItem" icon="plus-circle" v-bind:class="[item.name?'active':'inactive','plus']"></font-awesome-icon>
    </div>
    
</template>
<script>
export default {
    data:function(){
        return {
            item:{
                name:'',

            }
        }
    },
    methods:{
        addItem(){
            // if(this.item.name=='')
            // {
            //     return;
            // }
            // this.axios.post('api/item/store',{
            //     item:this.item
            // }).then(res=>{
            //     if(res.status==201)
            //     {
            //         this.item.name="";
            //         this.$emit('itemAdd');
            //     }

            // }).catch(err=>{
            //     console.log(err);
            // })
            this.$store.dispatch('item/addItem',this.item);
            
        }
    }
}
</script>
<style scoped>
    .addItem{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input{
        background: rgb(240, 232, 232);
        border: 0px;
        outline: none;
        padding: 5px;
        margin-right: 10px;
        width: 100%;
    }
    .plus{
        font-size: 20px;
    }
    .active{
        color: rgb(75, 139, 199);
    }
    .noactive{
        color: rgb(151, 137, 137);
    }
</style>