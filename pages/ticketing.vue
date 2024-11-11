<template>
    <div style="overflow: hidden;">
        <div class="max-width-1160px mx-auto">
            <div class="columns mx-0 mb-6 pt-4 pb-6">
                <div class="column box py-6">
                    <div class="mx-4">
                        <p class="has-text-black ">
                            تیکت ها
                        </p>
                        <p class="mt-3 has-text-grey">
                            در این قسمت میتوانید تیکت ها را مشاهده کنید و به آنها پاسخ دهید.
                        </p>
                    </div>
                    <p class="has-text-grey mt-75 pr-5">
                        تعداد تیکت ها : 2
                    </p>
                    <div class="columns py-2 mx-4 my-2 has-background-info-light" style="border: 1px solid #4b78ff;
  border-radius: 10px;">
                        <div class="column has-text-centered is-1">
                            <img src="icons8-alarm-24.png" class="p-1 box has-background-info" alt="">
                        </div>
                        <div class="column">
                            <p>
                                20:12 1403/08/05
                            </p>
                            <p class="has-text-black has-text-weight-bold my-2">
                                پوریا احمدی
                            </p>

                            <p class="is-size-7">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </div>
                        <div class="column has-text-left is-1">
                            <NuxtLink to="/support">
                                <img src="icons8-arrow-left-24.png" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="columns py-2 mx-4 my-2 has-background-info-light" style="border: 1px solid #4b78ff;
  border-radius: 10px;">
                        <div class="column has-text-centered is-1">
                            <img src="icons8-alarm-24.png" class="p-1 box has-background-info" alt="">
                        </div>
                        <div class="column">
                            <p>
                                20:12 1403/08/05
                            </p>
                            <p class="has-text-black has-text-weight-bold my-2">
                                پوریا احمدی
                            </p>
                            <p class="is-size-7">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </div>
                        <div class="column has-text-left is-1">
                            <NuxtLink to="/support">
                                <img src="icons8-arrow-left-24.png" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: ' تیکتینگ',
        }
    },
}
</script>
<style>
.br-red-10 {
    border: 1px solid #fd8f8f;
    border-radius: 10px;
}
</style>