<script setup lang="ts">
import { reactive } from 'vue';
import InputEmail from './components/InputEmail.vue';
import ResultEmail from './components/ResultEmail.vue';

const data = reactive({
  receiver: 'Juanjo',
  task: {
    description:
      'Estoy con la tarea ZZ-1671 del proyecto Nueva Zona Zurich, y he visto que ahora mismo en el código hay un método onConstructionYearChange() que se ejecuta cuando se cambia el año de construcción, pero lo que hace es reasignar el valor mínimo de cada uno de los otros años de reformas.',
    image: '',
    question: '¿La pregunta es, este comportamiento es el correcto?',
    solution:
      'Lo que entiendo de la tarea es que cuando el año de construcción se actualice, se tendría que ejecutar de nuevo la validación de los años de reformas para verificar que realmente el año de construcción es menor que los años de reformas.',
  },
  sender: 'Alexandru Bejenaru',
});
</script>

<template>
  <div class="app">
    <h1>Bonifications Email</h1>
    <div class="container">
      <InputEmail :data="data" />
      <ResultEmail :data="data" />
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
.container {
  display: flex;
  gap: 2rem;
  margin: 2rem;
  width: 90%;
  & > div {
    width: 50%;
  }
}
</style>
