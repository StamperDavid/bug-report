<template>
  <div id="newbug">
    <form>
      <label>You Found It, You Name It</label>
      <input type="text" v-model="newBug.title" required>
      <label>Describe the Bug</label>
      <textarea v-model="newBug.description"></textarea>
      <label>Reported by</label>
      <input type="text" v-model="newBug.creator" required>
      <button class="btn btn-danger" @click="createBug">Report Bug</button>

    </form>
    <div id="preview">
      <h3> Known Issue </h3>
      <p> Bug Title:{{newBug.title}}</p>
      <P>Bug Content: {{newBug.description}}</P>
      <!-- <div v-for="newBug in bugs" :key="newBug._id"> -->
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "newbug",
    data() {
      return {
        newBug: {
          title: '',
          creator: '',
          description: ''

        }
      };
    },
    computed: {
      Abug() {
        return this.$store.state.newbug;
      }
    },
    methods: {
      selectAbug(id) {
        this.$store.dispatch("setNewbug", id);
      },
      createBug() {
        let bug2create = this.newBug
        this.$store.dispatch("createbug", bug2create)
      }
    },
  }

</script>

<style>
  input[type="text"],
  textarea {
    display: block;
    width: 100%;
    padding: 5px,
  }

  label {
    display: block;
    margin: 10px 0 10px;
  }

  #preview {
    padding: 10px;
    border: 1px orangered;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }

  #addbug {
    box-sizing: 30px auto;
    max-width: 100%;
  }

  template {
    justify-content: center;
  }

  #button {
    padding-top: 10px;
  }
</style>