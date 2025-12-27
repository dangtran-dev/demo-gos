Hướng dẫn chạy ứng dụng:

1. Clone source code từ repository:
    - git clone <repository_url>
    - cd <repository_folder>
2. Khởi động PostgeSQL & pgAdmin:
    - docker compose up -d
    - Tuỳ chọn ứng dụng để có thể quản lý database dễ dàng hơn.
        - (Optional) DataGrip để quản lý database trực quan hơn.
        - Mở DataGrip -> Add New Connection -> Chọn PostgreSQL -> Điền các thông tin kết nối.
3. Chạy backend (NestJS):

    - Cấu hình biến môi trường trong file `.env`.
      NODE_ENV=development

        DATABASE_HOST=localhost
        DATABASE_PORT=5432
        DATABASE_USER=postgres
        DATABASE_PASSWORD=postgresGOS
        DATABASE_NAME=database-demo-gos

        DATABASE_URL=postgresql://postgres:postgresGOS@localhost:5432/database-demo-gos?schema=public

        FRONTEND_LOCAL_URL=http://localhost:3000

    - cd backend
    - npm install
    - npx prisma generate
    - npx prisma migrate dev --name init
    - npx prisma db seed
    - npm run start:dev

4. Chạy frontend (NextJS):
    - Cấu hình biến môi trường trong file `.env`.
      NEXT_PUBLIC_API_URL=http://localhost:3333
    - cd frontend
    - npm install
    - npm run dev
5. Mở trình duyệt và truy cập ứng dụng tại địa chỉ:
    - http://localhost:3000
