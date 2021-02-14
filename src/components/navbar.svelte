<script>
  import Logo from '../assets/logo.png';
</script>
<div class="absolute right-0 w-64 lg:w-2/6 transform scale-150 z-0 -top-24">
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
        <path id="blob" d="M450,285.5Q446,321,432.5,356.5Q419,392,389.5,416.5Q360,441,324,453Q288,465,248,478Q208,491,168.5,475.5Q129,460,96,433.5Q63,407,56.5,365Q50,323,30.5,286.5Q11,250,30.5,213.5Q50,177,70,146.5Q90,116,114,85.5Q138,55,174,38.5Q210,22,251,16Q292,10,331,26.5Q370,43,398.5,72Q427,101,454,133.5Q481,166,467.5,208Q454,250,450,285.5Z" fill="#f5f5f5"></path>
    </svg>
</div>
<nav class="p-4 lg:p-8 lg:px-0 z-10 relative">
    <div class="flex flex-row lg:justify-center xl:w-2/3 lg:w-5/6 lg:mx-auto">
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
