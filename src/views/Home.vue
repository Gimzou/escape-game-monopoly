<template>
  <v-container fill-height>
    <v-row>
        <v-col>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card class="mx-auto my-6" height=300 max-width=400>
                <v-card-subtitle>Veuillez-vous identifier</v-card-subtitle>
                <v-card-text></v-card-text>
                <v-card-text>
                  <v-text-field
                    class="px-2" v-model="username"
                    @keyup.enter="submit()" label="Nom d'utilisateur"
                    @input="clearAlert()"
                  ></v-text-field>
                  <v-text-field
                    class="px-2" v-model="password"
                    @keyup.enter="submit()" label="Mot de passe"
                    @input="clearAlert()"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <div class="pl-2 text-body-2 red--text" v-if="alert == 'error'">Nom d'utilisateur ou mot de passe incorrect.</div>
                  <v-spacer></v-spacer>
                  <v-btn @click.stop="submit" :loading="loading" text>Valider</v-btn>
                </v-card-actions>
              </v-card>
            </v-window-item>
            <v-window-item :value="2">
              <v-card class="mx-auto my-6 d-flex flex-column align-center justify-center" height=300 max-width=400>
                <v-card-actions></v-card-actions>
                <v-card-text class="text-center text-h5">
                  <v-img contain height="200" src="../components/icons/go_monopoly.svg"></v-img>
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn @click="enter()" text>Enter</v-btn>
                  <v-spacer/>
                </v-card-actions>
                <v-card-text>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
    step: 1,
    username: '',
    password: '',
    alert: '',
    loading: false
  }),
  methods: {
    clearAlert() {
      this.alert = ''
    },
    enter () {
      this.$router.push('/board')
    },
    evaluate () {
      if (this.username === this.$store.state.permissions.username & this.password === this.$store.state.permissions.password ) {
        this.step = 2
        this.$store.commit('credentials', { username: this.username, password: this.password })
      } else {
        this.alert = 'error';
      }
      this.loading = false;
    },
    submit () {
      this.loading = true;
      setTimeout(() => this.evaluate(), 2000)
    }
  }
}
</script>
