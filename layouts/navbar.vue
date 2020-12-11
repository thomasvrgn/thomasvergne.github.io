<template>
  <nav class="p-4 py-6 flex flex-row w-full h-24 container mx-auto">
    <span class="flex items-center">
      <img src="~/assets/signature.png" alt="" />
    </span>
    <ul class="flex pr-4 flex-auto flex-row space-x-8 lg:space-x-16 justify-end items-center font-semibold text-indigo-900">
      <li>
        <a href="">
          Compétences
        </a>
      </li>
      <li>
        <a href="">
          Expériences
        </a>
      </li>
      <li>
        <a href="">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>
