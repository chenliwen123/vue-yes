<template>
  <div id="app">
    <ui_input></ui_input>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import uilianxi from './components/uilianxi'
import uibuju from './components/uibuju'
import uibutton from './components/uibutton'
import zbvideo from './components/zbvideo'
import ui_input from './components/ui_input'
export default {
  name: 'App',
  components: { HelloWorld,uilianxi,uibuju,uibutton,zbvideo,ui_input},
  template:{

  },
}
</script>

<style>
  html,body{overflow-x:hidden;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;}
</style>
