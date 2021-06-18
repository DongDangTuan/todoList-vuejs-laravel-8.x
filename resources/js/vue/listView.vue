<template>
    <div>
      <div v-for="(item,index) in getListItem" :key="index">
          <listItem :item="item"  class="item"></listItem>
      </div>
    </div>
</template>
<script>
import listItem from'./listItem.vue'
export default {
    components:{
        listItem
    },
computed:{
    getListItem(){
        return this.$store.state.item.listItem;
    }
}
}
</script>
<style scoped>
    .item{
        background: rgb(214, 208, 208);
        padding: 5px;
        margin-top:10px;
    }
</style>