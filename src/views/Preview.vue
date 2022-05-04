<template>
  <div class="waxon_tm_all_wrap preview-page" data-color="crimson">
    <!-- <div class="waxon_tm_intro_fixed_price">
      <span class="anim"></span>
      <span class="anim"></span>
      <span class="anim"></span>
      <a href="#" target="_blank" class="pricing-info anim">-78%</a>
    </div> -->
    <!-- End .waxon_tm_intro_fixed_pric -->

    <div class="waxon_tm_intro_page">
      <div
        class="hero_header"
        :style="{ backgroundImage: 'url(' + prevImg + ')' }"
      >
        <div class="container intro">
          <div class="content">
            <img
              v-scroll-reveal="{ delay: 200 }"
              src="../assets/img/logo/intro.png"
              alt=""
            />
            <p v-scroll-reveal="{ delay: 250 }" class="titlehero">
              VueJS Personal Portfolio Template
            </p>
            <div v-scroll-reveal="{ delay: 300 }" class="waxon_tm_button intro">
              <a href="#demos">
                <span>View All Demos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- End hero_header -->

      <div class="mainpart" id="demos">
        <div class="intro_title">
          <h3>8 Pre-Build Demos</h3>
        </div>
        <!-- End .intro_title -->
        <div class="demo_list">
          <div class="container demo">
            <div class="list_inner">
              <ul>
                <li v-scroll-reveal="{ delay: 50 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/1.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>Static Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/static-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 80 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/1.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>Particle Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/particle-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 120 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/1.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>Typed Headline Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/typed-headline-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 150 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/1.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>Kenburn Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/kenburn-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 180 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/1.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>No Scrolling Animation Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/no-scrolling-animation-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 210 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/dark.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>Dark Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/dark-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 240 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/2.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>Slider Demo</h3>
                    </div>
                    <router-link
                      class="full_link"
                      to="/slider-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->

                <li v-scroll-reveal="{ delay: 270 }">
                  <div class="in">
                    <div class="image">
                      <img src="../assets/img/intro/rtl.jpg" alt="" />
                    </div>
                    <div class="detail">
                      <h3>RTL Demo</h3>
                      <!--	<span class="new">New</span>-->
                    </div>
                    <router-link
                      class="full_link"
                      to="/rtl-demo"
                      target="_blank"
                    ></router-link>
                  </div>
                </li>
                <!-- End single demo -->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- End .mainpart -->

      <div class="intro_footer">
        <div class="inner">
          <h3 v-scroll-reveal="{ delay: 100 }">
            You have a reason? Just choose Waxon.
          </h3>
          <div class="waxon_tm_button intro" v-scroll-reveal="{ delay: 150 }">
            <a href="#" target="_blank">
              <span>Purchase Now</span>
            </a>
          </div>
        </div>
      </div>
      <!-- End .intro_footer -->
    </div>
  </div>
  <!-- End wrapper all -->
</template>

<script>
export default {
  data() {
    return {
      prevImg: require("../assets/img/intro/preview.jpg"),
    };
  },
  mounted() {
    document.body.classList.add("preview-page");
  },
  destroyed() {
    document.body.classList.remove("preview-page");
  },
};
</script>

<style lang="scss">
.preview-page .back-top {
  display: none;
}
</style>
