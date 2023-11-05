<template>
  <div class="home-background">
    <div class="content">
      <p class="subtitle">결과</p>
      <div class="description">
        <p>당신은 조용하고 심오한 사색을 즐기는 이 캐릭터는 세상을 관찰하고 의미 있는 통찰을 추구합니다. 
          평화롭고 조용한 환경에서 깊이 있는 생각에 잠길 수 있으며, 
          다른 이들에게 세상을 바라보는 새로운 관점을 제공합니다. 
          철학적이고 명상적인 면모를 가지며, 자신의 지식과 통찰을 공유하는 것을 즐깁니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageForB',
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
