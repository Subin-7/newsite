<template>
    <div class="home-background">
      <div class="content">
        <p class="subtitle">당신은 한 권의 책을 집어 듭니다. </p>
          <p class="subtitle">책의 표지는 어떤 모습인가요?</p>
        <button class="start-button" @click="selectSection('A')">밝고 화려한 색상</button><br>
      <!-- B 버튼 -->
        <button class="start-button" @click="selectSection('B')">어두우면서 심오한 그림</button><br>
      <!-- C 버튼 -->
        <button class="start-button" @click="selectSection('C')">단순하고 깔끔한 디자인</button><br>
      <!-- D 버튼 -->
        <button class="start-button" @click="selectSection('D')">복잡하고 상세한 패턴</button><br>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'SecondQuestion',
    methods: {
      selectSection(section) {
      axios.post('http://localhost:8080/api/section2', { section: section })
        .then(response => {
          console.log(response.data);
          // Here we push the router to the new path
          this.$router.push({ name: 'ThirdQuestion' });
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap');
  
  
  .home-background {
    position: relative;
    background-image: url('@/assets/question_2.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  }
  
  .home-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #fff;
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
  
  .subtitle {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  
  .title {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    font-weight: 200;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem; /* Add space above the button */
  }
  
  .start-button {
    width: 100%;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 20px;
    color: rgb(255, 255, 255);
    background-color: #4a68a8; /* A nice blue color */
    border: none;
    border-radius: 15px; /* Rounded corners */
    cursor: pointer;
    transition: background-color 0.3s ease; /* Transition for a smooth color change */
  }
  
  .start-button:hover {
    background-color: #2980b9; /* A darker blue on hover */
  }
  </style>
  