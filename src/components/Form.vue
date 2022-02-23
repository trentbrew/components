<script setup>
    import { ref, reactive, computed, onMounted } from 'vue';
    import { useMessageStore } from '../stores/message';

    import Input from '../components/Input.vue';

    const store = useMessageStore();
</script>

<template>
    <div class="_form block">
        <div class="grid grid-cols-12 gap-4 mt-8">

            <div class="col-span-6"><Input label="Address" /></div>
            <div class="col-span-6"><Input label="Address 2" /></div>

            <div class="col-span-4"><Input label="City" /></div>
            <div class="col-span-4"><Input label="State" /></div>
            <div class="col-span-4"><Input label="Zip Code" /></div>

            <div class="col-span-4"><Input label="Email" placeholder="" /></div>
            <div class="col-span-4"><Input label="Phone" placeholder="(###) ### ####" /></div>
            <div class="col-span-4"><Input label="Fax" placeholder="" /></div>

            <div class="col-span-6"><Input label="DIN" /></div>
            <div class="col-span-6"><Input label="Tax ID" /></div>

            <div class="col-span-12"><Input label="Vendor Category" /></div>

        </div>
    </div>
</template>

<style lang="scss">

</style>