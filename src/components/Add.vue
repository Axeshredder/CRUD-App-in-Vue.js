<template>
  <div class="add container">
   <form v-on:submit = "addCustomer">
   <div class = "well">
    <h4>Personal Information</h4>
    <div class = "form-group">
    <label>Name</label>
    <input type = "text" class = "form-control" placeholder = "Name" v-model = "customer.name">
    </div>
     <div class = "form-group">
    <label>Age</label>
    <input type = "text" class = "form-control" placeholder = "Age" v-model = "customer.age">
    </div>
   </div>

    <div class = "well">
    <h4>Contact Information</h4>
    <div class = "form-group">
    <label>Email</label>
    <input type = "email" class = "form-control" placeholder = "Email" v-model = "customer.email">
    </div>
     
   </div>

    <div class = "well">
    <h4>Professional Information</h4>
    <div class = "form-group">
    <label>Profession</label>
    <input type = "text" class = "form-control" placeholder = "Profession" v-model = "customer.profession">
    </div>
     
   </div>
     <button type = "submit" class = "btn btn-primary">Add Customer</button> 
   </form>
   <br>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
      addCustomer(e){
           if(!this.customer.name||!this.customer.email||!this.customer.age||!this.customer.profession){
               console.log('fill all details')
           }
           else
           {   this.$http.post('https://auth-4eb1f.firebaseio.com/data.json',this.customer).then(
                    function(response){
                        this.$router.push({path:'/',query:{alert:'Customer Added'}})
                    }
           );
                
               e.preventDefault()
           }
           e.preventDefault()

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>