<template>
  <!-- structure the contents of page-home component -->
  <h1>Welcome to the Forum!</h1>
  <ThreadList :threads="threads" />
</template>

<script>
import ThreadList from "@/components/ThreadList.vue";
import srcData from "@/data.json";
export default {
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: srcData.threads,
    };
  },
};
</script>
