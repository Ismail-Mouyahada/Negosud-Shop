<template>
  <HeaderCustom />
  <Hero />
  <Feedbacks />
  <IntroToAperol />
  <FollowUs />
  <FooterCustom />
</template>

<script>
import HeaderCustom from "@/components/content/HeaderCustom.vue";
import Hero from "@/components/content/Hero.vue";
import Feedbacks from "@/components/content/Feedbacks.vue";
import IntroToAperol from "@/components/content/IntroToAperol.vue";
import FollowUs from "@/components/content/FollowUs.vue";
import FooterCustom from "@/components/content/FooterCustom.vue";
export default {
  name: "home",
  components: {
    HeaderCustom,
    Hero,
    Feedbacks,
    IntroToAperol,
    FollowUs,
    FooterCustom
  },
};
</script>
