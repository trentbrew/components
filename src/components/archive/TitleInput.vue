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
        'placeholder',
        'color'
    ]);

    const editing = ref(false);
    const hoverEdit = ref(false);
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
        class="flex items-center duration-[300ms] border-transparent w-full rounded-xl" 
        :class="`
            ${ editing && `border-green-600 !shadow-lg !shadow-gray-200`} 
            ${ hoverEdit && `shadow shadow-gray-300`} 
            ${ saved && 'ping' }
        `"
        >

            <!-- input -->

            <div class="w-full">
                <input
                type="text"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :placeholder="placeholder || 'type here'" 
                :disabled="!editing"
                class="bg-transparent outline-none w-full py-4 pl-6 text-3xl font-medium"
                />
            </div>

            <!-- edit -->

            <button 
            @click="edit" 
            class="h-5 w-5 rounded-full opacity-100 duration-200" 
            :class="editing ? 'opacity-0 scale-50 pointer-events-none w-0 -translate-x-2' : 'opacity-100 -translate-x-4 delay-200'"
            >
                <svg class="fill-gray-600 hover:fill-[#18A058]" viewBox="0 0 24 24">
                    <path d="M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z"></path>
                </svg>
            </button>

            <!-- save -->

            <button 
            @click="save" 
            class="h-8 w-8 -translate-x-4 duration-200"
            :class="!editing ? 'opacity-0 !scale-50 pointer-events-none w-0' : 'opacity-100 delay-100'"
            >
                <svg class="fill-[#18A058] hover:opacity-60" viewBox="0 0 24 24">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06z"></path>
                </svg>
            </button>

            <!-- cancel -->

            <button 
            @click="cancel" 
            class="h-8 w-8 -translate-x-4 duration-200 ml-1" 
            :class="!editing ? 'opacity-0 !scale-50 pointer-events-none w-0 delay-100' : 'opacity-100'"
            >
                <svg class="fill-gray-400 rotate-45 hover:opacity-60" viewBox="0 0 24 24">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm0 5a.75.75 0 0 0-.743.648l-.007.102v3.5h-3.5a.75.75 0 0 0-.102 1.493l.102.007h3.5v3.5a.75.75 0 0 0 1.493.102l.007-.102v-3.5h3.5a.75.75 0 0 0 .102-1.493l-.102-.007h-3.5v-3.5A.75.75 0 0 0 12 7z"></path>
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