<template>
  <div class="is-hidden-mobile is-hidden-tablet-only">
    <div class="menu-container w-100-z-index-2 box columns is-vcentered py-2 mt-5">
      <div class="column"></div>
      <div class="column has-text-centered">
        <div class="columns">
          <div class="column">
            <NuxtLink to="/" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="icons8-home-24.png" alt="" class="menu-icon">
                <span class="hover-text">داشبورد</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/contactus" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="icons8-bell-24.png" alt="" class="menu-icon">
                <span class="hover-text">اطلاعات تماس با ما</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/devices" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="icons8-bell-24.png" alt="" class="menu-icon">
                <span class="hover-text"> دستگاه ها</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/Managealarms" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="icons8-bell-24.png" alt="" class="menu-icon">
                <span class="hover-text"> اعلان ها</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/Usermanagement" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="icons8-setting-24.png" alt="" class="menu-icon">
                <span class="hover-text">مدیریت مشتریان</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/ticketing" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="icons8-user-plus-24.png" alt="" class="menu-icon">
                <span class="hover-text">تیکتینگ</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="column has-text-left is-3">
        <NuxtLink to="/login" class="">
          <div class="is-flex is-justify-content-left pl-4">
            <img class="pl-4" src="icons8-log-out-24.png" alt="">
            <p>خروج از حساب کاربری</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>


.menu-hover {
  position: relative;
}

.menu-icon {
  transition: opacity 0.3s ease;
  position: relative;
  z-index: 1;
}

.menu-hover:hover .menu-icon {
  opacity: 0;
}

.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #5468B1;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  white-space: nowrap;
  z-index: 0;
}
.logout-hover :hover{
color: white;
background-color: rgb(212, 27, 14);
}
.menu-hover:hover .hover-text {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
