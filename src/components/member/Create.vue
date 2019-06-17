<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Create Member</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="memberCreateSubmit">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" required v-model="member.name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>ID:</label>
                        <input type="text" name="id" required v-model="member.id" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Register"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            member: {
                name: "",
                id:"",
            },
            response: ""
        }
    },
    methods: {
        memberCreateSubmit(){
            var id = this.$route.params.id;
            this.$http.post(`/api/team/${id}/member`, this.member)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err.message);
            });
            
            this.$router.push({name: "MemberList"});
        }
    },
    created() {
        console.log(this.member);
    },
}
</script>