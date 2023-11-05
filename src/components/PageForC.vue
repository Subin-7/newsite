<template>
  <div class="home-background">
    <div class="content">
      <p class="subtitle">결과</p>
      <div class="description">
        <p>조직적이고 체계적인 접근을 선호하는 이 캐릭터는 복잡한 문제를 해결하는 데 뛰어난 능력을 가집니다.
           분석적 사고와 세부 사항에 대한 주의로, 팀을 성공으로 이끌 수 있는 전략을 수립합니다.
            협동을 중시하며, 다른 사람들과의 협력을 통해 목표를 달성하는 능력이 탁월합니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageForC',
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
