<template>
  <div class="alert container">
    <div class="alert alert-danger alert-dismissable">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>{{message}}</strong>
</div>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props:['message'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>