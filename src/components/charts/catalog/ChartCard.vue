<script setup>
defineProps({
  title: { type: String, required: true },
  description: String,
})
</script>

<template>
  <div class="bg-white rounded-xl border border-slate-200 p-5 flex flex-col gap-4">
    <div>
      <h3 class="text-sm font-semibold text-slate-800">{{ title }}</h3>
      <p v-if="description" class="text-xs text-slate-500 mt-1 leading-relaxed">{{ description }}</p>
    </div>
    <slot />
  </div>
</template>
