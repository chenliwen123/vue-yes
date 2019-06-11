<template>
  <div id="app">
    <UItable></UItable>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import uilianxi from './components/uilianxi'
import uibuju from './components/uibuju'
import uibutton from './components/uibutton'
import zbvideo from './components/zbvideo'
import ui_input from './components/ui_input'
import ui_select from './components/ui_select'
import ui_jisu from './components/ui_jisu'
import uiswitch from './components/uiswitch'
import uislider from './components/uislider'
import uirate from './components/uirate'
import uicolorpicker from './components/uicolorpicker'
import uifrom from './components/uifrom'
import formyz from './components/formyz'
import UItable from './components/UItable'
export default {
  name: 'App',
  components: { HelloWorld,uilianxi,uibuju,uibutton,zbvideo,ui_input,ui_jisu,ui_select,uiswitch,uislider,uirate,uicolorpicker,uifrom,formyz,UItable},
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
