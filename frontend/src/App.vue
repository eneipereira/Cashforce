<script setup>
import SideBarVue from './components/SideBar.vue';
import InvoiceTableVue from './components/InvoiceTable.vue';
</script>

<template>
  <div class="propostas">
    <SideBarVue/>
    <InvoiceTableVue/>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }
  .propostas {
    display: flex;
    width: 1560px;
    height: 900px;
  }
</style>
