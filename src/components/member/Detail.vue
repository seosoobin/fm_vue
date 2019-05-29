<template>
  <div>
    <h1>상세 내용</h1>
      {{member}}
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    var mid = this.$route.params.mid;
    this.$http.get(`/api/${id}/member/${mid}`)
    .then((response) => {
      this.member = response.data
    })
  },
  data: function () {
    return {
      member: {}
    }
  }
}
</script>