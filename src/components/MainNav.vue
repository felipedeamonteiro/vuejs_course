<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex h-full px-8 mx-auto border-b border-solid flex-nowrap border-brand-gray-1"
      >
        <a v-bind:href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Bobo Carrers',
      url: 'https://careers.google.com',
    };
  },
};
</script>
