<template v-if="'NDEFReader' in window">
  <h2>NFC Import</h2>

</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import 'w3c-web-nfc'

onMounted(() => {
  // TODO: marmer 25.02.2022 Ask before override a Tag :D
  if ('NDEFReader' in window) {
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
}
)
</script>
