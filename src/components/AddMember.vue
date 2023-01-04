<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="memberName">Member Name</label>
          <input
            type="text"
            class="form-control"
            id="memberName"
            required
            v-model="member.memberName"
            name="memberName"
          />
        </div>
  
        <div class="form-group">
          <label for="details">Details</label>
          <input
            class="form-control"
            id="details"
            required
            v-model="member.details"
            name="details"
          />
        </div>
  
        <button @click="saveMember" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newMember">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import MemberDataService from "../services/MemberDataService";
  
  export default {
    name: "add-member",
    data() {
      return {
        member: {
          id: null,
          memberName: "",
          details: ""
        },
        submitted: false
      };
    },
    methods: {
      saveMember() {
        var data = {
          memberName: this.member.memberName,
          details: this.member.details
        };
  
        MemberDataService.create(data)
          .then(response => {
            this.member.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newMember() {
        this.submitted = false;
        this.member = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>