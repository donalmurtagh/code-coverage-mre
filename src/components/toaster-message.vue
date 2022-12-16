<template>
  <v-snackbar
    v-model="showMessage"
    top
    :timeout="timeout"
    :color="messageStatus">
    {{ messageText }}
    <template #action>
      <v-btn
        text
        @click="hideAppMessage"
        id="close-btn">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { eventBus, eventTypes } from '@/utils/event-bus'

export default {
  data () {
    return {
      messageStatus: '',
      messageText: '',
      showMessage: false,
      timeout: null
    }
  },
  created () {
    eventBus.$on(eventTypes.displayMessage, appMessage => {
      this.messageStatus = appMessage.status
      this.messageText = appMessage.text
      this.timeout = appMessage.timeout
      this.showMessage = true
    })
  },
  methods: {
    hideAppMessage () {
      this.messageStatus = ''
      this.messageText = ''
      this.showMessage = false
    }
  }
}
</script>