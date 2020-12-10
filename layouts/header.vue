<template>
  <main class="flex flex-col lg:min-h-screen">
    <header class="bg-white flex flex-auto flex-col" style="height: 450px">
      <Navbar />
      <div class="container mx-auto py-4 flex flex-col items-center justify-center flex-auto h-full px-8">
        <div class="flex justify-center flex-col">
          <h1 class="text-3xl font-black text-indigo-900">
            <span class="text-4xl">Thomas</span><br />
            Développeur Web Front-end
          </h1>
          <p class="text-xl mt-4 text-gray-600 text-opacity-75 lg:w-1/2">
            Je suis développeur web et concepteur d'interfaces graphiques depuis maintenant 5 ans. Je prends beaucoup de plaisir à exercer cette passion.
          </p>
          <button class="flex justify-center mt-4 border border-indigo-400 flex-initial w-44 py-2 rounded-md text-indigo-400 focus:outline-none hover:bg-indigo-400 hover:text-white">
            En découvrir plus
          </button>
        </div>
      </div>
    </header>
    <section class="bg-blue-400 flex flex-col lg:flex-row lg:flex-grow-0 lg:h-64">
      <article class="h-64 bg-gray-200 lg:w-1/3">
        <img src="~/assets/entasia.png" class="pt-12 px-8 object-cover object-top h-full w-full"  alt=""/>
      </article>
      <article class="h-64 bg-gray-50 lg:w-1/3">
        <img src="~/assets/palamazon.png" class="pt-12 px-8 object-cover object-top h-full w-full"  alt=""/>
      </article>
      <article class="h-64 bg-gray-100 lg:w-1/3">
        <img src="~/assets/graphix.png" class="pt-12 px-8 object-cover object-top h-full w-full"  alt=""/>
      </article>
    </section>
  </main>
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
