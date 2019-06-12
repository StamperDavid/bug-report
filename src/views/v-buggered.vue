<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <h3>This site is all buggered</h3>
        <h3> Known Issue's </h3>
        <div v-for="bug in bugs" :key="bug._id" class="card">
          <router-link :to="{name: 'BugDetails', params: {id: bug._id}}">
            <div class="card-body">
              <h5>closed: {{bug.closed}}</h5>
              <h5>title: {{bug.title}}</h5>
              <h5>description: {{bug.description}}</h5>
              <h5>creator: {{bug.creator}}</h5>
              <h5>note: {{bug.note}}</h5>
              <h5>Id: {{bug._id}}</h5>
            </div>
            <!--at click delete bug, and pass id-->
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-bug",
    mounted() {
      this.$store.dispatch("getBugs")
    },
    computed: {
      bugs() {
        return this.$store.state.newBug;
      }
    },
  };
</script>

<style>