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
                            <img src="Profile Square.png" alt="" class="pl-4">
                            <p>داشبورد</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/contactus" class="menu-hover is-flex">
                            <img src="Calling 11.png" alt="" class="pl-4">
                            <p>اطلاعات تماس با ما</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/devices" class="menu-hover is-flex">
                            <img src="Display 11.png" alt="" class="pl-4">
                            <p> دستگاه ها</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/Managealarms" class="menu-hover is-flex">
                            <img src="Notification 33.png" alt="" class="pl-4">
                            <p> اعلان ها</p>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/Usermanagement" class="logout-hover">
                            <div class="is-flex pl-4">
                                <img class="pl-4" src="Group 3.png" alt="">
                                <p> مدیریت مشتریان </p>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink to="/ticketing" class="logout-hover">
                            <div class="is-flex pl-4">
                                <img class="pl-4" src="Message 3.png" alt="">
                                <p>تیکتینگ </p>
                            </div>
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