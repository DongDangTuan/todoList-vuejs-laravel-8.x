<template>
    <div class="todoListContainer">
        <div class="heading">
              <h2 id="title">Todo List</h2>  
                <addItemForm ></addItemForm>
        </div>
        <list-view></list-view>
    </div>
</template>
<script>
import addItemForm from './vue/addItemForm.vue'
import listView from './vue/listView.vue'
export default {
    components:{
        addItemForm,
        listView

    },
    created(){
      this.$store.dispatch('item/getListItem');
    }
}
</script>
<style scoped>
    .todoListContainer{
        width :350px;
       margin: auto;
    }
    .heading{
        background:rgb(228, 222, 222);
        padding: 10px;
    }
    #title{
        text-align: center;
    }
</style>