<template>
    <div class="item">
       <input type="checkbox" v-on:change="updateCheck(item)" v-model="item.completed">
       <span :class="[item.completed?'completed':'','itemText']">{{item.name}}</span>
       <font-awesome-icon v-on:click="removeItem(item.id)" icon="trash" :class="['trash']"></font-awesome-icon>
    </div>
</template>
<script>
export default {
    props:['item'],
    methods:{
        updateCheck(item){
            // this.axios.put('api/item/'+id,{
            //     item:this.item
            // }).then
            // (res=>{
            //     if(res.status==200)
            //     {
            //         this.$emit('itemchanged')
            //     }
            // }).catch(err=>{
            //     console.log(err);
            // })
            this.$store.dispatch('item/updateItem',item);
        },
        removeItem(id)
        {
            // this.axios.delete('api/item/'+id).
            // then(res=>{
            //     if(res.status==200)
            //         this.$emit('itemchanged');
            // }).catch(err=>{
            //     console.log(err);
            // })
            this.$store.dispatch('item/deleteItem',id);
        }
    }
}
</script>
<style scoped>
.completed{
    text-decoration: line-through;
    color: rgb(173, 169, 169);
}
.itemText{
    width: 100%;
    margin-left: 10px;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trash{
    font-size: 20px;
}
</style>