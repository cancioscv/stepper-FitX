<template>
  <div>
    <Navigation :current-step="4" :title="title" />

    <div class="content">Gib Bescheid wenn du durch bist</div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from "vue";
import Navigation from "@/views/Navigation.vue";

const title = ref<string>("Kontakt");
</script>


