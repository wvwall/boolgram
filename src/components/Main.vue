<template>
  <section>
    <div class="invisible"></div>
    <div class="container">
      <Left class="left" />
      <Right class="right" />
    </div>
  </section>
</template>

<script>
import Left from "./Left.vue";
import Right from "./Right.vue";
export default {
  name: "Main",
  components: {
    Left,
    Right,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  height: auto;
  .invisible {
    width: 100%;
    height: 50px;
  }
  .container {
    width: 65%;
    margin: 0 auto;

    border-radius: 5px;
    height: 100vh;
    margin-top: 40px;
    display: flex;
    .left {
      width: 70%;
      background-color: #fafafa;
    }
    .right {
      position: fixed;
      top: 90px;
      right: 60px;
      width: 30%;
      height: 100vh;
      border: 1px solid tomato;
    }
  }
}
</style>
