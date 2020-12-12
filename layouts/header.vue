<template>
  <header class="py-12">
    <div class="w-3/4 mx-auto text-center">
      <h1 class="font-serif font-bold text-5xl text-gray-700">
        Thomas<br />
        Développeur web
      </h1>
      <p class="mt-4 font-light text-gray-500 text-lg">
        Jeune développeur passionné par l'informatique, la programmation ainsi que la création et conception de sites internets depuis maintenant 5 ans.
      </p>
      <div class="container mt-6 flex flex-row justify-center space-x-8">
        <button class="flex transition-colors duration-150 bg-indigo-400 hover:bg-indigo-500 text-white py-2 px-9 font-semibold rounded-full items-center">
          Découvrir
        </button>
        <button class="flex text-indigo-400 transition-colors duration-150 hover:text-indigo-500 font-semibold items-center">
          Me contacter
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '~/layouts/navbar.vue';
export default {
  name: 'header',
  components: {
    Navbar,
  }
}
</script>
