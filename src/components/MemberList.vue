<template>
    <div class="list row">
      <div class="col-md-8">
      </div>
      <div class="col-md-6">
        <h4>Members List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(member, index) in members"
            :key="index"
            @click="setActiveTutorial(member, index)"
          >
            {{ index }}
          </li>
        </ul>
  
      </div>
      <div class="col-md-6">
        <div v-if="currentMember">
          <h4>Member</h4>
          <div>
            <label><strong>Id:</strong></label> {{ currentMember.id }}
          </div>
          <div>
            <label><strong>Member Name:</strong></label> {{ currentMember.memberName }}
          </div>
          <div>
            <label><strong>Details:</strong></label> {{ currentMember.details }}
          </div>
  
          <router-link :to="'/Members/' + currentMember.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a member...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MemberDataService from "../services/MemberDataService";
  
  export default {
    name: "members-list",
    data() {
      return {
        members: [],
        currentMember: null,
        currentIndex: -1
      };
    },
    methods: {
      retrieveMembers() {
        MemberDataService.getAll()
          .then(response => {
            this.members = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveMembers();
        this.currentMember = null;
        this.currentMember = -1;
      },
  
      setActiveTutorial(member, index) {
        this.currentMember = member;
        this.currentIndex = member ? index : -1;
      },
  
    },
    mounted() {
      this.retrieveMembers();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>