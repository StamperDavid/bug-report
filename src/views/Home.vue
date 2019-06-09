<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row">
      <div class="col-5">
        <new-bug />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NewBug from "@/components/newbug.vue";

  export default {
    name: "home",
    data() {
      return {};
    },
    computed: {
      home() {
        return $this.store.state.home;
      }
    },
    methods: {
      createhome(id) {
        this.$store.dispatch("home", id);
      }
    },
    components: {
      NewBug
    }
  };
</script>