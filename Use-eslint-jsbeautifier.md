# Hướng dẫn sử dụng style guide

Sau khi có style guide, bước tiếp theo chúng ta sẽ cần kiểm tra các file JavaScript của mình xem đã đáp ứng đúng định dạng tiêu chuẩn hay chưa. Để làm công việc này nhanh và chính xác, các bạn nên sử dụng linter.

Thuật ngữ lint hay linter chỉ các công cụ hỗ trợ lập trình viên phát hiện nguy cơ tiềm ẩn khi soạn thảo mã nguồn. Linter đầu tiên tên trên thế giới do Stephen Curtis Johnson, một chuyên gia máy tính ở Bell Labs viết cho C vào khoảng năm 1977.

Linter đầu tiên được viết cho JavaScript là [JSLint](http://www.jslint.com/help.html) của [Douglas Crockford](https://plus.google.com/+DouglasCrockfordEsq), năm 2002. Công cụ này còn thô sơ, rất khó tính, chỉ hỗ trợ convension do tác giả của nó đưa ra. Về sau, một số tool khác xuất hiện, bắt đầu cho phép thiết lập convension theo ý muốn. Trong bài viết này, mình sẽ hướng dẫn các bạn sử dụng ESLint của Nicolas Zakas cho Sublime Text 3 và Atom 1.4.0 beta.

Cài đặt ESLint

Để chạy được ESLint, máy tính của bạn phải có node.js, do đó bước đầu tiên các bạn cần làm là vào nodejs.org và tiến hành cài đặt phiên bản node.js mới nhất. Tùy theo hệ điều hành, các bạn có thể tải file .msi, .pkg hoặc build từ source.

Sau khi có node.js, các bạn cần cài đặt Sublime Text 3 và/hoặc ATOM. Cũng tương tự như khi cài đặt node.js, 
