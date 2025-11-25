<template>
  <span :class="['tag', status]">
    {{ map[status] }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ status: 'pending' | 'paid' | 'shipped' }>()

const map = {
  pending: '待支付',
  paid: '已支付',
  shipped: '已发货'
}
</script>

<style scoped>
.tag { padding: 4px 8px; border-radius: 4px; }
.pending { background: orange; }
.paid { background: green; color: white; }
.shipped { background: blue; color: white; }
</style>
