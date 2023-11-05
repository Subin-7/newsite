<template>
  <div class="home-background">
    <div class="content">
      <p class="subtitle">당신의 성격을 알아보는</p>
      <h1 class="title">도서관 심리테스트</h1>
      <button class="start-button" @click="startTest">시작</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    startTest() {
      this.$router.push({ name: 'FirstQuestion' }); // 'TestView'로 라우팅
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;700&display=swap');

.home-background {
  position: relative;
  background-image: url('@/assets/home.jpg'); /* Replace with your image path */
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
  background: rgba(0, 0, 0, 0.5);
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
  margin: 0;
  padding: 0;
  margin-bottom: 2rem; /* Add space above the button */
}

.start-button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: #3498db; /* A nice blue color */
  border: none;
  border-radius: 25px; /* Rounded corners */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transition for a smooth color change */
}

.start-button:hover {
  background-color: #2980b9; /* A darker blue on hover */
}
</style>
