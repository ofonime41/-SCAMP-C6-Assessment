<template>
    <main>
        <div class="grid md:grid-cols-2 gap-10 md:gap-16 lg:mx-10">

            <LightBoxComponent />



            <div class="text-slate-800 mt-10 lg:mt-24 mx-10 md:mx-0 md:pl-10">
                <div class="mb-6">
                    <p class="uppercase text-sm tracking-widest text-primary font-bold mb-4">sneaker
                        company
                    </p>
                    <h1 class="text-4xl font-bold  text-slate-800 mb-4">Fall Limited Edition Sneakers</h1>

                    <p class="mb-4 mt-6 font-lighter text-sm leading-relaxed text-justify">These low-profile sneakers
                        are your perfect
                        casual wear companion.
                        casual wear companion.
                        a durable
                        rubber outer
                        sole, they’ll withstand everything the weather can offer.</p>
                </div>

                <div class=" flex md:block justify-between my-10 md:my-2">
                    <ul class="flex space-x-5">
                        <li class="text-2xl font-bold">$125.00</li>
                        <li class="text-primary text-sm bg-orange-100 px-2 py-1 rounded">50%</li>
                    </ul>
                    <ul>
                        <li class=" text-slate-400 text-sm"><s>$250.00 </s></li>
                    </ul>

                </div>

                <div class="lg:grid lg:grid-cols-3 my-10 gap-5 ">
                    <div class=" bg-slate-200 border-1 p-3 rounded-md text-justify mb-5 shadow-md shadow-slate-500">

                        <ul class="flex justify-between text-center">
                            <li><button @click="minus" class="pr-2"><i style="font-size:14px"
                                        class="fa text-primary">&#xf068;</i></button></li>
                            <li> <input class="w-3/4  focus:ring-0   border-0 text-center bg-slate-200 py-0"
                                    type="number" min="0" :value="counter">

                            </li>
                            <li class="text-left"> <button @click="add" class="pl-2"><i style='font-size:14px'
                                        class='fa text-primary'>&#xf067;</i></button></li>
                        </ul>
                    </div>

                    <div class="col-span-2 ">
                        <button class="cart-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-cart3" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span class="ml-3"> Add to cart</span>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    </main>


</template>

<script>
import LightBoxComponent from './LightBoxComponent.vue'
export default {
    name: 'MainComponent',
    data() {
        return {
            counter: 0,
            images: [
                require('@/assets/img/sneaker1.jpg'),
                // '@/assets/img/sneaker2.jpg',
                // '@/assets/img/sneaker3.jpg',
                // '@/assets/img/sneaker4.jpg',
            ]
        }
    },

    methods: {
        //increment
        add() {
            this.counter++


        },

        minus() {
            if (this.counter < 1) {
                this.counter = 0
            } else {
                this.counter--
            }


        }
    },
    components: {
        LightBoxComponent
    }
}
</script>

<style>
</style>