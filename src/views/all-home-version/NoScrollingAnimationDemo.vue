<template>
  <div>
    <Header />
    <!-- End Header -->

    <Slider />
    <!-- End Slider -->

    <About />
    <!-- End About -->

    <Service />
    <!-- End Service -->

    <div class="waxon_tm_portoflio" id="portfolio">
      <Portfolio />
    </div>
    <!-- End Portfolio -->

    <Testimonial />
    <!-- End Testimonail -->

    <div class="waxon_tm_news" id="news">
      <div class="container">
        <div class="waxon_tm_main_title">
          <div class="title">
            <h3>Latest News<span class="bg">News</span></h3>
          </div>
        </div>
        <News />
      </div>
    </div>
    <!-- End News -->

    <div class="waxon_tm_contact" id="contact">
      <div class="bg_image"></div>
      <div class="container">
        <div class="contact_inner">
          <div class="waxon_tm_main_title">
            <div class="title">
              <h3>Get in Touch<span class="bg">Contact</span></h3>
            </div>
          </div>
          <div class="desc">
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div class="wrapper">
            <div class="left">
              <Contact />
            </div>
            <div class="right">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End contact -->

    <Footer />

    <!-- End End Footer -->
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Slider from "../../components/slider/SliderSeven.vue";
import About from "../../components/about/AboutTwo.vue";
import Service from "../../components/services/Service.vue";
import Portfolio from "../../components/portfolio/PortfolioTwo.vue";
import Testimonial from "../../components/testimonial/TestimonialTwo.vue";
import News from "../../components/news/NewsTwo.vue";
import Contact from "../../components/Contact.vue";
import Map from "../../components/Map.vue";
import Footer from "../../components/FooterTwo.vue";
export default {
  components: {
    Header,
    Slider,
    About,
    Service,
    Portfolio,
    Testimonial,
    News,
    Contact,
    Map,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
