<template>
    <div class="is-hidden-desktop">
        <div class="menu-container w-100-z-index-2 box columns is-vcentered py-0 mt-5">
            <div class="column pb-0">
                <div class="navbar-burger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="navbar-menu pr-6 is-hidden-desktop" :class="{ 'is-active': isMobileMenuOpen }">
                <ul>
                    <li class="my-4">
                        <NuxtLink to="/" class="menu-hover is-flex">
                            <img src="icons8-home-24.png" alt="" class="pl-4">
                            <p class="width-text-118px">داشبورد</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/Managealarms" class="menu-hover is-flex">
                            <img src="icons8-bell-24.png" alt="" class="pl-4">
                            <p class="width-text-118px">مدیریت آلارم ها</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/Supportmanagement" class="menu-hover is-flex">
                            <img src="icons8-setting-24.png" alt="" class="pl-4">
                            <p class="width-text-118px">مدیریت پشتیبانی</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/Usermanagement" class="menu-hover is-flex">
                            <img src="icons8-user-plus-24.png" alt="" class="pl-4">
                            <p class="width-text-118px">مدیریت کاربران</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/login" class="logout-hover">
                            <div class="is-flex pl-4">
                                <img class="pl-4" src="icons8-log-out-24.png" alt="">
                                <p>خروج از حساب کاربری</p>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    },
}
</script>