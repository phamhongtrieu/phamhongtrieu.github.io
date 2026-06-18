# Trang Web Cá Nhân - Hồng Triệu Phạm

Chào mừng bạn đến với dự án Website cá nhân (Portfolio) chuyên nghiệp dành cho sinh viên IT / lập trình viên mới. Trang web này được xây dựng bằng công nghệ web cơ bản (HTML5, CSS3, JavaScript thuần) với mục đích giới thiệu thông tin, kỹ năng, các dự án cá nhân và cung cấp biểu mẫu liên hệ.

## 🚀 Tính năng nổi bật

* **Giao diện hiện đại (Dark-First Theme)**: Thiết kế thời thượng với phong cách tối giản, sử dụng các dải màu gradient sinh động, hiệu ứng mờ kính (glassmorphism) và đổ bóng neon phản hồi theo tương tác người dùng.
* **Hoạt ảnh & Vi tương tác (Micro-animations)**:
  * Hiệu ứng gõ chữ (Typing Effect) tự động ở phần Hero giới thiệu bản thân.
  * Hiệu ứng chạy thanh tiến độ kỹ năng (Skills progress bars) chỉ khi cuộn đến vùng hiển thị.
  * Hiệu ứng phóng to thu nhỏ hình ảnh dự án và các nút tương tác mượt mà.
  * Menu Hamburger chuyên nghiệp trên thiết bị di động.
* **Hệ thống Toast thông báo**: Khi người dùng gửi form liên hệ, một Toast thông báo tự thiết kế đẹp mắt sẽ xuất hiện để xác nhận thay vì hộp thoại alert hệ thống mặc định.
* **Responsive hoàn hảo**: Tối ưu hiển thị và thao tác trên mọi màn hình: Máy tính, Tablet, Điện thoại di động.
* **Tự động tô sáng Menu**: Menu điều hướng tự động thay đổi trạng thái active dựa theo phân đoạn (section) đang được cuộn tới trên màn hình.

---

## 📁 Cấu trúc thư mục dự án

```text
personal-website/
├── index.html                   # File HTML chính chứa nội dung và layout
├── README.md                    # File hướng dẫn (bản này)
├── assets/
│   ├── images/
│   │   ├── avatar.jpg           # Ảnh đại diện cá nhân (định dạng JPG/PNG)
│   │   └── project-placeholder.jpg # Ảnh minh họa cho các dự án mẫu
│   └── css/
│       └── style.css            # Toàn bộ mã CSS thiết kế giao diện & responsive
├── js/
│   └── main.js                  # Logic xử lý hoạt ảnh, menu di động và form liên hệ
```

---

## 🛠️ Hướng dẫn cài đặt và chạy thử trên máy tính (VS Code)

Để chạy thử website trên máy tính cá nhân bằng cách sử dụng tiện ích mở rộng **Live Server** trong VS Code, hãy làm theo các bước sau:

1. **Cài đặt VS Code**: Nếu chưa cài đặt, hãy tải và cài đặt [Visual Studio Code](https://code.visualstudio.com/).
2. **Cài đặt extension Live Server**:
   * Mở VS Code lên.
   * Nhấp chọn biểu tượng **Extensions** ở thanh công cụ bên trái (hoặc nhấn tổ hợp phím `Ctrl + Shift + X`).
   * Tìm kiếm từ khóa `Live Server` (tác giả là *Ritwick Dey*).
   * Nhấp chọn **Install** để cài đặt.
3. **Mở thư mục dự án**:
   * Nhấp chọn `File` -> `Open Folder...`
   * Chọn thư mục `personal-website/` chứa mã nguồn.
4. **Chạy website**:
   * Mở file `index.html`.
   * Nhấp chuột phải vào vùng soạn thảo code và chọn **Open with Live Server** (hoặc nhấp chọn nút **Go Live** xuất hiện ở góc dưới cùng bên phải của thanh trạng thái VS Code).
   * Trình duyệt web mặc định của bạn sẽ tự động mở trang web tại địa chỉ cục bộ (thường là `http://127.0.0.1:5500/index.html`).

---

## 🌐 Hướng dẫn đưa website lên Internet (GitHub Pages)

Để deploy website cá nhân này lên GitHub Pages hoàn toàn miễn phí và nhận một đường dẫn web dạng `https://<ten-tai-khoan>.github.io/<ten-kho-chua>/`, bạn làm theo các bước sau:

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập vào tài khoản GitHub của bạn: [github.com](https://github.com/).
2. Nhấp vào nút **New** (hoặc biểu tượng dấu cộng `+` ở góc trên cùng bên phải) để tạo một repository mới.
3. Đặt tên kho lưu trữ (Repository name), ví dụ: `personal-portfolio`.
4. Chọn chế độ **Public** (Bắt buộc phải chọn Public để sử dụng GitHub Pages miễn phí).
5. Nhấp nút **Create repository** ở cuối trang. (Không cần tích chọn Add a README file vì ta đã có sẵn).

### Bước 2: Tải code lên GitHub (Dành cho Git / VS Code Terminal)
Mở terminal tại thư mục `personal-website/` trên máy của bạn và chạy chuỗi lệnh sau:

```bash
# Khởi tạo kho Git local
git init

# Thêm tất cả file vào staging area
git add .

# Tạo commit đầu tiên
git commit -m "First commit: Initialize personal website"

# Đổi tên nhánh chính thành main
git branch -M main

# Liên kết với repository GitHub vừa tạo (thay đường dẫn bằng link repo của bạn)
git remote add origin https://github.com/hongtrieupham303/personal-portfolio.git

# Đẩy code lên GitHub
git push -u origin main
```

*(Lưu ý: Nếu bạn chưa quen dùng dòng lệnh Git, bạn có thể nhấp vào link **uploading an existing file** trên trang Repository GitHub của bạn để kéo thả trực tiếp tất cả thư mục/file của dự án lên).*

### Bước 3: Cấu hình GitHub Pages
1. Tại giao diện dự án trên GitHub, nhấp vào thẻ **Settings** (biểu tượng bánh răng ở thanh menu ngang).
2. Tại danh mục bên trái, tìm đến phần **Code and automation** và chọn **Pages**.
3. Tại phần **Build and deployment**:
   * Ở mục **Source**, chọn **Deploy from a branch**.
   * Ở mục **Branch**, nhấp chọn nhánh `main` và chọn thư mục gốc `/ (root)`.
   * Nhấp nút **Save** để lưu lại.
4. Chờ khoảng 1 đến 2 phút để GitHub tự động xử lý và build trang web. Sau đó tải lại trang này, bạn sẽ nhận được một đường link hiển thị ở phía trên phần Pages (ví dụ: `Your site is live at https://hongtrieupham303.github.io/personal-portfolio/`).

---

## 🎨 Công nghệ & Thư viện sử dụng

* **HTML5**: Dựng cấu trúc Semantic tối ưu cho SEO.
* **CSS3**: Tạo kiểu dáng giao diện tùy biến (Custom Variables, Flexbox, Grid, Media Queries, Backdrop-filter).
* **JavaScript (Vanilla)**: Xử lý hiệu ứng logic động không dùng framework bên thứ ba để đảm bảo website tải nhanh nhất.
* **Lucide Icons**: Bộ icon hiện đại tải qua CDN (`https://unpkg.com/lucide@latest`) để tối ưu hóa hình ảnh hiển thị.
* **Google Fonts**: Phông chữ chuyên nghiệp `Plus Jakarta Sans` và `Space Grotesk`.

---
Chúc bạn có một trang web cá nhân ưng ý và thu hút được nhiều nhà tuyển dụng! 🌟
Nếu bạn muốn thay đổi ảnh đại diện cá nhân, chỉ cần ghi đè file ảnh mới có tên `avatar.jpg` vào thư mục `assets/images/`.
