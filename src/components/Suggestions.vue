<template>
  <div class="Sugg">
    <div class="perTe">
      <p>Suggerimenti per te</p>
    </div>
    <div v-for="(story, index) in stories" :key="index" class="Users">
      <div class="profile">
        <img :src="story.profile_picture" alt="" />
        <div class="profi">
          <p>{{ story.profile_name }}</p>
          <small>Seguito da altri profili</small>
        </div>
      </div>
      <div class="segui"><small>Segui</small></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Suggestions",
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
.Sugg {
  width: 65%;
  margin-top: 40px;

  .perTe {
    margin-bottom: 10px;
    p {
      text-align: start;
      color: grey;
      font-weight: bold;
    }
  }
  .Users {
    display: flex;
    justify-content: space-between;
    .profile {
      display: flex;
      align-items: center;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin: 6px 10px;
        cursor: pointer;
      }
      .profi {
        text-align: start;
        p {
          font-weight: bold;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .segui {
      display: flex;
      align-items: center;
      small {
        color: #0095f6;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
