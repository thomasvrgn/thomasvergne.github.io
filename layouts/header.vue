<template>
  <main class="flex flex-col lg:min-h-screen">
    <header class="bg-red-400 flex flex-auto" style="height: 450px">
      Header
    </header>
    <section class="bg-blue-400 flex flex-col lg:flex-row lg:flex-grow-0 lg:h-64">
      <article class="h-64 bg-blue-400 lg:w-1/3">
        test
      </article>
      <article class="h-64 bg-blue-400 lg:w-1/3">
        test
      </article>
      <article class="h-64 bg-blue-400 lg:w-1/3">
        test
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'header'
}
</script>
