<template>  
<div class="container">
  <div class="columns">
    <div class="column col-12 tasksInfo">
      <div class="column-inner-Left">
        <h1> {{ numbersTaks }} Total tasks </h1>
      </div>
      <div class="column-inner-Right">
        <h4> {{ numberCompletdeTask }} Completed </h4>
      </div>
    </div>
    <div class="column col-12 itens">
      <div class="item" v-for="task in tasks" :key="task.text">
        <h3>{{ task.text }}</h3>
        <div class="buttonsManageTask">
          <button class="main-button" @click="removeTask"><i class="icon icon-delete"></i></button>
          <button class="main-button" @click="completedTask"><i class="icon icon-check"></i></button>
        </div>
      </div>
    </div>
    <div class="colun col-12 addTodo" v-on:keydown.enter="addTask">
      <input class="main-input" type="text" v-model="taskText">
      <button class="main-button" @click="addTask"><i class="icon icon-plus"></i></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
    taskText: '',
    
    tasks: [
      {
        text: 'Add you task',
      },
    ],
    numbersTaks: 0,
    numberCompletdeTask: 0,
  }
  },
  components: {},
  methods: {
    addTask: function (){
      if(this.taskText != ''){
      this.tasks.push({
        text: this.taskText,
        done: false
      });
      this.numbersTaks = this.numbersTaks + 1;
      this.taskText = '';
      }else{
        alert('Preencha o campo');
      }
    },
    removeTask: function (){
      this.tasks.pop();
      this.numbersTaks = this.numbersTaks - 1;
      if(this.numbersTaks < 0){
        this.numbersTaks = this.numbersTaks = 0;
      }
    },
    completedTask: function(){
      this.tasks.pop();
      this.numberCompletdeTask = this.numberCompletdeTask + 1;
      if(this.numberCompletdeTask < 0){
        this.numberCompletdeTask = this.numberCompletdeTask = 0;
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);

}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  min-height: 100vh;

}
.item {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}
.tasksInfo{
  display: flex;
  justify-content: space-between;
  align-items:center;
  text-align: center;
  padding: 10px;
  margin-bottom: auto;
}
.addTodo{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin-top: auto;
}
.columns{
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 1px 3px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  padding: 10px 40px;
  min-height:80vh;
  max-height:80vh;
}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #CCCCCC;
}
::-webkit-scrollbar-track {
    background: #CCCCCC;
}
::-webkit-scrollbar-track-piece {
    background: #CCCCCC;
}
::-webkit-scrollbar-thumb {
    background: rgba(117, 117, 117, 0.2);
    border-radius: 10px;
}
.main-button{
  padding: 8px 30px;
  border-radius:20px;
  background-color:#f98075;
  border:none;
  color:white; 
  cursor:pointer; 
}
.main-button:nth-child(1){
  margin-right: 10px;
}
.main-input{
  padding: 8px 50px;
  border-radius:20px;
  border:1px solid rgba(117, 117, 117, 0.2);
}
.main-input:nth-child(1){
  margin-right: -40px;
}
.main-input:focus{
  margin-right: 0px;
  transition:0.5s;
  border:1px solid rgba(165, 165, 165, 0.2)
}
</style>
