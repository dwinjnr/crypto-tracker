<template>
  <v-flex xs12 sm10 offset-sm1>
    <v-card raised hover>
      <v-container>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
          name="input-10-1"
          label="Enter your password"
          hint="At least 8 characters"
          v-model="password"
          min="8"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          counter
          required
          ></v-text-field>

          <v-btn
            @click="submit"
            :disabled="!valid"
          >
            Log In
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    e1: true,
    password: ''
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>
