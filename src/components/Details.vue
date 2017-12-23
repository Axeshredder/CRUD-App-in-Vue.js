<template>
  <div class="details container">
    <h2 class = "page-header">{{customer.name}}</h2>
    <ul class = "list-group">
        <li class = "list-group-item">Age:{{customer.age}}</li>
        <li class = "list-group-item"><span class = "glyphicon glyphicon-envelope"></span>  Email:{{customer.email}}</li>
        <li class = "list-group-item">Profession:{{customer.profession}}</li>
    </ul>
    <span class = "pull-right"><button class = "btn btn-danger" v-on:click = "del(customer.name)">Delete</button></span> 
    <span class = "pull-right"><button class = "btn btn-primary" v-on:click = "edit(customer.name)">Edit</button></span>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
       customer:{},
       customers:[]
    }
  },
  methods:{
       fetchCustomer(name){
            this.$http.get('https://auth-4eb1f.firebaseio.com/data.json').then(
        function(response){
            if(this.customers=[]){
            for(var data in response.body){
              this.customers.push(response.body[data])
              if(response.body[data].name === name){
                   this.customer = response.body[data]
              }
            }}

            
        }
      );
       },
       del(name){
             var index =0
           for(var data of this.customers){
               
               if(data.name==name){
                   this.customers.splice(index,1)
                   
                   
               }
               index=index+1;
           }
           console.log(this.customers)
           this.$http.put('https://auth-4eb1f.firebaseio.com/data.json',this.customers).then(
               function(response){
                   this.$router.push({path:'/',query:{alert:'Customer Deleted'}})
               }
           );
    },
    edit(name){
        
               
               
                   this.$router.push({path:'/edit',query:{customername:name}})
                   
                   
              
    }
  },
   
    
   created:function(){
       this.fetchCustomer(this.$route.params.name)
   }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{margin:4px}
</style>