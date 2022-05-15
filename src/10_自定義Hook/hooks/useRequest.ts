// 引入 axios
import axios from 'axios'
import { ref } from 'vue'

export default function <T>(url: string) {

  const loading = ref(true)
  const data = ref<T | null>(null)
  const errorMsg = ref('')

  axios.get(url).then(response => {

    loading.value = false
    data.value = response.data

  }).catch(err => {

    loading.value = false
    errorMsg.value = err.message || '未知錯誤'

  })

  return {
    loading,
    data,
    errorMsg
  }

}