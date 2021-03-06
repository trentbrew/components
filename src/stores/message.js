import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
    state: () => {
        return { message: 'Hello world' };
    },
    actions: {
        saveMessage(val) {
            this.message = val;
        }
    },
});

