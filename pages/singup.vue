<template>
    <div style="overflow: hidden;">
        <div class="max-width-1160px mx-auto">
            <div class="section background-section has-background-white">
                <div class="columns is-vcentered is-centered">
                    <div class="column has-text-centered">
                        <div class="box login-box has-text-centered has-text-white">
                            <p class="is-size-4 has-text-weight-bold">
                                ثبت نام
                            </p>
                            <p class="mt-2">
                                برای ثبت نام اطلاعات خود را دقیق وارد نمائید
                            </p>
                            <div class="columns">
                                <div class="column">
                                    <p class="mt-5">نام </p>
                                    <input class="input mt-3" type="text" placeholder="">
                                </div>
                                <div class="column">
                                    <p class="mt-5">نام خانوادگی </p>
                                    <input class="input mt-3" type="text" placeholder="">
                                </div>
                            </div>
                            <p class="mt-5">شماره موبایل </p>
                            <input class="input mt-3" type="text" placeholder="">
                            <p class="mt-5">ایمیل </p>
                            <input class="input mt-3" type="text" placeholder="">
                            <p class="mt-5">رمز عبور</p>
                            <input class="input mt-3" type="text" placeholder="">
                            <NuxtLink to="/login">
                                <p class="is-size-7 has-text-white my-4">
                                    قبلا وارد شده اید؟ ورود کنید
                                </p>
                            </NuxtLink>
                            <button class="button is-rounded bg-purple has-text-white px-6 pb-3">ثبت نام </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-section {
    background-image: url('/Grid 1.png');
    /* Replace with your image path */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    /* Full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-box {
    background-color: rgba(141, 121, 209, 0.8);
    /* Purple color with transparency */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    /* Optional shadow for depth */
}

.input {
    background-color: rgba(255, 255, 255, 0.9);
    /* Slightly transparent input background */
}

.button.is-primary {
    background-color: #8D79D1;
    border: none;
}
</style>