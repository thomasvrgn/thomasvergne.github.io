<script>
  import Logo from '../assets/logo.png';
</script>

<nav class="p-4 lg:p-8 lg:px-0">
    <div class="flex flex-row lg:justify-center lg:w-2/3 lg:mx-auto">
        <div class="container flex-row flex flex-initial w-32 lg:justify-center">
            <img src={Logo} class="rounded-full w-16 h-16 shadow-lg" alt="Thomas's logo" />
        </div>
        <div class="container flex flex-col flex-auto mt-4 lg:mt-0 lg:flex-row px-4 lg:pr-6">
            <span class="items-center flex text-2xl font-semibold text-gray-800">
                Thomas Vergne
            </span>
            <ul class="flex flex-col py-4 space-y-1 text-gray-500 lg:flex-row lg:space-y-0 lg:py-0 lg:items-center lg:justify-end lg:flex-auto lg:space-x-6">
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
        </div>
        <div class="container flex flex-row justify-end px-4 flex-initial w-1/4 lg:w-32 lg:px-0 lg:px-0 lg:justify-center">
            <ul class="flex mt-5 lg:mt-0 lg:items-center text-2xl text-gray-800 space-x-5">
                <i class="fab fa-github"></i>
                <i class="fab fa-twitter text-blue-400"></i>
            </ul>
        </div>
    </div>
</nav>
