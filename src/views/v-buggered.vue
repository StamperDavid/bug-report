<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="card">
          <h3>This site is all buggered</h3>
          <h3> Known Issue's </h3>
          <div class="card-body">
            <div v-for="newbug in newBug" :key="bug._id" @click="selectNewbug(id)">
              <h5>{{newbug.title}}</h5>
              <h5> {{newbug.description}}</h5>
              <h5>{{newbug.creator}}</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-bug",
    data() {
      return {};
    },
    computed: {
      newBug() {
        return this.$store.state.newBug;
      },
      selectedNewbug() {
        return this.$store.state.newBug;
      }
    },
    methods: {
      selectNewbug(id) {
        this.$store.dispatch("setNewbug", id);
      }
    }
  };
</script>

<style>