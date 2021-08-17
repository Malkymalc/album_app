<template>
  <div>
    <h1>User List</h1>

    <ul class="list-group">
      <li 
      class="list-group-item"
      v-for="user in allUsers"
      :key="user.id"
      >
        <div class="card">
          <h3 class="card-header">{{user.name}}</h3>
          <div class="card-body">
            <p class="card-text">Here is some dummy text</p>
            <router-link :to="`/users/${user.id}`" class="btn btn-primary">
              View User Profile
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'UserList',
  computed: {
    allUsers() {
      const users = this.$store.state.users.allUsers;
      return users;
    },
  },
}
</script>