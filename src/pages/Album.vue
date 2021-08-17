<template>
  <div>
    <h2>Album Details</h2>
      <div v-if="album" class="card">
        <h3 class="card-header">{{album.title}}</h3>
        <div class="card-body">
          <p class="card-text">Here is some dummy text</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Album',
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    album() {
      const allAlbums = this.$store.state.albums.allAlbums;
      const album = allAlbums.filter(album => `${album.id}` === this.id)?.[0];
      return album;
    },
  },
}
</script>