<template>
  <div>
    <Profile />
    <suggestions />
  </div>
</template>
<script>
import Profile from "./Profile.vue";
import Suggestions from "./Suggestions.vue";
export default {
  name: "Right",
  components: {
    Profile,
    Suggestions,
  },
  props: {},
};
</script>

<style scoped lang="scss"></style>
