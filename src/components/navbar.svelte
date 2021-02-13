<script>
  import Logo from '../assets/logo.png';
  export let segment;
</script>

<nav class="p-4">
    <div class="flex flex-row">
        <div class="container flex-row flex">
            <img src={Logo} class="rounded-full w-16 shadow-lg" />
            <span class="items-center flex ml-8 text-2xl font-semibold text-gray-800">
            Thomas
        </span>
        </div>
        <div class="container flex flex-row justify-end px-4">
            <ul class="flex items-center text-2xl text-gray-800 space-x-5">
                <i class="fab fa-github"></i>
                <i class="fab fa-twitter"></i>
            </ul>
        </div>
    </div>
    <ul class="flex flex-col py-1 ml-24 space-y-1 text-gray-500">
        <li class="hover:text-gray-700 cursor-pointer">
            Présentation
        </li>
        <li class="hover:text-gray-700 cursor-pointer">
            Domaines et compétences
        </li>
        <li class="hover:text-gray-700 cursor-pointer">
            Projets
        </li>
    </ul>
</nav>
