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
                        <input type="text" name="memberName" required v-model="member.name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>ID:</label>
                        <input type="text" name="memberId" required v-model="member.id" class="form-control"/>
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
            member: {},
            response: ""
        }
    },
    methods: {
        memberModifySubmit(){
            var id = this.$route.params.id;
            this.$http.put(`/api/${id}/member`, this.member)
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
        var id = this.$route.params.id;
        var mid = this.$route.params.mid;
        this.$http.get(`/api/${id}/member/${mid}`)
        .then((response) => {
            this.member = response.data
        })
    },
}
</script>