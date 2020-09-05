<template>
  <ul>
    <li v-for="u in users" :key="u.id">
      {{ u }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: [], // これをtemplate側で表示してね
    }
  },
  async mounted () {
    await this.fetchUsers()
  },
  methods: {
    // nuxt/axiosが入っている前提
    async fetchUsers () {
      try {
        const response = await this.$axios.get('http://localhost:3000/users')
        this.users = response.data
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
    },
  },
}
</script>
