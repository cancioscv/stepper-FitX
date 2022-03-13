<template>
  <div>
    <Navigation :current-step="1" :title="title" />

    <div class="content">
      Doch als ich „Buh“ rief, kriegten alle Monster einen Schreck Und wer nicht
      in Ohnmacht fiel, der lief einfach weg
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Navigation from "@/views/Navigation.vue";

const title = ref<string>("monsterparty");
</script>


<style lang="scss">
.content {
  display: grid;
  font-size: 32px;
  font-weight: 700;
  margin: auto;
  padding: 1rem;

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>


