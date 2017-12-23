<template>
 <div id = "app">
     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Customer Manager</a>
    </div>
    <ul class="nav navbar-nav">
      <li ><router-link to = "/">Customers</router-link></li>
      <li><router-link to = "/about">About</router-link></li>
     
      
    </ul>
    <ul class = "nav navbar-nav navbar-right">
       <li><router-link to = "/add">Add</router-link></li>
    </ul>
  </div>
</nav>
    <router-view></router-view>
 </div>
 </template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
