<template>
  <v-container fill-height>
    <v-dialog
      v-model="congrats"
      width="500"
    >
      <ordered :items="items"/>
    </v-dialog>
    <v-row justify="center">
      <v-col
        class="d-flex align-center justify-center"
        v-for="(item, i) in items.slice(0,5)"
        :key="i"
      >
        <v-window v-model="item.step" class="rounded-sm">
          <v-window-item :value="1" class="rounded-sm">
            <v-sheet rounded color="black" style="padding: 2px;">
              <v-card :height="cardHeight" :width="cardWidth" color="grey lighten-4">
                <v-toolbar :color="item.color" flat>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <!-- <v-card-title>
                  <div :class="`${item.color}--text text-button`">{{ item.color }} card</div>
                  <v-spacer></v-spacer>
                  <v-avatar :color="item.color"></v-avatar>
                </v-card-title> -->
                <v-card-actions></v-card-actions>
                <v-card-actions></v-card-actions>
                <v-card-actions>
                  <v-text-field
                    hide-details="true"
                    outlined v-model="item.attempt"
                    :error="item.error" @input="item.error = false"
                  ></v-text-field>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn @click="check(item)" text>Vérifier</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-window-item>
          <v-window-item :value="2" class="rounded-sm">
            <v-sheet rounded color="black" style="padding: 2px;">
              <v-card class="d-flex align-center justify-center" :color="item.color" :height="cardHeight" :width="cardWidth">
                <v-card-title class="text-h3">{{ item.value }}</v-card-title>
              </v-card>
            </v-sheet>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        class="d-flex align-center justify-center"
        v-for="(item, i) in items.slice(5,9)"
        :key="i"
      >
        <v-window v-model="item.step" class="rounded-sm">
          <v-window-item :value="1" class="rounded-sm">
            <v-sheet rounded color="black" style="padding: 2px;">
              <v-card :height="cardHeight" :width="cardWidth" color="grey lighten-4">
                <v-toolbar :color="item.color" flat>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <!-- <v-card-title>
                  <div :class="`${item.color}--text text-button`">{{ item.color }} card</div>
                  <v-spacer></v-spacer>
                  <v-avatar :color="item.color"></v-avatar>
                </v-card-title> -->
                <v-card-actions></v-card-actions>
                <v-card-actions></v-card-actions>
                <v-card-actions>
                  <v-text-field
                    hide-details="true"
                    outlined v-model="item.attempt"
                    :error="item.error" @input="item.error = false"
                  ></v-text-field>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn @click="check(item)" text>Vérifier</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-window-item>
          <v-window-item :value="2" class="rounded-sm">
            <v-sheet rounded color="black" style="padding: 2px;">
              <v-card class="d-flex align-center justify-center" :color="item.color" :height="cardHeight" :width="cardWidth">
                <v-card-title class="text-h3">{{ item.value }}</v-card-title>
              </v-card>
            </v-sheet>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Ordered from '../components/Ordered.vue';

export default {
  components: { Ordered },
  data: () => ({
    congrats: false,
    dialog: false,
    items: [
      { color: "green", valid: false, step: 1, value: 'Q', attempt: '', code: 'F5G3', error: false },
      { color: "white", valid: false, step: 1, value: 'D', attempt: '', code: 'DES', error: false },
      { color: "red", valid: false, step: 1, value: 'I', attempt: '', code: 'IVX', error: false },
      { color: "yellow", valid: false, step: 1, value: 'U', attempt: '', code: 'MSXA', error: false },
      { color: "purple", valid: false, step: 1, value: 'L', attempt: '', code: '2', error: false },
      { color: "pink", valid: false, step: 1, value: 'U', attempt: '', code: 'BRELAN', error: false },
      { color: "blue", valid: false, step: 1, value: '', attempt: '', code: '371', error: false },
      { color: "orange", valid: false, step: 1, value: 'E', attempt: '', code: '1931', error: false },
      { color: "brown", valid: false, step: 1, value: '', attempt: '', code: '225', error: false },
    ],
    cardHeight: 240,
    cardWidth: 180
  }),
  methods: {
    check (item) {
      if (item.attempt === item.code ) {
        item.valid = !item.valid;
        item.step = 2;
      } else {
        item.error = true;
      }
      this.solved()
    },
    solved () {
      let counter = 0;
      for (let item of this.items) {
        if (item.valid) {
          counter++
        }
      }
      if (counter === this.items.length) {
        this.congrats = true
      }
    },
    show () { this.dialog = true }
  }
}
</script>
