<template>
  <div>
    <Sidebar />
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <TextField label="Label" />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import TextField from "./atoms/TextField.vue";

export default {
  components: {
    Sidebar,
    TextField,
  },
};
</script>
