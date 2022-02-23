import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
    state: () => {
        return { message: 'some text' };
    },
    actions: {
        saveMessage(val) {
            this.message = val;
        }
    },
});

