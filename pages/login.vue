<template>
    <div style="overflow: hidden;">
        <div class="max-width-1160px mx-auto">
            <div class="section background-section has-background-white">
                <div class="columns is-vcentered is-centered">
                    <div class="column has-text-centered">
                        <div class="box login-box has-text-centered has-text-white">
                            <p class="is-size-4 has-text-weight-bold">
                                ورود
                            </p>
                            <p class="mt-2">
                               نام کاربری و رمزعبور خود را وارد کنید
                            </p>
                            <p class="mt-5"> نام کاربری </p>
                            <input class="input mt-3" type="text" placeholder="نام کاربری خود را وارد کنید">
                            <p class="mt-5">رمز عبور</p>
                            <input class="input mt-3" type="text" placeholder="رمز عبور خود را وارد کنید">
                            <NuxtLink to="/singup">
                                <p class="is-size-7 has-text-white my-4">
                                    هنوز ثبت نام نکرده اید؟ ثبت نام کنید
                                </p>
                            </NuxtLink>
                            <button class="button is-rounded bg-purple has-text-white px-6 pb-3"> ورود </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
  head() {
    return {
      title: 'ورود',
    }
  },
}
</script>