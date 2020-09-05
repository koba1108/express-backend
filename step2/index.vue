<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '', // これをtemplate側で表示してね
    }
  },
  async mounted () {
    await this.fetchMessage()
  },
  methods: {
    // nuxt/axiosが入っている前提
    async fetchMessage () {
      try {
        const response = await this.$axios.get('http://localhost:3000/')
        // API連携する時は、レスポンスの中身がどんな感じなのかをまず確認しましょう
        console.log('response', response)
        this.message = response.data
      } catch (e) {
        // APIを触る関数は全部 try catch で囲むくらいの理解でOK
        // エラー処理も指定がなければ下記の2行を出しとけば十分（console.errorだけでも良い）
        console.error(e)
        alert(e.message)
      } finally {
        // 成功・失敗ともに後処理の必要があれば finally が使える
        console.log('done')
      }
    },
  },
}
</script>
