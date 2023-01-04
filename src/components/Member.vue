<template>
    <div v-if="currentMember" class="edit-form">
      <h4>Member</h4>
      <form>
        <div class="form-group">
          <label for="id">ID</label>
          <input type="text" class="form-control" id="id"
            v-model="currentMember.id"
          />
        </div>
        <div class="form-group">
          <label for="memberName">Member Name</label>
          <input type="text" class="form-control" id="memberName"
            v-model="currentMember.memberName"
          />
        </div>
  
        <div class="form-group">
          <label for="details">Details</label>
          <input type="text" class="form-control" id="details"
            v-model="currentMember.details"
          />
        </div>
      </form>
  
   
  
      <button class="badge badge-danger mr-2"
        @click="deleteMember"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateMember"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a member...</p>
    </div>
  </template>
  
  <script>
  import MemberDataService from "../services/MemberDataService";
  
  export default {
    name: "currentMember",
    data() {
      return {
        currentMember: null,
        message: ''
      };
    },
    methods: {
      getMember(id) {
        MemberDataService.get(id)
          .then(response => {
            this.currentMember = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
  
  
      updateMember() {
        MemberDataService.update(this.currentMember.id, this.currentMember)
          .then(response => {
            console.log(response.data);
            this.message = 'The member was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteMember() {
        MemberDataService.delete(this.currentMember.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "members" });
            alert('The member was deleted successfully!');
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getMember(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>