<template>
  <div class="is-hidden-mobile is-hidden-tablet-only">
    <div class="menu-container w-100-z-index-2 box columns is-vcentered py-2 mt-5">
      <div class="column is-3"></div>
      <div class="column has-text-centered">
        <div class="columns is-centered">
          <div class="column">
            <NuxtLink to="/" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="Profile Square.png" alt="" class="menu-icon">
                <span class="hover-text">
                  <img src="userprofile.png" alt="" class="menu-icon-small">
                  داشبورد</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/contactus" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="Calling 11.png" alt="" class="menu-icon">
                <span class="hover-text">
                  <img src="Calling 1.png" alt="" class="menu-icon-small">
                  اطلاعات تماس با ما</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/devices" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="Display 11.png" alt="" class="menu-icon">
                <span class="hover-text"> 
                  <img src="Display 1.png" alt="" class="menu-icon-small">
                  دستگاه ها</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/Managealarms" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="Notification 33.png" alt="" class="menu-icon">
                <span class="hover-text"> 
                  <img src="Notification 3.png" alt="" class="menu-icon-small">
                  اعلان ها</span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/Usermanagement" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="Group 3.png" alt="" class="menu-icon">
                <span class="hover-text">
                  <img src="Group 4.png" alt="" class="menu-icon-small">
                  مدیریت مشتریان
                </span>
              </div>
            </NuxtLink>
          </div>
          <div class="column">
            <NuxtLink to="/ticketing" class="">
              <div class="is-flex is-justify-content-center menu-hover">
                <img src="Message 3.png" alt="" class="menu-icon">
                <span class="hover-text">
                  <img src="Message 4.png" alt="" class="menu-icon-small">
                  تیکتینگ
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="column py-0 has-text-left is-one-fifth">
        <div class="is-flex is-justify-content-left pl-4 hover-background">
          <NuxtLink to="/login" class="is-flex">
            <img class="pl-4" src="icons8-log-out-24.png" alt="">
            <p>خروج از حساب کاربری</p>
          </NuxtLink>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
.hover-background:hover {
  background-color: #ff3860; /* رنگ قرمز */
  padding: 5px;
  border-radius: 4px;
}

.hover-background:hover p {
  color: white; /* رنگ متن سفید */
}

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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 100px;
}

.logout-hover :hover {
  color: white;
  background-color: rgb(212, 27, 14);
}

.menu-hover:hover .hover-text {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
