<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h1>Welcome</h1>
        <v-btn @click="thisNeverGetsTested">Click me</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    thisNeverGetsTested () {
      return 1 + 1
    }
  }
}
</script>
