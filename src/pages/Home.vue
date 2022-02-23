<script setup>
    import { ref, onMounted } from 'vue';
    import { useMessageStore } from '../stores/message';

    import Input from '../components/Input.vue';
    import Form from '../components/Form.vue';
    import TitleInput from '../components/TitleInput.vue';

    const store = useMessageStore();

    let current = ref(0);
    let message = ref(store.message);
    let name = ref(null);

    function handleSave() {
        console.log('saved: ', message.value);
        store.saveMessage(message.value); 
    }

    function handleCancel() {
        message.value = store.message;
    }
</script>

<template>
    <div class="__home bg-gray-100">
        <ul class="absolute top-8 flex w-screen justify-center items-center">
            <li @click="current = 0" :class="current == 0 && '!opacity-100'">Input.vue</li>
            <li @click="current = 2" :class="current == 2 && '!opacity-100'">TitleInput.vue</li>
            <li @click="current = 1" :class="current == 1 && '!opacity-100'">Form.vue</li>
        </ul>
        <div class="flex justify-center items-center w-screen h-screen">
            <div class="flex justify-center items-center bg-white shadow-xl shadow-gray-200 w-[60vw] h-[60vh] p-32 rounded-3xl">

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

                <TitleInput 
                v-if="current == 2" 
                type="text"
                v-model="name"
                placeholder="Company Name"
                />

                <Form v-if="current == 1" />

            </div>
        </div>
    </div>
</template>

<style scoped>
    li {
        @apply m-4 opacity-40 hover:opacity-70 cursor-pointer;
    }
</style>
