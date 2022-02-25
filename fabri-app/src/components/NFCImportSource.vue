<template>
  <h2>NFC Import</h2>
  <button v-if="isNFCCapable" @click="doScan()">scan</button>
  <div v-else>Your device does not know anything about NFC</div>
</template>

<script lang="ts" setup>

import { computed } from 'vue'

const isNFCCapable = computed(() => 'NDEFReader' in window)

const doScan = () => {
  /* global NDEFReader */

  const ndef = new NDEFReader()

  ndef.scan().then(() => {
    alert('Scan started successfully.')
    ndef.onreadingerror = () => {
      alert('Cannot read data from the NFC tag. Try another one?')
    }
    ndef.onreading = event => {
      alert('NDEF message read.')
    }
  }).catch(error => {
    alert(`Error! Scan failed to start: ${error}.`)
  })
}

</script>
