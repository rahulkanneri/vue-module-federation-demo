<template>
  <div>
    <label for="price" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <div v-if="preText" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">{{ preText }}</span>
      </div>
      <input :type="type" :name="name" :id="name" class="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    preText: {
      type: String,
      required: false,
    },
  }
}
</script>