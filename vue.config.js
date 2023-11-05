module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 백엔드 서버가 여기서 실행 중
        changeOrigin: true,
        logLevel: 'debug'
      },
    }
  }
};
