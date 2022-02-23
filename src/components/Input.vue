<script setup>
    import { ref, reactive, defineEmits, defineProps, computed, onMounted } from 'vue';
    import { NInput } from 'naive-ui';

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
    const hoverEdit = ref(false);
    const hoverInput = ref(false);
    const saved = ref(false);
    const done = ref(false);

    function edit() {
        emit('edit');
        editing.value = true;
    }

    function save() {
        emit('save');
        saved.value = true;
        setTimeout(() => {
            saved.value = false;
        }, 1500);
        done.value = true;
        setTimeout(() => {
            done.value = false;
        }, 500);
        editing.value = false;
    }

    function cancel() {
        emit('cancel');
        editing.value = false;
        done.value = true;
        setTimeout(() => {
            done.value = false;
        }, 500);
    }
</script>

<template>
    <div 
    class="__custom-input flex mt-1 w-full" 
    @mouseenter="hoverInput = true" 
    @mouseleave="hoverInput = false"
    >
        <div 
        class="flex items-center duration-200 w-full rounded-xl border-2" 
        :class="`
            ${saved && 'ping'}
            ${(!type || type === 'text' || type === 'select') && `${ editing && 'border-[#18A058] shadow-lg shadow-green-100'}`} 
            ${(type === 'header') && `${ editing ? `border-transparent !shadow-lg shadow-green-100` : `!border-transparent` } ${ saved && 'ping'} ${ hoverEdit && '!border-gray-200' }`}
        `">

            <!-- input types -->

            <div class="__inputs w-full">

                <label 
                v-if="type !== 'header'" 
                class="absolute text-gray-600 bg-white text-xs translate-x-4 translate-y-[-8px] px-2 tracking-widest uppercase font-bold z-50"
                >{{ label || 'label' }}
                </label>

                <n-input
                v-if="!type || type === 'text'"
                v-model:value="modelValue"
                :on-input="$emit('update:modelValue', modelValue)"
                :placeholder="placeholder || 'type here'" 
                :disabled="!editing"
                :class="!editing && 'pointer-events-none'"
                class="bg-transparent outline-none w-full pl-6 py-3"
                />

                <!--n-input
                v-if="!type || type === 'select'"
                v-model:value="modelValue"
                :on-input="$emit('update:modelValue', modelValue)"
                :placeholder="placeholder || 'type here'" 
                :disabled="!editing"
                :class="!editing && 'pointer-events-none'"
                class="bg-transparent outline-none w-full pl-6 py-3"
                /-->

                <input
                v-if="type === 'header'"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :placeholder="placeholder || 'Header'" 
                :disabled="!editing"
                class="bg-transparent outline-none w-full pl-3 py-3 text-3xl font-bold placeholder:text-gray-300"
                />

            </div>

            <div 
            class="__buttons flex justify-center items-center duration-200" 
            :class="`
                ${type === 'header' ? 'opacity-100' : 'opacity-0'}
                ${hoverInput || editing || type === 'header' ? '!opacity-100' : 'opacity-0' }
            `">
                <!-- edit -->
                <button 
                @click="edit" 
                @mouseenter="hoverEdit = false" 
                @mouseleave="hoverEdit = false"
                class="__edit h-5 w-5 rounded-full translate-x-12" 
                :class="`
                    ${editing ? 'opacity-0 scale-50 pointer-events-none duration-200' : 'opacity-100 duration-100'}
                    ${done && 'delay-[250ms]'}
                `"
                >
                    <svg class="fill-gray-600 hover:fill-[#18A058]" viewBox="0 0 24 24">
                        <path d="M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z"></path>
                    </svg>
                </button>

                <!-- save -->
                <button 
                @click="save" 
                class="__save h-8 w-8 -translate-x-4 duration-200"
                :class="!editing ? 'opacity-0 !scale-50 pointer-events-none' : 'opacity-100 delay-100'"
                >
                    <svg class="fill-[#18A058] hover:opacity-60" viewBox="0 0 24 24">
                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06z"></path>
                    </svg>
                </button>

                <!-- cancel -->
                <button 
                @click="cancel" 
                class="__cancel h-8 w-8 -translate-x-4 duration-200 ml-1" 
                :class="!editing ? 'opacity-0 !scale-50 pointer-events-none delay-100' : 'opacity-100'"
                >
                    <svg class="fill-gray-400 rotate-45 hover:opacity-60" viewBox="0 0 24 24">
                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm0 5a.75.75 0 0 0-.743.648l-.007.102v3.5h-3.5a.75.75 0 0 0-.102 1.493l.102.007h3.5v3.5a.75.75 0 0 0 1.493.102l.007-.102v-3.5h3.5a.75.75 0 0 0 .102-1.493l-.102-.007h-3.5v-3.5A.75.75 0 0 0 12 7z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .__buttons {
        min-width: max-content;
    }
    .ping {
        animation: ping 1.5s ease forwards;
    }
    @keyframes ping {
        from {
            @apply bg-green-100;
        } to {
            @apply bg-white;
        }
    }
</style>