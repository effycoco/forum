<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <a href="#">{{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="profile.html">{{ userById(thread.userId).name }}</a
            >, {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{
                userById(postById(thread.lastPostId).userId).name
              }}</a>
            </p>
            <p class="text-xsmall text-faded">{{ thread.lastPostAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import srcData from "@/data.json";
export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      posts: srcData.posts,
      users: srcData.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((post) => postId === post.id);
    },
    userById(userId) {
      return this.users.find((user) => userId === user.id);
    },
  },
};
</script>
