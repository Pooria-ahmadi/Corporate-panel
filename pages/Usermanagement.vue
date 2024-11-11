<template>
    <div style="overflow: hidden;">
        <div class="max-width-1160px mx-auto">
            <!-- for mobile -->
            <div class="columns mx-4 mb-6 pt-4 pb-6 is-hidden-desktop">
                <div class="column box py-6">
                    <div class="has-text-centered">
                        <p class="has-text-black">
                            مدیران مشتریان
                        </p>
                        <p class="mt-4">
                            در این قسمت میتوانید مشتری های خود را مدیریت کنید و همچنین مشتری اضافه کنید.
                        </p>
                        <button class="button p-30 br-15 mt-5" @click="showModal = true">
                            <span class="has-text-centered">
                                <span class="is-block color-8D79D1">افزودن مشتری</span>
                                <img src="icon.png" alt="icon">
                            </span>
                        </button>
                    </div>
                    <div class="is-flex my-5">
                        <img src="Filter 3.png" alt="">
                        <p>
                            مرتب سازی بر اساس
                        </p>
                        <p class="mx-5">
                            جدیدترین
                        </p>
                        <p>
                            قدیمی ترین
                        </p>
                    </div>
                    <!-- پاپ‌آپ -->
                    <div class="modal" :class="{ 'is-active': showModal }">
                        <div class="modal-background" @click="closeModal"></div>
                        <div class="modal-content">
                            <div class="columns is-centered">
                                <div class="column is-10">
                                    <div class="box pt-0">
                                        <div class="has-text-centered">
                                            <img src="titlepopup.png" alt="">
                                            <p class="color-8D79D1">
                                                افزودن کاربر
                                            </p>
                                        </div>
                                        <div class="columns mt-4">
                                            <div class="column" v-for="(form, index) in boxform" :key="index">
                                                <p>{{ form.label }}</p>
                                                <input class="input" type="text" :placeholder="form.placeholder">
                                            </div>
                                        </div>
                                        <div class="columns">
                                            <div class="column" v-for="(form2, index) in boxform2" :key="index">
                                                <p>{{ form2.label }}</p>
                                                <input class="input" type="text" :placeholder="form2.placeholder">
                                            </div>
                                        </div>
                                        <div class="columns">
                                            <div class="column" :class="form3.isfive" v-for="(form3, index) in boxform3"
                                                :key="index">
                                                <p>{{ form3.label }}</p>
                                                <input class="input" type="text" :placeholder="form3.placeholder">
                                            </div>
                                        </div>
                                        <div class="has-text-centered">
                                            <button class="button bg-purple has-text-white" @click="closeModal">افزودن
                                                ردیف</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
                    </div>
                    <div class="box px-0 py-1">
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2">
                            <p>
                                نام و نام خانوادگی
                            </p>
                            <p>
                                پوریا احمدی
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تلفن همراه
                            </p>
                            <p>
                                09121234567
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تعداد پیغام ها
                            </p>
                            <p>
                                3
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تعداد دستگاه ها
                            </p>
                            <p>
                                3
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                کدملی
                            </p>
                            <p>
                                1250359318413
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تاریخ اضافه شدن
                            </p>
                            <p>
                                1403 / 08 / 09
                            </p>
                        </div>
                    </div>
                    <div class="box px-0 py-1">
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2">
                            <p>
                                نام و نام خانوادگی
                            </p>
                            <p>
                                پوریا احمدی
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تلفن همراه
                            </p>
                            <p>
                                09121234567
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تعداد پیغام ها
                            </p>
                            <p>
                                3
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تعداد دستگاه ها
                            </p>
                            <p>
                                3
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                کدملی
                            </p>
                            <p>
                                1250359318413
                            </p>
                        </div>
                        <div class="is-flex is-justify-content-space-between has-background-grey-lighter p-2 my-1">
                            <p>
                                تاریخ اضافه شدن
                            </p>
                            <p>
                                1403 / 08 / 09
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <!-- for desktop -->
            <div class="columns mx-0 mb-6 pt-4 pb-6 is-hidden-mobile is-hidden-tablet-only">
                <div class="column box py-6 px-5">
                    <div class="is-flex is-justify-content-space-between my-4">
                        <div>
                            <p class="has-text-black">
                                مدیران مشتریان
                            </p>
                            <p class="mt-4">
                                در این قسمت میتوانید مشتری های خود را مدیریت کنید و همچنین مشتری اضافه کنید.
                            </p>
                        </div>

                        <button class="button p-30 br-15" @click="showModal = true">
                            <span class="has-text-centered">
                                <span class="is-block color-8D79D1">افزودن مشتری</span>
                                <img src="icon.png" alt="icon">
                            </span>
                        </button>

                        <!-- پاپ‌آپ -->
                        <div class="modal" :class="{ 'is-active': showModal }">
                            <div class="modal-background" @click="closeModal"></div>
                            <div class="modal-content">
                                <div class="columns is-centered">
                                    <div class="column is-10">
                                        <div class="box pt-0">
                                            <div class="has-text-centered">
                                                <p class="has-text-black">
                                                    افزودن مشتری
                                                </p>
                                                <p class="has-text-grey">
                                                    برای افزودن مشتری، اطلاعات او را وارد کنید.
                                                </p>
                                            </div>
                                            <div class="columns mt-4">
                                                <div class="column" v-for="(form, index) in boxform" :key="index">
                                                    <p>{{ form.label }}</p>
                                                    <input class="input" type="text" :placeholder="form.placeholder">
                                                </div>
                                            </div>
                                            <div class="columns">
                                                <div class="column" v-for="(form2, index) in boxform2" :key="index">
                                                    <p>{{ form2.label }}</p>
                                                    <input class="input" type="text" :placeholder="form2.placeholder">
                                                </div>
                                            </div>
                                            <div class="has-text-centered">
                                                <button class="button bg-purple has-text-white"
                                                    @click="closeModal">ذخیره</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
                        </div>
                    </div>
                    <div class="is-flex">
                        <img src="Filter 3.png" alt="">
                        <p>
                            مرتب سازی بر اساس
                        </p>
                        <p class="mx-5">
                            جدیدترین
                        </p>
                        <p>
                            قدیمی ترین
                        </p>
                    </div>
                    <div class="columns is-multiline mx-3 mt-75">
                        <div class="column has-text-centered ">
                            <p class="has-text-grey">
                                تعداد مشتری ها: 2
                            </p>
                        </div>
                        <div class="column has-text-centered ">
                            <p>
                                نام و خانوادگی
                            </p>
                        </div>
                        <div class="column has-text-centered ">
                            <p>
                                تلفن همراه
                            </p>
                        </div>
                        <div class="column has-text-centered ">
                            <p>
                                تعداد پیغام ها
                            </p>
                        </div>
                        <div class="column has-text-centered ">
                            <p>
                                تعداد دستگاه ها
                            </p>
                        </div>
                        <div class="column has-text-centered ">
                            <p>
                                کدملی
                            </p>
                        </div>
                        <div class="column has-text-centered ">
                            <p>
                                تاریخ اضافه شدن
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                        </div>
                    </div>
                    <div class="columns is-multiline mx-3 mt-0 br-10-grey is-vcentered py-3">
                        <div class="column has-text-centered ">

                            <img src="Profile Square 2.png" alt="">
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                پوریا احمدی
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                09102666127
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                3
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                3
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                1250359318413
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                1403 / 08 / 09
                            </p>
                        </div>
                        <div class="column has-text-centered  is-align-content-center">
                            <img src="icons8-back-20.png" alt="">
                        </div>
                    </div>
                    <div class="columns is-multiline mx-3 mt-0 br-10-grey is-vcentered py-3">
                        <div class="column has-text-centered ">

                            <img src="Profile Square 2.png" alt="">
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                پوریا احمدی
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                09102666127
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                3
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                3
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                1250359318413
                            </p>
                        </div>
                        <div class="column has-text-centered ">

                            <p>
                                1403 / 08 / 09
                            </p>
                        </div>
                        <div class="column has-text-centered  is-align-content-center">
                            <img src="icons8-back-20.png" alt="">
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
            title: 'مدیریت کاربران',
        }
    },
    data() {
        return {
            showModal: false,
            boxform: [
                { label: 'نام', placeholder: 'نام خود را وارد کنید' },
                { label: 'نام خانوادگی', placeholder: 'نام خانوادگی خود را وارد کنید' },
            ],
            boxform2: [
                { label: 'شماره تلفن', placeholder: 'شماره تلفن خود را وارد کنید' },
                { label: 'کدملی ', placeholder: 'کدملی خود را وارد کنید' },
            ],
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
    }
};
</script>
<style>
button {
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #D0D0D0;
}

.modal-content {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
}
</style>