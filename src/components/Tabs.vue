<script setup>
import { ref, reactive, defineEmits, defineProps, computed, onMounted } from 'vue';

const emits = defineEmits([
    'click'
]);

const props = defineProps([
    'items'
]);

const exampleItems = ref([
    {
        title: 'EXPENSES',
        value: 'expenses'
    },
    {
        title: 'EXPENSE ITEMS',
        value: 'expense-items'
    },
    {
        title: 'PAYMENTS',
        value: 'payments'
    },
    {
        title: 'CONTACTS',
        value: 'contacts'
    },
]);

const active = ref(0);

const tabItems = computed(() => props.items || exampleItems.value);

onMounted(() => {
    console.log('tabs mounted');
});

</script>

<template>
  <div class="__tabs h-24 w-full px-6 flex border-2 border-gray-200 rounded-xl">
      <div 
      v-for="(item, index) in tabItems" 
      :key="index" 
      class="__tab-item h-full max-w-md text-center flex flex-col justify-center items-center px-8 mx-4 cursor-pointer"
      @click="(e) => { $emit('click', e); active = index; }"
      >
          <b class="tracking-widest">{{ item.title }}</b>
          <div 
          class="__indicator duration-200 absolute h-1 bg-transparent translate-y-[46px]"
          :class="active === index ? '!w-24 bg-green-600' : 'w-0 bg-gray-300'"
          ></div>
      </div>
  </div>
</template>

<style scoped>
.__indicator {
    border-radius: 8px 8px 0px 0px;
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
.__tab-item:hover .__indicator {
    @apply w-24;
}
</style>