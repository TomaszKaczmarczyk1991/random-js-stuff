// just started learning vue

Vue.createApp({
  data() {
    return {
      firstName: 'Tomasz',
      lastName: 'Kaczmarczyk'
    }
  },
  methods: {
    fullName() {
      return `{this.firstName} {this.lastName.toUpperCase()}`
    }
  }
}).mount("#App");