<script setup lang="ts">
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

function onClick() {
  data.textArea2 = '';
}

function onPaste(event: any) {
  const items = (event.clipboardData || event.originalEvent.clipboardData)
    .items;

  let blob = null;

  for (const item of items) {
    if (item.type.indexOf('image') === 0) {
      blob = item.getAsFile();
    }
  }

  // load image if there is a pasted image
  if (blob !== null) {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      data.img = evt.target.result;
      data.textArea2 = 'Image pasted!';
    };
    reader.readAsDataURL(blob);
  }
}
</script>

<template>
  <div class="input">
    <p>Buenas <input type="text" v-model="data.p1" /></p>
    <textarea rows="6" v-model="data.textArea1" />
    <textarea
      rows="12"
      v-model="data.textArea2"
      @paste="onPaste"
      @click="onClick"
    />
    <input type="text" v-model="data.p2" />
    <textarea rows="12" v-model="data.textArea3" />
    <p>Cordialmente,</p>
    <input type="text" v-model="data.p3" />
  </div>
</template>

<style scoped lang="scss">
* {
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
.input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  * {
    margin: 0;
  }
}
</style>
