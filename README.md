# Developer Tools Static Web

一个纯静态的 HTML + jQuery 开发工具箱，适合部署到 GitHub Pages。

## 已完成工具

1. String Concatenation
   - 新增“输入格式 + 输出格式”双下拉
   - 支持换行 / `xx,xx` / `'xx','xx'` / `"xx","xx"` / `xxxx` 互转
   - 例如：`'11','12','13'` 可直接转成三行 `11 / 12 / 13`

2. Excel ⇔ JSON
   - Excel 导入转 JSON
   - JSON 粘贴导出 Excel
   - 支持单 Sheet / 多 Sheet

## 部署方式

直接把本项目上传到 GitHub 仓库，并开启 GitHub Pages。

## 依赖

页面通过 CDN 引入：

- jQuery 3.7.1
- SheetJS xlsx 0.18.5

如果公司内网无法访问 CDN，可以把依赖文件下载到本地后修改 `index.html` 中的 script 引用。
