<template>
  <!-- structure the contents of page-home component -->
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"></post-list>
  </div>
</template>

<script>
import srcData from "@/data.json";
import PostList from "@/components/PostList.vue";
export default {
  name: "ThreadShow",
  components: {
    PostList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      threads: srcData.threads,
      posts: srcData.posts,
    };
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id); // also available under this.$route.params.id
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
};
</script>
