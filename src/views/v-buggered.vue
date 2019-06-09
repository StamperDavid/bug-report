<!-- <template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          
        </div>
      </div>
    </div>>
  </div>
</template> -->

<template>
  <div class="col-6">
    <h3>This site is all buggered</h3>
    <div class="row">
      <div class="col-6" v-for="" :key="newbug" @click="createNewbug">
        <div class="card-body">
          <h5>{{newBug.title}}: {{newBug.description}}</h5>
          <h5>{{newBug.creator}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div id="preview">
    <h3> Known Issue </h3>
    <p> Bug Title:{{newBug.title}}</p>
    <P>Bug Content: {{newBug.description}}</P>
  </div>
  </div>
</template>
</template>

<script>
  export default {
    name: "newBug",
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
        this.$store.dispatch("set Newbug", id);
      }
    }
  };
</script>

<style>