<template>
    <div>
        <h1>Teams</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>_id</td>
                <td>Name</td>
                <td>ID</td>
                <td></td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="team in teams" :key="team._id">
                    <td><router-link :to="{name: 'ShowMembers', params: { id: team._id}}">{{ team._id }}</router-link></td>
                    <td>{{ team.teamName }}</td>
                    <td>{{ team.teamId }}</td>
                    <td><router-link :to="{name: 'ShowMembers', params: { id: team._id}}" class="btn btn-primary">Show</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  created () {
    this.$http.get(`/api/team`)
    .then((response) => {
      this.teams = response.data
    })
    .catch(err => {
        console.error(err.message);
    });
  },
  data () {
    return {
      //id: this.$route.params.id,
      teams: []
    }
  }
}
</script>