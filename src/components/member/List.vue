
<template>
    <div>
        <h1>members</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
                <td>Actions</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="member in members" :key="member._id">
                    <td>{{ member._id }}</td>
                    <td>{{ member.name }}</td>
                    <td>{{ member.id }}</td>
                    <td><router-link :to="{name: 'MemberDetail', params: { mid: member._id}}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  created () {
    const id = this.$route.params.id;
    this.$http.get(`/api/${id}/member`)
    .then((response) => {
      this.members = response.data
    })
  },
  data () {
    return {
      //id: this.$route.params.id,
      members: []
    }
  }
}
</script>