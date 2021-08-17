<template>
  <div>
    <h1>Home</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, possimus! Quisquam itaque placeat autem nam est obcaecati maxime soluta, a earum possimus aut totam doloremque adipisci, ratione facere odio perferendis.</p>

    <router-link to="/albums">Albums</router-link>
    <hr>
    <router-link to="/users">Users</router-link>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>