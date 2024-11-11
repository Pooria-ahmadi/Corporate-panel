<template>

  <div style="overflow: hidden;">
    <div class="max-width-1160px mx-auto">
      <div class="columns mx-0">
        <div class="column box pr-5 is-5 mb-0 is-align-content-center custom-column-spacing">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="is-flex">
                <div class="circle mb-4 ml-4 has-background-grey-lighter">
                </div>
                <p class="has-text-black has-text-weight-bold is-align-content-center">
                  پروفایل ادمین
                </p>
              </div>
              <p class="has-text-grey-dark mx-auto mt-3">
                تعداد مشتری ها:
                <strong class="has-text-black">
                  2
                </strong>
              </p>
              <p class="has-text-grey-dark mx-auto mt-3">
                تعداد دستگاه های موجود:
                <strong class="has-text-black">
                  2
                </strong>
              </p>
              <p class="has-text-grey-dark mx-auto mt-3">
                تعداد پیغام ها:
                <strong class="has-text-black">
                  3
                </strong>
              </p>
              <p class="has-text-grey-dark mx-auto mt-3">
                تعداد تیکت ها:
                <strong class="has-text-black">
                  3
                </strong>
              </p>
              <p class="has-text-grey-dark mx-auto mt-3">
                تعداد تیکت های باز:
                <strong class="has-text-black">
                  3
                </strong>
              </p>
            </div>
            <div class="column has-text-centered">
              <p>
                تعداد و نوع پیغام ها
              </p>
              <img src="New ApexCharts.png" alt="">
            </div>
          </div>
        </div>
        <div class="column box pr-5 custom-column-spacing">
          <div class="columns is-mobile">
            <div class="column has-text-right">
              <p class="has-text-black">آخرین پیغام ها و هشدار ها</p>
            </div>
            <div class="column is-flex is-align-items-center is-justify-content-left">
              <p class="has-text-grey">
                مشاهده همه
              </p>
              <img src="icons8-arrow-left-20.png" alt="">
            </div>
          </div>
          <div class="columns my-5">
            <!-- all box -->
            <div class="column mx-4 has-background-danger-light mb-0" style="border: 1px solid #fd8f8f;
  border-radius: 10px;">
              <!-- in box -->
              <div class="columns py-2">
                <div class="column has-text-centered">
                  <img src="icons8-alarm-24.png" class="has-background-danger p-1 box" alt="">
                </div>
                <div class="column mt-2 is-8">
                  <p>
                    مشکل مشاهده شد!
                  </p>
                  <p class="is-size-7">
                    لورم ایپسورم متن ساختگی با تولید ...
                  </p>
                </div>
                <div class="column has-text-left">
                  <img src="cross-24.png" alt="">
                </div>
              </div>
            </div>

            <div class="column has-background-info-light mx-4 py-2 mb-0" style="border: 1px solid #4b78ff;
  border-radius: 10px;">
              <!-- in box -->
              <div class="columns py-2">
                <div class="column has-text-centered">
                  <img src="icons8-alarm-24.png" class="p-1 box has-background-info" alt="">
                </div>
                <div class="column mt-2 is-8">
                  <p>
                    پیغام توصیه ایی!
                  </p>
                  <p class="is-size-7">
                    لورم ایپسورم متن ساختگی با تولید ...
                  </p>
                </div>
                <div class="column has-text-left">
                  <img src="cross-24.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="columns mb-5">
            <!-- all box -->
            <div class="column mx-4 has-background-success-light" style="border: 1px solid rgb(75, 255, 145);
  border-radius: 10px;">
              <!-- in box -->
              <div class="columns py-2">
                <div class="column has-text-centered">
                  <img src="icons8-alarm-24.png" class="p-1 box has-background-success" alt="">
                </div>
                <div class="column mt-2 is-8">
                  <p>
                    پیغام معمولی!
                  </p>
                  <p class="is-size-7">
                    لورم ایپسورم متن ساختگی با تولید ...
                  </p>
                </div>
                <div class="column has-text-left">
                  <img src="cross-24.png" alt="">
                </div>
              </div>
            </div>
            <div class="column mx-4">

            </div>
          </div>
        </div>
      </div>





      <div class="columns mx-0 mt-4">
        <div class="column box pr-5 is-4 mb-0 is-align-content-center custom-column-spacing">
          <div class="columns is-mobile">
            <div class="column has-text-right">
              <p class="has-text-black">دستگاه های متصل</p>
            </div>
            <div class="column is-flex is-align-items-center is-justify-content-left">
              <p class="has-text-grey">
                مشاهده همه
              </p>
              <img src="icons8-arrow-left-20.png" alt="">
            </div>
          </div>
          <div class="columns br-10-grey my-5 mx-2 is-vcentered">
            <div class="column is-2 has-text-centered p-0">
              <img src="devices.png" class="br-15" alt="">
            </div>
            <div class="column is-8 mr-3">
              <strong class="has-text-black">
                B 3022 U
              </strong>
              <div class="is-flex mt-3 is-size-7">
                <p class="has-text-black">
                  شماره سریال:
                <p class="has-text-black pr-5">
                  123456789
                </p>
                </p>
              </div>
              <div class="is-flex mt-3 is-size-7">
                <p class="has-text-black">
                  وضعیت :
                <p class="pr-5 has-text-success">
                  روشن
                </p>
                </p>
              </div>
            </div>
            <div class="column has-text-centered">
              <img src="icons8-back-20.png" alt="">
            </div>
          </div>
          <div class="columns br-10-grey my-5 mx-2 is-vcentered">
            <div class="column is-2 has-text-centered p-0">
              <img src="devices.png" class="br-15" alt="">
            </div>
            <div class="column is-8 mr-3">
              <strong class="has-text-black">
                B 3022 U
              </strong>
              <div class="is-flex mt-3 is-size-7">
                <p class="has-text-black">
                  شماره سریال:
                <p class="has-text-black pr-5">
                  123456789
                </p>
                </p>
              </div>
              <div class="is-flex mt-3 is-size-7">
                <p class="has-text-black">
                  وضعیت :
                <p class="pr-5 has-text-danger">
                  خاموش
                </p>
                </p>
              </div>
            </div>
            <div class="column has-text-centered">
              <img src="icons8-back-20.png" alt="">
            </div>
          </div>
        </div>
        <div class="column box pr-5 custom-column-spacing">
          <div class="columns is-mobile">
            <div class="column has-text-right">
              <p class="has-text-black">آخرین تیکت ها </p>
            </div>
            <div class="column is-flex is-align-items-center is-justify-content-left">
              <p class="has-text-grey">
                مشاهده همه
              </p>
              <img src="icons8-arrow-left-20.png" alt="">
            </div>
          </div>
          <div class="columns my-5">
            <div class="column has-background-info-light mx-4 py-2 mb-0" style="border: 1px solid #4b78ff;
  border-radius: 10px;">
              <!-- in box -->
              <div class="columns py-2">
                <div class="column has-text-centered">
                  <img src="Message 12.png" class="p-1 box has-background-info" alt="">
                </div>
                <div class="column is-8">
                  <p>
                    پوریا احمدی
                  </p>
                  <p class="is-size-7">
                    لورم ایپسورم متن ساختگی با تولید ...
                  </p>
                </div>
                <div class="column has-text-left">
                  <img src="icons8-arrow-left-20.png" alt="">
                </div>
              </div>
            </div>
            <div class="column has-background-info-light mx-4 py-2 mb-0" style="border: 1px solid #4b78ff;
  border-radius: 10px;">
              <!-- in box -->
              <div class="columns py-2">
                <div class="column has-text-centered">
                  <img src="Message 12.png" class="p-1 box has-background-info" alt="">
                </div>
                <div class="column is-8">
                  <p>
                    پوریا احمدی
                  </p>
                  <p class="is-size-7">
                    لورم ایپسورم متن ساختگی با تولید ...
                  </p>
                </div>
                <div class="column has-text-left">
                  <img src="icons8-arrow-left-20.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="columns mb-5">
            <div class="column has-background-info-light mx-4 py-2 mb-0" style="border: 1px solid #4b78ff;
  border-radius: 10px;">
              <!-- in box -->
              <div class="columns py-2">
                <div class="column has-text-centered">
                  <img src="Message 12.png" class="p-1 box has-background-info" alt="">
                </div>
                <div class="column is-8">
                  <p>
                    پوریا احمدی
                  </p>
                  <p class="is-size-7">
                    لورم ایپسورم متن ساختگی با تولید ...
                  </p>
                </div>
                <div class="column has-text-left">
                  <img src="icons8-arrow-left-20.png" alt="">
                </div>
              </div>
            </div>
            <div class="column mx-4">

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
      title: 'داشبورد',
    }
  },
}
</script>