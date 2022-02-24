<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useMessageStore } from '../stores/message';

import Input from './Input.vue';

const store = useMessageStore();

const opts = ref([
    {
        label: 'Option 1',
        value: 'sushi',
    },
    {
        label: 'Option 2',
        value: 'pizza',
    },
    {
        label: 'Option 3',
        value: 'soup',
    },
    {
        label: 'Option 4',
        value: 'sandwich',
    },
    {
        label: 'Option 5',
        value: 'salad',
    },
]);

</script>

<template>

<!--


                    style="width: 220px"
                    class=""
                    placeholder="Select Vendor Category"
                    :options="vendorCategoryOptions"
                    v-model:value="form.vendor_category_id"
                    @focus="currentActiveField = 'vendor_category_id'"
                    filterable



-->

    <div class="__form block">

        <h3 class="font-bold translate-x-4 mb-4">VENDOR</h3>

        <Input type="header" placeholder="Company Name" />

        <div class="grid grid-cols-12 gap-4 mt-12">

            <div class="col-span-6"><Input label="Address" /></div>
            <div class="col-span-6"><Input label="Address 2" /></div>

            <div class="col-span-4"><Input label="City" /></div>
            <div class="col-span-4"><Input type="select" :options="opts" label="State" placeholder="Missouri" /></div>
            <div class="col-span-4"><Input label="Zip Code" /></div>

            <div class="col-span-4"><Input label="Email" placeholder="" /></div>
            <div class="col-span-4"><Input label="Phone" placeholder="(###) ### ####" /></div>
            <div class="col-span-4"><Input label="Fax" placeholder="" /></div>

            <div class="col-span-4"><Input label="DIN" /></div>
            <div class="col-span-4"><Input label="Tax ID" /></div>
            <div class="col-span-4"><Input type="select" :options="opts" label="Vendor Category" /></div>

        </div>
    </div>
</template>

<style lang="scss">

</style>