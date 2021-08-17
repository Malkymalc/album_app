<template>
  <div>
      <div v-if="user" class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h2>{{user.name}}</h2>
          <router-link :to="`/users/${user.id}/edit`" class="btn btn-sm btn-primary float-right">
            Edit User
          </router-link>
        </div>

        <div class="card-body">
          <div>
            <h3>Contact Details</h3>
            <ul>
              <li class="card-text">Username: {{user.username}}</li>
              <li class="card-text">Email: {{user.email}}</li>
              <li class="card-text">Phone: {{user.phone}}</li>
              <li class="card-text">Website: {{user.website}}</li>
            </ul>
          </div>
          <hr>
          <div>
            <h3>Address</h3>
            <div>
              <span class="card-text">{{user.address.suite}},</span><br>
              <span class="card-text">{{user.address.street}},</span><br>
              <span class="card-text">{{user.address.city}}</span><br>
              <span class="card-text">{{user.address.zipcode}}</span>
            </div>
          </div>
          <hr>
          <div>
            <h3>Company Information</h3>
            <div>
              <h4 class="card-text">{{user.company.name}}</h4><br>
              <span class="card-text">"We {{randomWord}} a {{user.company.catchPhrase}}, to {{user.company.bs}}."</span><br>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'User',
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    user() {
      const allUsers = this.$store.state.users.allUsers;
      const user = allUsers.filter(user => `${user.id}` === this.id)?.[0];
      console.log('user', user);
      return user;
    },
    randomWord() {
      const randomWords = ['deploy', 'utilise', 'leverage', 'synergize with', 'exploit'];
      const randomIndex = Math.round(Math.random() * randomWords.length);
      console.log('random index: ', randomIndex);
      return randomWords[randomIndex];
    }
  },
}
</script>