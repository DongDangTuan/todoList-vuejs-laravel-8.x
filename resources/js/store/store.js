import axios from "axios"

const state = {
    listItem: []
};
const mutations = {
    addItem: (state, item)=>
        {state.listItem.splice(0,0,item)},
    getList: (state, items) =>
        {state.listItem=items;
       },
    deleteItem: (state,id)=>{
        state.listItem.forEach((element,index) => {
            if(element.id==id)
                state.listItem.splice(index,1);
        });
    },
    updateItem:(state,item)=>
    {
        state.listItem.forEach((item,index)=>{
            if(element.id==item.id)
                {
                    element.completed=item.completed;
                }
        })
    }

};
const actions = {
    getListItem: (context)  => {
        axios.get('/api/items').
            then(res => { context.commit('getList', res.data) });
    },
    addItem: (context,item) => {
        axios.post('/api/item/store',{item:item}).
            then(res => {
                context.commit('addItem', res.data);
            })
    },
    deleteItem: (context,id)=>
    {
        axios.delete('/api/item/'+id).then(res=>{
            if(res.status==200)
                context.commit('deleteItem',id);
        }).catch(err=>{
            console.log(err);
        })
    },
    updateItem: (context,item)=>
    {
        axios.put('/api/item/'+item.id,{item:item}).then
        (res=>{
            if(res.status==200)
                context.commit('updateItem',res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

  
};
export default {
    namespaced:true,
    state, mutations, actions
}