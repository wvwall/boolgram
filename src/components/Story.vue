<template>
  <div class="box_stories">
    <div v-for="(story, index) in stories" :key="index" class="story">
      <div class="white_circle">
        <img :src="story.profile_picture" alt="" />
      </div>
      <small>{{ story.profile_name }}</small>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Story",
  data() {
    return {
      stories: [],
    };
  },
  mounted() {
    axios
      .get(`https://flynn.boolean.careers/exercises/api/boolgram/profiles`)
      .then((response) => {
        this.stories = response.data;
      });
  },
  props: {},
};
</script>

<style scoped lang="scss">
.box_stories {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  overflow-x: scroll;
  .story {
    margin: 0 8px;
    .white_circle {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 66px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid tomato;
      img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
      }
    }
    small {
      text-align: center;
      display: block;
      width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 2px;
    }
  }
}
</style>
