<template>
  <div class="user">
    <div class="img">
      <img src="../assets/profilo.jpg" alt="profilo" />
    </div>
    <div class="info">
      <span><strong>wvwall</strong></span>
      <p>Walter Velardo</p>
    </div>
    <div class="switch">
      <small><a href="">Passa a</a></small>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  props: {},
};
</script>

<style scoped lang="scss">
.user {
  width: 65%;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  .img {
    cursor: pointer;
    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 15px;
    margin-top: 10px;
    margin-right: 40px;
    cursor: pointer;
    p {
      color: gray;
    }
  }
  .switch {
    margin-top: 15px;
    a {
      text-decoration: none;
      color: #0095f6;
      font-weight: bold;
    }
  }
}
</style>
