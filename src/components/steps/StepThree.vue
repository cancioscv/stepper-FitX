<template>
  <div>
    <Navigation :current-step="3" :title="title" />

    <div class="content">
      Ich hab' alles, was ich brauch Augen auf und wieder zu Stecker raus, keine
      Daten. Die Welt bleibt draußen und muss warten
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
import { ref } from "vue";
import Navigation from "@/views/Navigation.vue";

const title = ref<string>("Der Perfekte Moment");
</script>


