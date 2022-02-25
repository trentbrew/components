<script setup>
import { ref, onMounted } from "vue";
import { useMessageStore } from "../stores/message";

import Input from "../components/Input.vue";
import Tabs from "../components/Tabs.vue";
import Form from "../components/Form.vue";

const store = useMessageStore();

let current = ref(0);
let message = ref(store.message);
let name = ref(null);
let phone = ref('');

const exampleItems = ref([
    {
        title: 'ITEM1',
        value: '1'
    },
    {
        title: 'ITEM2',
        value: '2'
    },
    {
        title: 'ITEM3',
        value: '3'
    },
    {
        title: 'ITEM4',
        value: '4'
    },
]);

function handleSave() {
  console.log("saved: ", message.value);
  store.saveMessage(message.value);
}

function handleCancel() {
  message.value = store.message;
}
</script>

<template>
  <div class="__home bg-gray-100">
    <ul class="absolute top-8 flex w-screen justify-center items-center font-bold">
      <li @click="current = 0" :class="current == 0 && '!opacity-100'">Input.vue</li>
      <li @click="current = 2" :class="current == 2 && '!opacity-100'">Form.vue</li>
      <li @click="current = 3" :class="current == 3 && '!opacity-100'">Tabs.vue</li>
    </ul>
    <div class="flex justify-center items-center w-screen h-screen">
      <div
        class="flex justify-center items-center bg-white shadow-xl shadow-gray-200 w-[70vw] h-[70vh] p-24 rounded-3xl duration-500"
      >

        <Input
          v-if="current == 0"
          type="text"
          v-model="message"
          label="Message"
          placeholder="placeholder"
          color="#00ff00"
          @save="handleSave"
          @cancel="handleCancel"
        />

        <Form v-if="current == 2" />
        
        <Tabs :items="exampleItems" v-if="current == 3" />

      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  @apply m-4 opacity-40 hover:opacity-70 cursor-pointer;
}
</style>
