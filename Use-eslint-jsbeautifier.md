# Hướng dẫn sử dụng style guide

## Table of contents

* [Cài đặt ESLint](#cài-đặt-eslint)
* [Cài đặt các plugins cho Atom](#cài-đặt-các-plugins-cho-atom)
* Cài đặt các plugins cho Sublime Text
* [Thiết lập cấu hình cho linter-eslint](#thiết-lập-cấu-hình-cho-eslint)
* [Thiết lập cấu hình cho atom-beautify](#thiết-lập-cấu-hình-cho-atom-beautify)

#*

## Cài đặt ESLint

Để chạy được ESLint, máy tính của bạn phải có node.js, do đó bước đầu tiên các bạn cần làm là vào [nodejs.org](https://nodejs.org) và tiến hành cài đặt phiên bản node.js mới nhất. Tùy theo hệ điều hành, các bạn có thể tải file .msi, .pkg hoặc build từ source.

Sau khi có node.js, chúng ta cài eslint:

Windows:

```
npm install -g eslint
```

![Install eslint in Windows 10](http://i.imgur.com/OpmaRRB.png)

Linux:

```
sudo npm install -g eslint
```

![Install eslint in Linux Mint 17.3](http://i.imgur.com/y4sxoN0.png)


Từ đây, quá trình cài đặt các plugin sẽ diễn ra tương đối giống nhau trên các hệ điều hành.


*Note: _Vì hệ thống package của Sublime đang có issue nên mình sẽ bổ sung sau. Tạm thời chúng ta xem xét Atom trước._*


## Cài đặt các plugins cho Atom

Chúng ta sẽ cần 3 plugins: [linter](https://github.com/atom-community/linter), [linter-eslint](https://github.com/AtomLinter/linter-eslint), và [atom-beautify](https://github.com/Glavin001/atom-beautify).

Vào Edit --> Preferences --> Install:

![Start installing](http://i.imgur.com/NIfXIwd.png)

Trong ô "Search packages" gõ "linter", Enter, kéo xuống tìm đúng package có tên linter và nhấn install:

![Search and install linter](http://i.imgur.com/9JDqM8j.png)

Làm tương tự với linter-eslint và atom-beautify.

![Search and install linter-eslint](http://i.imgur.com/4p6UYaK.png)

![Search and install atom-beautify](http://i.imgur.com/frKAMBf.png)

## Thiết lập cấu hình cho ESLint

Bây giờ, các bạn có thể dùng git để lấy xuống repository chứa các file cấu hình cần thiết. Hoặc, [download file zip](https://github.com/GreenGlobalDevs/node-style-guide/archive/master.zip).

[https://github.com/GreenGlobalDevs/node-style-guide](https://github.com/GreenGlobalDevs/node-style-guide)

Trong đó, các bạn sẽ thấy 1 file ".eslintrc". Đây là file cấu hình của ESLint, nơi chúng ta quy định các rules sao cho khớp với convension. Chúng ta sẽ đặt file này ở thư mục gốc của mỗi dự án. Khi mở folder dự án bằng Atom hoặc Sublime Text, ESLint sẽ hoạt động.

Hình sau, mình mở thư mục dự án "node-style-guide" và file /examples/bad.js, kết quả rất tệ:

![bad.js](http://i.imgur.com/hFoz5LS.png)


Đến đây, chỉ cần sửa lại code sao cho không còn chấm đỏ nào nữa là được :D

Nếu script quá dài, làm thủ công mất thời gian, chúng ta có thể dùng [atom-beautify](https://github.com/Glavin001/atom-beautify) hỗ trợ tự động format.


## Thiết lập cấu hình cho atom-beautify

Cũng giống như eslint-linter, atom-beautify đọc cấu hình trong file ".jsbeautifyrc" ở gốc thư mục, mỗi khi bạn nhấn tổ hợp phím "Ctrl+Alt+B", plugin này sẽ định dạng lại  source code. Khả năng của atom-beautify khá giới hạn, nên có thể bạn vẫn phải sửa thêm bằng tay.


Tóm lại, để theo sát convension, chúng ta sẽ thêm 2 files cấu hình .eslintrc và .jsbeautifyrc vào gốc thư mục dự án. Sau đó, các plugins linter-eslint và atom-beautify sẽ giúp chúng ta xử lý khoảng 80% công việc chuẩn hóa.


