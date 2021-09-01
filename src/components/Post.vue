<template>
  <div class="box_posts">
    <div v-for="(post, index) in posts" :key="index" class="post">
      <div class="box_info">
        <div class="name_profile">
          <div class="white_circle">
            <img :src="post.profile_picture" alt="" />
          </div>
          <span>{{ post.profile_fullname }}</span>
        </div>
        <div class="circle">
          <svg
            aria-label="Altre opzioni"
            class="_8-yf5"
            fill="#262626"
            height="16"
            role="img"
            viewBox="0 0 48 48"
            width="16"
          >
            <circle
              clip-rule="evenodd"
              cx="8"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="24"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="40"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
          </svg>
        </div>
      </div>
      <img :src="post.post_image" alt="" />
      <div class="box_bottom">
        <div class="icons_post">
          <div class="icon_left">
            <svg
              aria-label="Mi piace"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
              ></path>
            </svg>
            <svg
              aria-label="Commenta"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clip-rule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-label="Condividi il post"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
              ></path>
            </svg>
          </div>
          <div class="icon_right">
            <svg
              aria-label="Salva"
              class="_8-yf5"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="box_likes">
          <img :src="post.likes[0].profile_picture" alt="profilo" />
          <small>
            Piace a <strong>{{ post.likes[0].username }}</strong> e
            <strong>altri {{ post.likes.length }}</strong>
          </small>
        </div>
        <div class="box_text">
          <span
            ><strong>{{ post.profile_name }}</strong></span
          >
          <p>{{ post.post_text }}</p>
        </div>
        <div class="box_n_comments">
          <small
            >Totale commenti :
            <strong>{{ post.comments.length }}</strong></small
          >
        </div>
        <!-- <div class="comments">
          <strong>{{ post.comments[0].username }}</strong>
          <p>{{ post.comments[0].text }}</p>
        </div>
        <div class="comments">
          <strong>{{ post.comments[1].username }}</strong>
          <p>{{ post.comments[1].text }}</p>
        </div>
        <div class="comments">
          <strong>{{ post.comments[2].username }}</strong>
          <p>{{ post.comments[2].text }}</p>
        </div> -->
      </div>
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
      });
    // axios
    //   .get(`https://flynn.boolean.careers/exercises/api/boolgram/posts`)
    //   .then((response) => {
    //     this.likes = response.data[0].likes;
    //     this.likes = this.likes.length;
    //     console.log(this.likes);
    //     this.comments = response.data[0].comments;
    //     this.comments = this.comments.length;
    //     console.log(this.comments);
    //   });
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
    width: 100%;
    .box_info {
      background-color: #fff;
      display: flex;
      align-items: center;
      border: 1px solid lightgray;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .name_profile {
        display: flex;
        align-items: center;

        width: 100%;
        height: 60px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        span {
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }
        .white_circle {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid tomato;
          margin-left: 15px;
          margin-right: 15px;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }
      }
      .circle {
        margin-right: 10px;
        cursor: pointer;
      }
    }

    img {
      width: 100%;
      height: 550px;
    }
    .box_bottom {
      background-color: #fff;
      min-height: 150px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border: 1px solid lightgray;
      border-top: none;
      margin-bottom: 50px;
      .icons_post {
        display: flex;
        justify-content: space-between;
        height: 45px;
        cursor: pointer;
        .icon_left {
          width: 100px;
          display: flex;
          justify-content: space-between;
          margin-left: 15px;
          margin-top: 5px;
        }
        .icon_right {
          margin-right: 10px;
          margin-top: 5px;
        }
      }
      .box_likes {
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 18px;
        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin: 0 5px 0 15px;
        }
      }
      .box_text {
        display: flex;
        margin-top: 10px;
        font-size: 14px;
        span {
          margin-left: 15px;
        }
        p {
          margin-left: 5px;
        }
      }
      .box_n_comments {
        font-size: 15px;
        display: flex;
        justify-content: start;
        margin-left: 15px;
        margin-top: 5px;
      }
    }
    .comments {
      display: flex;
      font-size: 14px;
      margin-bottom: 20px;
      margin-top: 5px;
      strong {
        margin-left: 15px;
      }
      p {
        margin-left: 5px;
      }
    }
  }
}
</style>
