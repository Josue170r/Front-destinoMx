<template>
  <div v-if="showModal" class="fixed inset-0 overflow-y-auto z-50">
    <div
      class="flex items-center items-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 w-full justify-center"
    >
      <div class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-4">Lugares cerca de ti...</h2>
          <ul>
            <li v-for="(result, index) in searchResults" :key="index">
              {{ result }}
            </li>
          </ul>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            @click="closeModal"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-300 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    searchResults: Array,
  },
  methods: {
    closeModal() {
      this.$emit("close")
    },
  },
}
</script>
