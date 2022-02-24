<script setup>
  import { onMounted } from 'vue';
  import { NConfigProvider } from 'naive-ui';

  const themeOverrides = {
    Input: {
      color: "rgba(0,0,0,0)",
      colorDisabled: "rgba(0,0,0,0)",
      border: "none",
      borderHover: "none",
      borderDisabled: "none",
      borderFocus: "none",
      boxShadowFocus: "none",
      borderRadius: "64px",
      paddingSmall: "0px",
      paddingMedium: "0px",
      paddingLarge: "0px",
      placeholderColor: "#bdbdbd",
      fontSizeMedium: "18px",
    },
    Select: {
      peers: {
        InternalSelection: {
          color: "rgba(0,0,0,0)",
          colorDisabled: "rgba(0,0,0,0)",
          border: "none",
          borderHover: "none",
          borderDisabled: "none",
          borderFocus: "none",
          borderRadius: "6px",
          boxShadowFocus: "none",
          paddingTiny: "0px",
          paddingSmall: "0px",
          paddingMedium: "0px",
          paddingLarge: "0px",
          placeholderColor: "#bdbdbd",
          fontSizeMedium: "18px",
        }
      }
    },
  };

  onMounted(() => {
    console.log('app mounted');
  });
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>