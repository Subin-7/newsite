<template>
    <div class="home-background">
      <div class="content">
        <p class="subtitle">결과</p>
        <div class="description">
          <p>당신은 활기차고 긍정적인 에너지로 가득 차 있습니다. 
            항상 새로운 것을 발견하려는 욕구와 어디서든 즐거움을 찾아내는 능력을 가지고 있습니다.
            역동적인 환경에서 빛나며, 변화와 다양성을 환영합니다. 
            대화와 활동에서 리더십을 발휘하며, 모험적인 여정에서 늘 앞장서는 인물입니다.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageForA',
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
  
  .description p {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    background: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  </style>
  