<script setup>
    import { ref, reactive, defineEmits, defineProps, computed, onMounted } from 'vue';

    const emit = defineEmits([
        'update:modelValue',
        'edit',
        'save',
        'cancel'
    ]);

    const props = defineProps([
        'modelValue',
        'type',
        'label',
        'placeholder',
        'color'
    ]);

    const editing = ref(false);
    const saved = ref(false);

    function edit() {
        emit('edit');
        editing.value = true;
    }

    function save() {
        emit('save');
        saved.value = true;
        setTimeout(() => {
            saved.value = false;
        }, 1000);
        editing.value = false;
    }

    function cancel() {
        emit('cancel');
        editing.value = false;
    }
</script>

<template>
    <div class="__input flex w-full">

        <div 
        class="flex items-center duration-200 border-2 w-full rounded-xl" 
        :class="`${editing && `border-green-600 shadow-lg shadow-sky-100`} ${saved && 'ping'}`"
        >
            <div class="w-full">
                <label class="absolute bg-white text-xs translate-x-4 translate-y-[-10px] px-2">
                    {{ label || 'label' }}
                </label>
                <input
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :placeholder="placeholder || 'type here'" 
                :type="type || 'text'"
                :disabled="!editing"
                class="bg-transparent outline-none w-full py-4 pl-6"
                />
            </div>
            <!-- edit -->
            <button 
            @click="edit" 
            class="h-5 w-5 rounded-full opacity-100 duration-200 translate-x-10" 
            :class="editing ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 delay-300'"
            >
                <svg class="hover:fill-green-600" viewBox="0 0 24 24">
                    <path d="M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z"></path>
                </svg>
            </button>
            <!-- save -->
            <button 
            @click="save" 
            class="h-8 w-8 -translate-x-4 duration-200 hover:scale-[1.1]" 
            :class="!editing ? 'opacity-0 !scale-50 pointer-events-none' : 'opacity-100 delay-100'"
            >
                <svg class="fill-green-600" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z"></path>
                </svg>
            </button>
            <!-- cancel -->
            <button 
            @click="cancel" 
            class="h-8 w-8 -translate-x-4 duration-200 ml-1 hover:scale-[1.1]" 
            :class="!editing ? 'opacity-0 !scale-50 pointer-events-none delay-100' : 'opacity-50'"
            >
                <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.59-13L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<style>
    @keyframes ping {
        from {
            @apply bg-green-50;
        } to {
            @apply bg-white;
        }
    }
    .ping {
        animation: ping 1s ease forwards;
    }
</style>