<template>
  <h2>computed 和 watch</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:<input type="text" placeholder="請輸入姓氏" v-model="user.firstName"/><br/>
    名字:<input type="text" placeholder="請輸入名字" v-model="user.lastName"/><br/>
  </fieldset>
  <fieldset>
    <legend>計算屬性和監視的範例</legend>
    姓名:<input type="text" placeholder="顯示姓名" v-model="fullName1"/><br/>
    姓名:<input type="text" placeholder="顯示姓名" v-model="fullName2"/>(get & set)<br/>
    姓名:<input type="text" placeholder="顯示姓名" v-model="fullName3"/>(watch)<br/>
  </fieldset>

</template>

<script setup lang="ts">

  import { computed, reactive, watch, ref, watchEffect } from 'vue'

  const user = reactive({
    firstName: '東方',
    lastName: '不敗'
  })

  // 透過 computed 計算顯示
  const fullName1 = computed(() => {
    return user.firstName + '_' + user.lastName
  })

  // get 和 set 使用
  const fullName2 = computed({
    get(){
      return user.firstName + '_' + user.lastName
    },
    set(val: String){
      const names = val.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    }
  })

  // watch

  // immediate: true, 在一開始載入時會執行一次
  // deep: true, 深度監視
  const fullName3 = ref('')
  watch(user, ({firstName, lastName}) => {
    fullName3.value = firstName + '_' + lastName
  }, {immediate: true, deep: true})

  // 也是監視, 比watch好, 無需設定immediate, 本身就會默認監視一次
  // watchEffect(() => {
  //   fullName3.value = user.firstName + '_' + user.lastName
  // })

  // 監視fullName3的數據, 改變firstName 和 lastName, 搭配watch
  watchEffect(() => {
    const names = fullName3.value.split('_')
    user.firstName = names[0]
    user.lastName = names[1]
  })

  // watch 監視多個數據
  // watch([user.firstName, user.lastName], () => {
  //   // 這裡的代碼沒有執行, 因為user.firstName, user.lastName,不是響應式數據
  //   console.log('===')
  // })
  
  // 當使用watch監視非響應式數據時, 需用callback改寫
  watch([() => user.firstName, () => user.lastName], () => {
    console.log('===')
  })
  
</script>