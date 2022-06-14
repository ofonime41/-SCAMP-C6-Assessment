<template>
    <div class="mt-10">
        <img class="hidden md:block rounded-2xl cursor-pointer " :src="activeImg" alt="sneaker" @click="modalOpen()">

        <img class="block sm:hidden" :src="images[index]" alt="sneaker" @click="modalOpen()">

        <div class="text-white flex my-auto">
            <button class="absolute top-72 left-1" @click="prevImg(index)"><i style="font-size:50px"
                    class="fa">&#xf190;</i></button>

            <button class="absolute top-72 right-1" @click="nextImg(index)"><i style="font-size:50px"
                    class="fa">&#xf18e;</i></button>
        </div>

        <div class="hidden md:grid grid-cols-4 gap-5 my-5">
            <div class="rounded-2xl hover:border-2 border-primary" v-for="img, index in images" :key="index">
                <img :src="img" class="rounded-xl hover:opacity-70 " alt="sneaker" @mouseover="selectImg(index)">
            </div>

        </div>





        <!-- Modal-->


        <div v-if="visibility"
            class="hidden md:block flex justify-center fixed top-0 left-0  bg-[rgba(0,0,0,0.7)] w-full h-full  ">
            <div class="bg-transparent w-2/4 m-auto px-14 py-10 z-20 relative ">

                <div class="text-white" v-for="img, index in images" :key="index">
                    <button class="absolute top-1/2 left-16"><i style="font-size:50px" class="fa "
                            @click="prevImg(index)">&#xf190;</i></button>
                    <!-- <button class="left-arrow "><i style="font-size:40px" class="fa ">&#xf190;</i></button> -->
                    <button class="absolute top-1/2 right-16" @click="nextImg(index)"><i style="font-size:50px"
                            class="fa">&#xf18e;</i></button>
                </div>

                <div class="">
                    <span>
                        <img class="md:rounded-2xl w-full h-full " :src="images[index]" alt="sneaker">
                    </span>

                    <button class="absolute top-5  right-10 text-white" @click="modalClose()"><i style=" font-size:40px"
                            class="fa">&#xf00d;</i></button>
                </div>


            </div>
        </div>







    </div>




</template>

<script>
export default {
    name: 'LightBoxComponent',
    data() {
        return {
            visibility: false,
            showImg: true,
            index: 0,
            activeImg: require('@/assets/img/sneaker1.jpg'),
            images: [
                require('@/assets/img/sneaker1.jpg'),
                require('@/assets/img/sneaker2.jpg'),
                require('@/assets/img/sneaker3.jpg'),
                require('@/assets/img/sneaker4.jpg'),
            ]

        }
    },

    methods: {
        selectImg(index) {
            this.activeImg = this.images[index]

        },

        modalOpen() {
            this.visibility = true;
        },

        modalClose() {
            this.visibility = false;
            this.index = 0

        },

        checkNextImg() {
            return this.index + 1 < this.images.length

        },
        checkprevImg() {
            return this.index - 1 >= 0

        },
        nextImg() {

            if (this.checkNextImg()) {
                return this.index++
            } else {
                this.index = 0;
            }
        },

        prevImg() {
            if (this.checkprevImg()) {
                return this.index--
            } else {
                this.index = this.images.length - 1
            }
        }

    }

}
</script>

<style>
</style>