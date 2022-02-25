<script setup>
import { ref, reactive, defineEmits, defineProps, computed, onMounted } from "vue";

const props = defineProps(["value", "stringKey", "rules", "mask"]);

const data = ref({
  email: null,
  phone: null,
});

const messages = ref([
  {
    email: 'E-mail'
  },
  {
    phone: 'Phone'
  }
]);

onMounted(() => {
  console.log('mounted masked input');
});


</script>

<template>
  <div>
    <label class="label" v-text="messages[stringKey]"></label>
    <p class="control has-icon has-icon-right">
      <input
        ref="input"
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        v-mask="mask"
        v-validate="rules"
        :name="stringKey"
        :id="stringKey"
        class="input"
        :class="{ 'is-danger': errors.has(stringKey) }"
      />
      <span v-if="errors.has(stringKey)" class="icon is-small">
        <i class="fa fa-warning"></i>
      </span>
      <span class="help is-danger" v-text="errors.first(stringKey)"></span>
    </p>
  </div>
</template>
