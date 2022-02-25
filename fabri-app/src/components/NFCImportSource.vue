<template>
  <h2>NFC Import</h2>

</template>

<script lang="ts" setup>

import { onMounted } from 'vue'

alert('run')
onMounted(() => {
  // TODO: marmer 25.02.2022 Ask before override a Tag :D
  alert('mounted')
  if ('NDEFReader' in window) {
    alert('featureExists')
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
