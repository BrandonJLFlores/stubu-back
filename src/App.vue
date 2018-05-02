<template>
  <div id="app">
    <div>
      <h1>ADD USER</h1>
      <label>Name:</label>
      <input type="text" v-model="name"/> <br><br>
      <label>Username:</label>
      <input type="username" v-model="user"/><br><br>
      <label>Password:</label>
      <input type="password" v-model="pass"/><br><br>
      <button @click="submitNewUser()">Add</button>
    </div>
    <div>
        <ul>
            <li v-for="personName of users"
            v-bind:key="personName['.key']">
              <div v-if="!personName.edit">
                <p>{{personName.name}}</p>
                <button @click="removeUser(personName['.key'])">Remove</button>
                <button @click="setEditUser(personName['.key'])">Edit</button>
              </div>
              <div v-else>
                <input type="text" v-model="personName.name"><br><br>
                <input type="username" v-model="personName.user"><br><br>
                <input type="password" v-model="personName.pass"><br><br>
                <button @click="saveEdit(personName)">Save</button>
                <button @click="cancelEdit(personName['.key'])">Cancel</button>
              </div>
            
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {usersRef} from './firebase';
export default {
  data () {
    return {
      name: ''
    }
  },
  firebase:{
    users:usersRef
  },
  methods:{
    submitNewUser(){
      usersRef.push({name:this.name, user:this.user, pass:this.pass, edit:false})
      this.name = ''
      this.user = ''
      this.pass = ''
    },
    removeUser(key){
      usersRef.child(key).remove();
    },
    setEditUser(key){
      usersRef.child(key).update({edit:true})
    },
    cancelEdit(key){
      usersRef.child(key).update({edit:false})
    },
    saveEdit(person){
      const key = person['.key']
      usersRef.child(key).set({name:person.name, user:person.user, pass:person.pass, edit:false})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button{
  background-color: transparent;
  border: 2px solid black;
}
</style>
