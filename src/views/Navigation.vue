<template>
  <div class="container">
    <div class="step-header">
      <button
        v-if="!isFirstStep"
        @click="goBack"
        class="btn-back"
        data-test-id="btn-back"
      >
        Zurück
      </button>

      <h1 class="title">{{ title }}</h1>

      <button
        v-if="!isLastStep"
        @click="goNext"
        class="btn-next"
        data-test-id="btn-next"
      >
        Weiter
      </button>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  currentStep: number;
  title: string;
}>();

const isFirstStep = computed(() => props.currentStep === 1);
const isLastStep = computed(() => props.currentStep === 4);

const router = useRouter();

const goBack = () => {
  switch (props.currentStep) {
    case 4:
      router.push("/3");
      break;
    case 3:
      router.push("/2");
      break;
    case 2:
      router.push("/");
      break;
    default:
      router.push("/");
      break;
  }
};

const goNext = () => {
  switch (props.currentStep) {
    case 1:
      router.push("/2");
      break;
    case 2:
      router.push("/3");
      break;
    case 3:
      router.push("/4");
      break;
    default:
      router.push("/");
      break;
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.title {
  text-align: center;
  flex: 1;
}

.step-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 145px;
  color: #ffffff;
  background-color: #181d1e;
}

button {
  display: block;
  padding: 0 35px;
  font-weight: 700;
  cursor: pointer;
  height: 100%;
  color: #ffffff;
  font-size: 24px;
}

button.btn-next {
  background-color: #ed6a12;
  margin-left: auto;
}

button.btn-back {
  background-color: #262b2c;
  margin-right: auto;
}
</style>


