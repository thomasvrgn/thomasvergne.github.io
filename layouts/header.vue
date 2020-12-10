<template>
  <main class="flex flex-col lg:min-h-screen">
    <header class="bg-white flex flex-auto" style="height: 450px">
      <Navbar />
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
