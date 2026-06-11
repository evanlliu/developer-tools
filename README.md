# Developer Tools v1.1.2

静态网页开发工具箱，支持中文 / English，支持 PC 和移动端，可部署到 GitHub Pages。

## 本版本更新

- 左侧菜单中的预留工具已开始实现。
- 新增进制转换工具。
- 新增二维码和条形码生成器。
- 新增正则表达式验证工具。
- 新增字母转换器，包含大小写、空格、下划线、中横线、清除符号等常用转换。
- 新增格式化工具，支持 JSON、HTML、CSS、JavaScript、XML 的格式化和压缩。
- 保留原有 String Concatenation、Excel ⇔ JSON、PC 固定布局、移动端适配、图标和中英文切换。

## 当前工具

1. 字符串拼接 / String Concatenation
   - 支持输入格式 + 输出格式互转。
   - 支持换行、逗号、单引号、双引号、无分隔格式。

2. Excel ⇔ JSON
   - Excel 转 JSON。
   - JSON 转 Excel。
   - 支持多 Sheet。

3. 进制转换 / Base Conversion
   - 支持 2 到 36 进制整数互转。
   - 同步展示 2 / 8 / 10 / 16 常用结果。

4. 代码生成 / Code Generator
   - 二维码生成。
   - 条形码生成。
   - 支持 PNG / SVG 下载。

5. 正则表达式验证 / Regular Expression Validation
   - 支持全局、忽略大小写、多行模式。
   - 显示匹配数量、位置、分组和高亮预览。

6. 字母转换器 / Letter Converter
   - 全大写、全小写、首字母大写、首字母小写、句子首字母大写、标题大小写。
   - 空格与下划线互转、中横线与下划线互转、清除符号、清除空格。

7. 格式化工具 / Beautification Tools
   - JSON / HTML / CSS / JavaScript / XML 格式化。
   - JSON / HTML / CSS / JavaScript / XML 压缩。

## 部署

上传整个项目到 GitHub Pages 即可。

当前使用 CDN：

- jQuery
- xlsx.full.min.js
- qrcodejs
- JsBarcode
- js-beautify

如果公司内网访问 CDN 不稳定，可以把这些 JS 下载到本地，再把 `index.html` 中的 CDN 地址改成本地路径。

## v1.1.2

- 修正 v1.1.0 新增功能后导致的 UI 风格变化问题。
- 页面视觉样式已回退并保持 v1.0.9 风格。
- 保留 v1.1.0 新增的进制转换、代码生成、正则验证、字母转换器、格式化工具功能。
