<template>
  <div class="container">
    <header>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">Album App</router-link>
          <router-link class="text-light" to="/albums">Albums</router-link>
          <router-link class="text-light" to="/users">Users</router-link>
        </div>
      </nav>
    </header>
    <main class="pt-4">
      <router-view v-if="dataLoaded"></router-view>
      <div v-else class="d-flex justify-content-center align-items-center">
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
          <span class="visually-hidden">Loading...</span>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <hr>
    </main>
    <footer>
      <h2>This is the footer</h2>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('albums/loadData');
    this.$store.dispatch('users/loadData');
  },
  computed: {
    dataLoaded() {
      const usersLoaded =  this.$store.state.users._loaded === true;
      const albumsLoaded =  this.$store.state.albums._loaded === true;
      return usersLoaded && albumsLoaded;
    },
  }
}
</script>

<style>
</style>
