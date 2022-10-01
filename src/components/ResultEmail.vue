<script setup lang="ts">
interface PropsType {
  data: {
    receiver: string;
    task: {
      description: string;
      image: string;
      question: string;
      solution: string;
    };
    sender: string;
  };
}

const props = defineProps<PropsType>();
const data = props.data;
</script>

<template>
  <div class="result">
    <p>Buenas {{ data.receiver }},</p>

    <p>
      {{ data.task.description }}
    </p>

    <img v-if="data.task.image" :src="data.task.image" />

    <p>{{ data.task.question }}</p>

    <p>
      {{ data.task.solution }}
    </p>

    <p>Cordialmente,</p>
    <p>{{ data.sender }}.</p>
  </div>
</template>

<style lang="scss" scoped>
.result {
  background-color: white;
  border-radius: 8px;
  color: black;
  font-family: sans-serif;
  max-height: 800px;
  overflow: auto;
  padding: 0 1rem;
  img {
    width: 100%;
  }
}
</style>
