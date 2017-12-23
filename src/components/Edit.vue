<template>
  <div class="edit container">
   <form v-on:submit = "editCustomer">
   <div class = "well">
    <h4>Personal Information</h4>
    <div class = "form-group">
    <label>Name</label>
    <input type = "text" class = "form-control" placeholder = "Name" v-model = "customer.name" >
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
     <button type = "submit" class = "btn btn-primary">Edit Customer</button> 
   </form>
   <br>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      customer:{},
      customers:[]
    }
  },
  methods:{
       fetchCustomers(name){
      this.$http.get('https://auth-4eb1f.firebaseio.com/data.json').then(
        function(response){
            if(this.customers=[]){
            for(var data in response.body){
              
              this.customers.push(response.body[data])
            }

            var index =0;
                for(var datat of this.customers){
                   if(datat.name==name){
                       this.customers.splice(index,1)
                       this.customer=datat;
                       break;
                   }
                   index++;
                }

                console.log(this.customers)
             
            }

           
        }
      );
    
    },

      editCustomer(e){
           if(!this.customer.name||!this.customer.email||!this.customer.age||!this.customer.profession){
               console.log('fill all details')
           }
           else
           {    e.preventDefault();
                this.customers.push(this.customer);
                console.log(this.customer)
               this.$http.put('https://auth-4eb1f.firebaseio.com/data.json',this.customers).then(
                    function(response){
                        
                        this.$router.replace({path:'/',query:{alert:'Customer Edited'}})
                    }
           );
                
               e.preventDefault()
           }
           e.preventDefault()

      }
  },
   created:function(){
    var name=this.$route.query.customername;
    this.fetchCustomers(name);
    
  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>