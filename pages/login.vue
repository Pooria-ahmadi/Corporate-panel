<template>
    <div style="overflow: hidden;">
        <div class="max-width-1160px mx-auto">
            <div class="is-relative">
                <img class="has-background-white" src="Grid 1.png" alt="">
                <div class="box center-box has-text-centered has-text-white">
                    <p class="is-size-4 has-text-weight-bold">
                        ورود
                    </p>
                    <p class="mt-2">
                        نام کاربری و رمز عبور خود را وارد کنید
                    </p>
                    <p class="mt-5">نام کاربری</p>
                  <input class="input mt-3" type="text" placeholder="">
                  <p class="mt-5">رمز عبور </p>
                  <input class="input mt-3" type="text" placeholder="">
                  <NuxtLink to="/singup">
                <p class="is-size-7 has-text-white my-4">
                    هنوز ثبت نام نکرده اید؟ ثبت نام کنید
                </p>
            </NuxtLink>
            <button class="button is-rounded bg-purple has-text-white px-6 pb-3">ورود </button>
                </div>     
            </div>
        </div>
    </div>
</template>
<style>
.center-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #8D79D1D9;
    min-width: 450px;
    height: auto;
}
</style>