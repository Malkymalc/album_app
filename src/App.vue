<template>
  <div class="container">
    <header>
      <h1>Albums and Users</h1>
      <nav>
        <h2>Navigation goes here</h2>
      </nav>
      <hr>
    </header>
    <main>
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
