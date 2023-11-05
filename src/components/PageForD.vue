<template>
  <div class="home-background">
    <div class="content">
      <p class="subtitle">결과</p>
      <div class="description">
        <p>이 캐릭터는 창의적이고 예술적인 감각이 뛰어납니다. 
          안락하고 영감이 가득한 환경에서 최고의 작품을 창조합니다. 
          주변 세계를 독특하고 창의적인 방식으로 해석하며, 
          자신만의 스타일과 아이디어로 새로운 트렌드를 선도합니다. 
          깊은 감정과 풍부한 상상력으로 세상에 아름다움을 더합니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageForD',
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
