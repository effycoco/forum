<template>
  <!-- structure the contents of page-home component -->
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"></post-list>
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            v-model="newPostText"
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
          />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
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
      newPostText: "",
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
  methods: {
    //
    addPost() {
      const postId = "gggb" + Math.random();
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "FsCDAk9w8NeXEceLV87arpsXjnQ2",
      };
      this.posts.push(post);
      this.thread.posts.push(postId);
      this.newPostText = "";
    },
  },
};
</script>
