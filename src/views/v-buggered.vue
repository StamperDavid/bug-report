<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <h3>This site is all buggered</h3>
        <h3> Known Issue's </h3>
        <div v-for="newbug in newBug" :key="newbug._id" class="card">
          <div>
            <div class="card-body">
              <h5>title: {{newbug.title}}</h5>
              <h5>description: {{newbug.description}}</h5>
              <h5>creator: {{newbug.creator}}</h5>
              <h5>note: {{newbug.note}}</h5>
              <h5>Id: {{newbug._id}}</h5>
            </div>
            <button @click="getComments(newbug._id)">view notes</button>
            {{ comments[newbug._id] }}
            <!--fix this to render notes on a v-for-->
            <div>
              <form @submit.prevent="addNote(newbug._id)" class="form">

                <input type="text" v-model="newComment.creator" placeholder="creator">

                <input type="text" v-model="newComment.content" placeholder="content">

                <input type="text" v-model="newComment.bug" placeholder="bug">

                <button type="submit">add a note</button>
              </form>
            </div>
            <button>debugged</button>
            <!--at click delete bug, and pass id-->
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
      return {
        newComment: {
          creator: "",
          content: "",
          bug: ""
        }
      };
    },
    mounted() {
      this.$store.dispatch("getBugs")
    },
    computed: {
      newBug() {
        return this.$store.state.newBug;
      },
      selectedNewbug() {
        return this.$store.state.newBug;
      },
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {
      selectNewbug(id) {
        this.$store.dispatch("setNewbug", id);
      },
      addNote(id) {
        let commentToCreate = this.newComment
        commentToCreate.bug = id
        this.$store.dispatch('addComment', this.newComment)
      },
      getComments(id) {
        this.$store.dispatch('getComments', id)
      }
    }

  };
</script>

<style>