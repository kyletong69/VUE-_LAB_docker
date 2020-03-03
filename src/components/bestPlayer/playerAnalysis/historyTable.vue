<template>
  <div class="historyTable">
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in nav" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in 10" :key="index">
          <td v-for="(item, index) in data" :key="index">{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'historyTable',
  props: {
    nav: Array,
    data: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.historyTable{
  table{
    width: 100%;
  }
  thead{
    background-color: #ccc;
  }
  table,th,td{
    border:1px solid #aaa;
    padding: 5px 0;
  }
  th:nth-child(1){
    width: 35%;
  }
}
</style>
