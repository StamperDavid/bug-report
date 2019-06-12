<template>
  <div>
    <div class="card-body">
      <h5>closed: {{bug.closed}}</h5>
      <h5>title: {{bug.title}}</h5>
      <h5>description: {{bug.description}}</h5>
      <h5>creator: {{bug.creator}}</h5>
      <h5>note: {{bug.note}}</h5>
    </div>
    <ul>
      <li v-for="comment in comments">
        {{comment.content}}
        <button @click="deleteComment(comment)">Delete</button>
      </li>
    </ul>
    <div>
      <form v-if="!bug.closed" @submit.prevent=" addNote(bug._id)" class="form">

        <input type="text" v-model="newComment.creator" placeholder="creator">

        <input type="text" v-model="newComment.content" placeholder="content">

        <input type="text" v-model="newComment.bug" placeholder="bug">

        <button type="submit">add a note</button>
      </form>
    </div>
    <button v-if="!bug.closed" @click="deleteBug(bug._id)">close bug</button>
  </div>
</template>

<script>
  export default {
    name: "bugdetails",
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
      this.$store.dispatch("getBugById", this.$route.params.id);
      this.$store.dispatch('getComments', this.$route.params.id)
    },
    computed: {
      bug() {
        return this.$store.state.bug
      },
      comments() {
        return this.$store.state.comments
      },
    },
    methods: {
      deleteBug(id) {
        this.$store.dispatch("deleteBug", id)
      },
      addNote(id) {
        let commentToCreate = this.newComment
        commentToCreate.bug = id
        this.$store.dispatch('addComment', this.newComment)
      },
      deleteComment(comment) {
        this.$store.dispatch('deleteComment', comment)
      }
    }
  }
</script>