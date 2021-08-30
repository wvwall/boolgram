<template>
  <div class="box_posts">
    <div v-for="(post, index) in posts" :key="index" class="post">
      <img :src="post.profile_picture" alt="" />
      <small>{{ post.profile_name }}</small>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get(`https://flynn.boolean.careers/exercises/api/boolgram/posts`)
      .then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      });
  },
  props: {},
};
</script>

<style scoped lang="scss">
.box_posts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .post {
    margin: 0 8px;

    img {
      width: 650px;
      height: 550px;
      border-radius: 5px;
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
