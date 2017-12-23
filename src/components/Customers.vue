<template>
  <div class="customers container">
   <h2 class = "page-header">Manage Customers</h2>
   <input type = "text" placeholder = "Search" v-model="search" class = "form-control">
   <Alert v-if = "alert" v-bind:message = "alert"/>
   <table class = "table table-striped">
   <thead>
   <tr>
     <th>Name</th>
     <th>Age</th>
     <th>Email</th>
     <th>Profession</th>
   </tr>
   </thead>
   <tbody>
     <tr v-for = "customer in filteredItems">
       <td>{{customer.name}}</td>
       <td>{{customer.age}}</td>
       <td>{{customer.email}}</td>
       <td>{{customer.profession}}</td>
       <td><router-link class = "btn btn-danger" v-bind:to = "'/details/'+customer.name ">View</router-link></td>
     </tr>
   </tbody>
   </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:'',
      search:''
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get('https://auth-4eb1f.firebaseio.com/data.json').then(
        function(response){
            if(this.customers=[]){
            for(var data in response.body){
              
              this.customers.push(response.body[data])
            }}

           
        }
      );
    }
  },
  created:function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers();
  },
  updated:function(){
    this.fetchCustomers();
  },
  components:{
    Alert
  },
  computed: {
    filteredItems() {
      return this.customers.filter(item => {
         return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
