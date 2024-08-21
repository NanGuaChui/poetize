<template>
  <div style="padding-top: 80px">
    <textarea style="width: 100%; height: 100px" @input="onTextChange"></textarea>
  </div>
  <ul>
    <template v-for="item in data" :key="item">
      <li>
        <a href="javascript:void(0)" @click="copyTextToClipboard(item)">{{ item }}</a>
      </li>
    </template>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import defaultData from './data.json'

const data = ref(defaultData)

const onTextChange = ({ target }) => {
  const value = target.value
  data.value = value
    .replace(/[\r\n]/g, ' ')
    .replaceAll('   ', ' ')
    .replaceAll('  ', ' ')
    .split(' ')
}

const copyTextToClipboard = async text => {
  try {
    var res = text.split('：')
    text = res[1] || res[0]
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      console.log('Text copied to clipboard')
    } else {
      // 回退方法
      var textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      console.log('Text copied to clipboard using fallback method')
    }
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style scoped lang="scss">
li {
  margin-bottom: 8px;
}
</style>
