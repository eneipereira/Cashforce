<script setup>
  import { ref } from 'vue';
  
  const headers = ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS'];
  
  const status = [
    'Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado'
  ];

  const orders = ref([]);

  fetch('http://localhost:3001/api/invoice')
  .then(response => response.json())
  .then(data => {
    orders.value = data
  })

</script>
<template>
  <div class="conteudo">
    <div class="header"></div>
    <div class="table-header">
      <h2>
        <img src="../assets/handshake-blue.svg" alt="handshake">
          <span>Notas fiscais</span>
      </h2>
      <span>Visualize as notas fiscais que você tem.</span>
    </div>
    <table>
      <thead>
        <tr v-for="header in headers" :key="header">
          <th>{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{order.orderNumber}}</td>
          <td>{{order.buyer.name}}</td>
          <td>{{order.provider.name}}</td>
          <td>{{new Date(order.emissionDate).toLocaleDateString('pt-BR')}}</td>
          <td class="green">{{Number(order.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}</td>
          <td class="green">{{status[Number(order.orderStatusBuyer)]}}</td>
          <td>
            <button class="">Dados do cedente</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  @import "../styles/invoicetable.css";
</style>