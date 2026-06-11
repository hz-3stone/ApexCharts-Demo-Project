<script setup>
defineProps({
  qNumber: { type: String, required: true },
  title: { type: String, required: true },
  note: String,
})
</script>

<template>
  <section class="bg-white rounded-xl border border-slate-200 p-6">
    <header class="mb-6">
      <span class="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
        {{ qNumber }}
      </span>
      <h2 class="text-base font-semibold text-slate-900 mt-2">{{ title }}</h2>
      <p v-if="note" class="text-xs text-slate-500 mt-1.5 leading-relaxed">{{ note }}</p>
    </header>
    <slot />
  </section>
</template>
