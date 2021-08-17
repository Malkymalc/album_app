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
              <div class="text-danger" v-if="!$v.name.required">Field is required</div>
              <div class="text-danger" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="username" id="username" name="username" autocomplete="username">
              <label for="username">Username</label>
              <div class="text-danger" v-if="!$v.username.required">Field is required</div>
              <div class="text-danger" v-if="!$v.username.minLength">Username must have at least {{$v.username.$params.minLength.min}} letters.</div>
            </div>
            <div class="form-floating">
              <input type="email" class="form-control" v-model="email" id="email" name="email" autocomplete="email">
              <label for="email">Email</label>
              <div class="text-danger" v-if="!$v.email.required">Field is required</div>
              <div class="text-danger" v-if="!$v.email.minLength">Email must have at least {{$v.email.$params.minLength.min}} letters.</div>
              <div class="text-danger" v-if="!$v.email.email">Please enter a valid email address</div>
            </div>
            <div class="form-floating">
              <input type="tel" class="form-control" v-model="phone" id="phone" name="phone" autocomplete="tel">
              <label for="phone">Phone</label>
              <div class="text-danger" v-if="!$v.phone.required">Field is required</div>
              <div class="text-danger" v-if="!$v.phone.minLength">Phone number must have at least {{$v.phone.$params.minLength.min}} characters.</div>
            </div>
            <div class="form-floating">
              <input type="url" class="form-control" v-model="website" id="website" name="website" autocomplete="url">
              <label for="website">Website</label>
              <div class="text-danger" v-if="!$v.website.required">Field is required</div>
              <div class="text-danger" v-if="!$v.website.minLength">Website address must have at least {{$v.website.$params.minLength.min}} characters.</div>
              <div class="text-danger" v-if="!$v.website.websiteAddress">Please enter a valid website address</div>
            </div>
          </fieldset>
          <hr>
          <fieldset>
            <legend>Address</legend>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="suite" id="suite" name="suite" autocomplete="address-line1">
              <label for="suite">Suite</label>
              <div class="text-danger" v-if="!$v.suite.required">Field is required</div>
              <div class="text-danger" v-if="!$v.suite.minLength">Suite must have at least {{$v.suite.$params.minLength.min}} character.</div>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="street" id="street" name="street" autocomplete="address-line2">
              <label for="street">Street</label>
              <div class="text-danger" v-if="!$v.street.required">Field is required</div>
              <div class="text-danger" v-if="!$v.street.minLength">Street must have at least {{$v.street.$params.minLength.min}} characters.</div>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="city" id="city" name="city" autocomplete="country-name">
              <label for="city">City</label>
              <div class="text-danger" v-if="!$v.city.required">Field is required</div>
              <div class="text-danger" v-if="!$v.city.minLength">Street must have at least {{$v.city.$params.minLength.min}} characters.</div>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" v-model="zipcode" id="zipcode" autocomplete="postal-code">
              <label for="zipcode">Zipcode</label>
              <div class="text-danger" v-if="!$v.zipcode.required">Field is required</div>
              <div class="text-danger" v-if="!$v.zipcode.minLength">Zipcode must have at least {{$v.zipcode.$params.minLength.min}} characters.</div>
            </div>
          </fieldset>
          <hr>
          <fieldset>
            <legend>Company Information</legend>
              <div class="form-floating">
                <input type="text" class="form-control" v-model="companyName" id="company-name" name="company-name" autocomplete="organization">
                <label for="company-name">Company Name</label>
                <div class="text-danger" v-if="!$v.companyName.required">Field is required</div>
                <div class="text-danger" v-if="!$v.companyName.minLength">Company name must have at least {{$v.companyName.$params.minLength.min}} characters.</div>
              </div>
              <div class="form-floating">
                <textarea class="form-control" v-model="companyCatchPhrase" id="company-catchphrase" name="company-catchphrase" style="height: 100px"></textarea>
                <label for="company-catchphrase">Their Product</label>
                <div class="text-danger" v-if="!$v.companyCatchPhrase.required">Field is required</div>
                <div class="text-danger" v-if="!$v.companyCatchPhrase.minLength">Company catchphrase must have at least {{$v.companyCatchPhrase.$params.minLength.min}} characters.</div>
              </div>
              <div class="form-floating">
                <textarea class="form-control" v-model="companyBs" id="city" name="city" style="height: 100px"></textarea>
                <label for="city">Their results</label>
                <div class="text-danger" v-if="!$v.companyBs.required">Field is required</div>
                <div class="text-danger" v-if="!$v.companyBs.minLength">Company bs must have at least {{$v.companyBs.$params.minLength.min}} characters.</div>
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
import { required, minLength, email } from "vuelidate/lib/validators";
const websiteAddress = (value) => {
  const websiteRegex = /[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}/
  return websiteRegex.test(value);
}

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
    this.setInitialUserData(user);
  },
    validations: {
      name:{
      required,
      minLength: minLength(4)
    },
      username:{
      required,
      minLength: minLength(4)
    },
      email:{
      required,
      minLength: minLength(4),
      email,
    },
      phone:{
      required,
      minLength: minLength(4)
    },
      website:{
      required,
      minLength: minLength(4),
      websiteAddress,
    },
      suite:{
      required,
      minLength: minLength(1)
    },
      street:{
      required,
      minLength: minLength(3)
    },
      city:{
      required,
      minLength: minLength(3)
    },
      zipcode:{
      required,
      minLength: minLength(4)
    },
      companyName:{
      required,
      minLength: minLength(2)
    },
      companyCatchPhrase:{
      required,
      minLength: minLength(7)
    },
      companyBs:{
      required,
      minLength: minLength(7)
    },
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
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      } else {
        const userObject = this.userObjectToSave;
        this.$store.dispatch('users/updateUserData', userObject);
        this.$router.push(`/users/${this.id}`);
      }
    },
  },
}

</script>