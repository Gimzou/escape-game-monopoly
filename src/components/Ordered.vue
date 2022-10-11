<template>
  <v-card color="grey lighten-3" class="pa-2 d-flex align-center" height=375>
    <v-container>
      <v-row>
        <v-col>
          <v-card flat outlined>
            <v-card-text class="text--primary">Bravo ! Utilisez ces lettres pour trouver la combinaison gagnante !</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols=12 class="d-flex align-center justify-center">
          <v-item v-for="(item, i) in items"
          :key="i">
            <v-card outlined v-if="item.value.length === 1" class="ma-2 pa-4">
              {{ item.value }}
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-row align=center justify=center>
        <v-col class='"d-flex justify-center ma-auto'>
            <v-card flat outlined>
              <v-card-title>
                <audio controls class="ma-auto">
                  <source src="../assets/final.mp3">
                </audio>
              </v-card-title>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  data: () => ({
  }),
  props: [ 'items' ]
}
</script>
