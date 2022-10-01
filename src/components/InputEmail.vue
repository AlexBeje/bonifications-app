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
      data.task.image = evt.target.result;
    };
    reader.readAsDataURL(blob);
  }
}
</script>

<template>
  <div class="input">
    <p class="flex gap-1">
      <span>Buenas</span>
      <input
        type="text"
        v-model="data.receiver"
        class="w-full"
        placeholder="Receiver"
      />
    </p>
    <textarea
      rows="14"
      v-model="data.task.description"
      placeholder="Task description"
    />
    <input @paste="onPaste" placeholder="Paste the code image" />
    <input type="text" v-model="data.task.question" placeholder="Question" />
    <textarea rows="14" v-model="data.task.solution" placeholder="Solution" />
    <p>Cordialmente,</p>
    <input type="text" v-model="data.sender" placeholder="Sender" />
  </div>
</template>

<style scoped lang="scss">
* {
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 800px;
  width: 100%;
  * {
    margin: 0;
  }
}
</style>
