# 🛍️ E-commerce Clone Project

## 📝 Mô tả dự án

Dự án E-commerce Clone là một ứng dụng web thương mại điện tử được xây dựng bằng React, Material-UI và Node.js. Dự án này nhằm tạo ra một nền tảng mua sắm trực tuyến với đầy đủ các tính năng cơ bản của một trang thương mại điện tử.

## ✨ Tính năng chính

- 🔐 Xác thực người dùng (Đăng ký, đăng nhập, quên mật khẩu)
- 📦 Quản lý sản phẩm
- 🛒 Giỏ hàng và thanh toán
- 🔍 Tìm kiếm và lọc sản phẩm
- 📋 Quản lý đơn hàng
- 📱 Giao diện người dùng responsive

## 🛠️ Công nghệ sử dụng

### Frontend

- ⚛️ React
- 🎨 Material-UI (MUI)
- 📘 TypeScript
- 🔄 Redux (State Management)
- ⚡ Vite (Build tool)
- 🔀 React Router DOM
- 💅 Emotion (Styling)

### Backend Services

- 🐍 FastAPI (Python)
- 💚 Node.js & Express
- 🐘 PHP

## 📦 Cài đặt và Chạy dự án

### Yêu cầu hệ thống

- 💻 Node.js (version 16.x trở lên)
- 📦 npm hoặc yarn
- 🗄️ MongoDB

### Các bước cài đặt

1. Clone dự án:

```bash
git clone https://github.com/Zeno2k3/ecommerce-clone.git
cd ecommerce-clone
```

2. Cài đặt dependencies cho Frontend:

```bash
cd frontend
npm install
```

3. Cài đặt dependencies cho Backend:

```bash
cd backend/nodejs-express
npm install
```

4. Cấu hình môi trường:

- 📄 Tạo file .env trong thư mục backend dựa trên file .env.example
- ⚙️ Cập nhật các biến môi trường cần thiết

5. Chạy dự án:

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend/nodejs-express
npm run dev
```

## 📂 Cấu trúc dự án

```
├── frontend/                # Frontend - React + TypeScript
│   ├── public/
│   │   ├── image/     # Images
│   │   │   └── index.ts
│   │   ├── components/    # Shared components
│   │   │   ├── layouts/   # Layout components
│   │   │   ├── ui/       # UI components
│   │   │   └── index.ts
│   │   ├── pages/        # Pages
│   │   │   ├── auth/     # Authentication pages
│   │   │   ├── home/     # Home pages
│   │   │   └── index.ts
│   │   ├── routes/       # Route configurations
│   │   ├── services/     # API services
│   │   ├── store/        # Redux store
│   │   ├── utils/        # Utilities
│   │   │   ├── constants/
│   │   │   └── validators/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── backend/               # Backend services
│   ├── fastapi/          # FastAPI service
│   ├── nodejs-express/   # Express.js service
│   └── php/              # PHP service
└── README.md
```

## 🤝 Đóng góp

Mọi đóng góp nhằm cải thiện dự án đều được chào đón. Vui lòng tuân theo quy trình sau:

1.  🍴 Fork dự án.
2.  🌿 Tạo một branch mới cho tính năng hoặc sửa lỗi của bạn (`git checkout -b feature/ten-tinh-nang`).
3.  💾 Commit các thay đổi của bạn (`git commit -m 'Mô tả ngắn gọn thay đổi'`).
4.  📤 Push branch của bạn lên repository đã fork (`git push origin feature/ten-tinh-nang`).
5.  🔄 Mở một Pull Request (PR) tới repository gốc.

Vui lòng đảm bảo code của bạn tuân thủ các nguyên tắc linting và format của dự án.

## 📄 Giấy phép

Dự án này được phân phối dưới Giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 📫 Liên hệ

Nếu có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ:

Tên của bạn - [email@example.com](mailto:email@example.com)

🌐 Liên kết dự án: [https://github.com/Zeno2k3/ecommerce-clone](https://github.com/Zeno2k3/ecommerce-clone)

---

## 🔧 Tech Stack Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
