<template>
  <div>
    <h1>Album List</h1>

    <ul class="list-group">
      <li 
      class="list-group-item"
      v-for="album in allAlbums"
      :key="album.id"
      >
        <div class="card">
          <h3 class="card-header">{{album.title}}</h3>
          <div class="card-body">
            <p class="card-text">Here is some dummy text</p>
            <router-link :to="`/albums/${album.id}`" class="btn btn-primary">
              View Album
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'AlbumList',
  computed: {
    allAlbums() {
      const albums = this.$store.state.albums.allAlbums;
      return albums;
    },
  },
}
</script>