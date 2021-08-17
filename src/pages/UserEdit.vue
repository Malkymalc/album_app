<template>
  <div>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h2>{{name}}</h2>
          <button :to="`/users/${id}/edit`" class="btn btn-sm btn-primary float-right"
          @click.prevent="updateUserDetails"
          @keypress.prevent.enter="updateUserDetails"
          >
            Save
          </button>
        </div>

        <form class="card-body">
          <fieldset>
            <legend>Personal Details</legend>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="name" id="name" name="name" autocomplete="name">
              <label for="name">Name</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="username" id="username" name="username" autocomplete="username">
              <label for="username">Username</label>
            </div>
            <div class="form-floating">
              <input type="email" class="form-control" v-model="email" id="email" name="email" autocomplete="email">
              <label for="email">Email</label>
            </div>
            <div class="form-floating">
              <input type="tel" class="form-control" v-model="phone" id="phone" name="phone" autocomplete="tel">
              <label for="phone">Phone</label>
            </div>
            <div class="form-floating">
              <input type="url" class="form-control" v-model="website" id="website" name="website" autocomplete="url">
              <label for="website">Website</label>
            </div>
          </fieldset>
          <hr>
          <fieldset>
            <legend>Address</legend>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="suite" id="suite" name="suite" autocomplete="address-line1">
              <label for="suite">Suite</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="street" id="street" name="street" autocomplete="address-line2">
              <label for="street">Street</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="city" id="city" name="city" autocomplete="country-name">
              <label for="city">City</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="zipcode" id="zipcode" autocomplete="postal-code">
              <label for="zipcode">Zipcode</label>
            </div>
          </fieldset>
          <hr>
          <fieldset>
            <legend>Company Information</legend>
              <div class="form-floating">
                <input type="text" class="form-control" v-model="companyName" id="company-name" name="company-name" autocomplete="organization">
                <label for="company-name">Company Name</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" v-model="companyCatchPhrase" id="company-catchphrase" name="company-catchphrase" style="height: 100px"></textarea>
                <label for="company-catchphrase">Their Product</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" v-model="companyBs" id="city" name="city" style="height: 100px"></textarea>
                <label for="city">Their results</label>
              </div>
          </fieldset>
          <hr>
          <div class="d-grid gap-2">
            <input 
            type="submit" class="btn btn-primary" value="Save" 
            @click.prevent="updateUserDetails"
            @keypress.prevent.enter="updateUserDetails">
          </div>
          <hr>
        </form>
      </div>
  </div>
</template>

<script>

export default {
  name: 'User',
  data: () => ({
    _id: null,
    _rev: null,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    suite: '',
    street: '',
    city: '',
    zipcode: '',
    companyName: '',
    companyCatchPhrase: '',
    companyBs: '',
  }),
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  mounted() {
    const allUsers = this.$store.state.users.allUsers;
    const user = allUsers.filter(user => `${user.id}` === this.id)?.[0];
    console.log('user', user);
    this.setInitialUserData(user);
  },
  computed: {
    userObjectToSave() {
      return ({
        _id: this._id,
        _rev: this._rev,
        id: this.id,
        name: this.name,
        username: this.username,
        email: this.email,
        phone: this.phone,
        website: this.website,
        address: {
          suite: this.suite,
          street: this.street,
          city: this.city,
          zipcode: this.zipcode,
        },
        company: {
          name: this.companyName,
          catchPhrase: this.companyCatchPhrase,
          bs: this.companyBs,
        }
      });
    },
  },
  methods: {
    setInitialUserData(userData) {
      this._id = userData._id;
      this._rev = userData._rev;
      this.name = userData.name;
      this.username = userData.username;
      this.email = userData.email;
      this.phone = userData.phone;
      this.website = userData.website;
      this.suite = userData.address.suite;
      this.street = userData.address.street;
      this.city = userData.address.city;
      this.zipcode = userData.address.zipcode;
      this.companyName = userData.company.name;
      this.companyCatchPhrase = userData.company.catchPhrase;
      this.companyBs= userData.company.bs;
    },
    updateUserDetails() {
    const userObject = this.userObjectToSave;
    this.$store.dispatch('users/updateUserData', userObject);
    this.$router.push(`/users/${this.id}`);
    }
  },
}
</script>