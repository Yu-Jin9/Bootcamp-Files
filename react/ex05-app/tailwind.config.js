/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // 예시: 파란색
        secondary: "#FBBF24", // 예시: 노란색
        accent: "#6EE7B7", // 예시: 민트색
        // 추가 색상
        customGray: "#6B7280", // 회색
        customRed: "#EF4444", // 빨간색
      },
    },
  },
  plugins: [],
};
