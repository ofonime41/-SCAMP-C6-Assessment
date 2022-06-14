<template>

    <nav class="flex justify-between bg-white border-gray-200 px-4 sm:px-4 pt-4 rounded dark:bg-gray-800">
        <div class="flex flex-wrap items-center">


            <div class="flex">
                <button data-collapse-toggle="mobile-menu-2" type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <a href="#" class="mr-8 ml-3">
                <h1 class="font-semibold text-3xl font-popin text-slate-800 tracking-tighter hover:nav-hover">
                    sneakers</h1>
            </a>



            <div class="hidden justify-between  w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
                    <li>
                        <a href="#" class="nav-item  md:hover:nav-hover" aria-current="page">Collections</a>
                    </li>
                    <li>
                        <a href="#" class="nav-item md:hover:nav-hover" aria-current=" page">Men</a>
                    </li>
                    <li>
                        <a href="#" class="nav-item md:hover:nav-hover" aria-current=" page">Women</a>
                    </li>
                    <li>
                        <a href="#" class="nav-item md:hover:nav-hover" aria-current=" page">About</a>
                    </li>
                    <li>
                        <a href="#" class="nav-item md:hover:nav-hover" aria-current=" page">Contact</a>
                    </li>

                </ul>
            </div>

        </div>
        <div class="mr-3 text-sm">
            <ul class="flex space-x-10 mt-2">
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-cart3" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg></a></li>
                <li class=" "><a href="" class=""><img class=" hover:animate-bounce  rounded-full w-10 h-10 -mt-2"
                            src="@/assets/img/headshot.jpg" alt=""></a>
                </li>

            </ul>
        </div>
    </nav>
    <div class="hidden md:block border border-gray-200  mt-10 "></div>



</template>
 
<script>

export default {
    name: 'NavBar'

}
</script>

<style>
</style>