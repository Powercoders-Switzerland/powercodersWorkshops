<template>
  <div>
    <input v-model="userSubmission" placeholder="Type in here!"/>
    <p>You typed: {{ userSubmission }}</p>
    <select v-model="selected">
      <option v-bind:key="option.text" v-for="option in options" v-bind:value="option.value">
        {{option.text}}
      </option>
    </select>
    <p>You selected: {{ selected }}</p>
    <button v-on:click="handleClick">Click it real good!</button>
  </div>
</template>

<script>

export default {
  name: 'RegistrationFormComponent',
  data () {
    return {
      userInput: undefined,
      selected: 'A',
      options: [
        {
          'text': 'Click Me!',
          'value': 'A'
        },
        {
          'text': 'No, click Me!',
          'value': '2'
        },
        {
          'text': 'Ignore them, click me!',
          'value': 'iii'
        }
      ]
    }
  },
  methods: {
    handleClick() {
      alert('You really push my buttons')
    }
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
