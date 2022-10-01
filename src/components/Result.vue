<script setup lang="ts">
import { ref } from 'vue';

interface PropsType {
  data: {
    p1: string;
    textArea1: string;
    textArea2: string;
    img: string;
    p2: string;
    textArea3: string;
    p3: string;
  };
}

const props = defineProps<PropsType>();
const data = props.data;

const result = ref();

function onClick() {
  console.log('👓', result.value && result.value.textContent);
}
</script>

<template>
  <div class="result" ref="result">
    <p>Buenas {{ data.p1 }},</p>

    <p>
      {{ data.textArea1 }}
    </p>

    <p v-if="!data.img">[code img]</p>
    <img v-else :src="data.img" />

    <p>{{ data.p2 }}</p>

    <p>
      {{ data.textArea3 }}
    </p>

    <p>Cordialmente,</p>
    <p>{{ data.p3 }}.</p>
  </div>
</template>

<style lang="scss" scoped>
.result {
  font-family: sans-serif;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 1rem;
  img {
    width: 100%;
  }
}
</style>
