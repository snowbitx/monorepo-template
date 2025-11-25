<template>
  <div class="user-card">
    <div>
      <h4>{{ user.name }}</h4>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '../types/user'
const user = {
  name: 'User',
  email: '测试email',
}
defineProps<{
  user: User
}>()
</script>

<style scoped>
.user-card {
  display: flex;
  gap: 12px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
