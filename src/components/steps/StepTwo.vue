<template>
  <div>
    <Navigation :current-step="2" :title="title" />

    <div class="content">
      Jungs, das ist mein Leben, das ham wir uns nicht ausgedacht. In all den
      Jahren in denen wir Airplay verschwendet haben. Man könnte denken, wir
      Rapper hätten nichts zu sagen
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { computed, ref } from "vue";
import Navigation from "@/views/Navigation.vue";

const title = ref<string>("adriano");
</script>






