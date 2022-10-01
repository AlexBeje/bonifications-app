<script setup lang="ts">
import { reactive } from 'vue';
import Input from './components/Input.vue';
import Result from './components/Result.vue';

const data = reactive({
  p1: 'Juanjo',
  textArea1:
    'Estoy con la tarea ZZ-1671 del proyecto Nueva Zona Zurich, y he visto que ahora mismo en el código hay un método onConstructionYearChange() que se ejecuta cuando se cambia el año de construcción, pero lo que hace es reasignar el valor mínimo de cada uno de los otros años de reformas.',
  textArea2: '[code img]',
  img: '',
  p2: '¿La pregunta es, este comportamiento es el correcto?',
  textArea3:
    'Lo que entiendo de la tarea es que cuando el año de construcción se actualice, se tendría que ejecutar de nuevo la validación de los años de reformas para verificar que realmente el año de construcción es menor que los años de reformas.',
  p3: 'Alexandru Bejenaru',
});
</script>

<template>
  <div class="app">
    <h1>Bonifications Email</h1>
    <div class="container">
      <Input :data="data" />
      <Result :data="data" />
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  padding: 2rem;
  gap: 2rem;
  & > div {
    width: 50%;
  }
}
</style>
