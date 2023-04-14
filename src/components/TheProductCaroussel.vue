<script setup lang="ts">
import { reactive } from "vue";
import IconNext from "./icons/IconNext.vue";
import IconPrevious from "./icons/IconPrevious.vue";

interface PropsType {
  imageList: String[];
}

const props = defineProps<PropsType>();

const currentImage = reactive({ index: 0, url: props.imageList[0] });

function goToNextImg() {
  if (currentImage.index < 3) currentImage.index++;
  return;
}
function goToPreviousImg() {
  if (currentImage.index > 0) currentImage.index--;
  return;
}
</script>

<template>
  <div class="caroussel-container" v-if="imageList">
    <div
      :style="{ transform: `translateX(calc(100% * -${currentImage.index}))` }"
      class="image-container"
    >
      <div
        :style="{ backgroundImage: `url(${img})` }"
        class="image"
        v-for="(img, index) in imageList"
        :key="index"
      ></div>
    </div>
    <div class="slider-icons">
      <div @click="goToPreviousImg" class="icon-container">
        <IconPrevious />
      </div>
      <div @click="goToNextImg" class="icon-container">
        <IconNext />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.caroussel-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.image-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  .image {
    flex: 100% 1 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

.slider-icons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 12px;

  .icon-container:nth-of-type(n) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background);
    border-radius: 50%;
    padding: 10px 12px;
    cursor: pointer;
  }
}
</style>
