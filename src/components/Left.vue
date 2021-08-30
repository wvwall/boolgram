<template>
  <div>
    <div class="stories">
      <Story />
    </div>
    <div class="posts">
      <Post />
    </div>
  </div>
</template>
<script>
import Story from "./Story.vue";
import Post from "./Post.vue";
export default {
  name: "Left",
  components: {
    Story,
    Post,
  },
  props: {},
};
</script>

<style scoped lang="scss">
.stories {
  width: 100%;
  height: 120px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-bottom: 40px;
}
</style>
