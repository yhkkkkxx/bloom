// vite.config.js
export default {
    server: {
      port: 5173, // 기본 포트 5173
      
      hmr: {
        overlay: false, // 에러 오버레이 비활성화
      },
    },
    base: '/', // 기본 베이스 경로
  };
  