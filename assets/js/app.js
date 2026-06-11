(function ($) {
  'use strict';

  const APP_VERSION = 'v1.1.2';

  const I18N = {
    zh: {
      appTitle: '开发工具箱',
      stringConcat: '字符串拼接',
      excelJson: 'Excel ⇔ JSON',
      baseConversion: '进制转换',
      generateCode: '代码生成',
      regexValidation: '正则表达式验证',
      letterConverter: '字母转换器',
      beautificationTools: '格式化工具',
      input: '输入',
      output: '输出',
      result: '结果',
      preview: '预览',
      convert: '转换',
      generate: '生成',
      validate: '验证',
      format: '格式化',
      compress: '压缩',
      copy: '复制',
      cut: '剪切',
      copied: '已复制',
      clear: '清空',
      download: '下载',
      swapToInput: '结果转输入',
      inputChip: '输入',
      outputChip: '输出',
      noInput: '请先输入内容',
      converted: '转换完成',
      generated: '生成完成',
      invalidInput: '输入内容不正确',
      invalidLibrary: '依赖库加载失败，请检查网络或改为本地引用。',
      fileName: '文件名',

      inputFormat: '输入格式',
      outputFormat: '输出格式',
      autoDetect: '自动识别',
      lineBreakFormat: '换行',
      parseCompactByChar: '无分隔文本按字符拆分',
      stringConcatDesc: '先把输入解析成数据列表，再转换成目标格式。支持换行、逗号、单引号、双引号、无分隔文本互转。',
      stringHelp: '示例：输入 1、2、3 分别换行，输出格式选择 Format(xx,xx)，得到 1,2,3；输入 \'11\',\'12\',\'13\'，输入格式选择 Format(\'xx\',\'xx\')，输出格式选择“换行”，得到 11、12、13 分别换行。',
      inputPlaceholder: '例如：\n1\n2\n3',
      outputPlaceholder: '转换结果会显示在这里',

      excelToJson: 'Excel → JSON',
      jsonToExcel: 'JSON → Excel',
      excelJsonDesc: '支持导入 Excel 转 JSON，也支持粘贴 JSON 并导出为 Excel。所有数据只在浏览器本地处理，不上传服务器。',
      chooseExcel: '选择 Excel 文件',
      selectSheet: '选择工作表',
      firstRowAsHeader: '第一行作为字段名',
      exportAllSheets: '导出全部工作表',
      convertExcelToJson: '转换为 JSON',
      downloadJson: '下载 JSON',
      jsonInput: 'JSON 输入',
      jsonPlaceholder: '例如：\n[\n  { "名称": "A", "数量": 1 },\n  { "名称": "B", "数量": 2 }\n]',
      downloadExcel: '下载 Excel',
      invalidExcel: '请先选择 Excel 文件',
      invalidJson: 'JSON 格式不正确',
      noJsonToDownload: '没有可下载的 JSON',
      noSheet: '没有读取到工作表',
      xlsxMissing: 'Excel 功能依赖 xlsx 库，请检查网络或将 xlsx.full.min.js 下载到本地引用。',
      singleSheetTip: '默认转换当前工作表；勾选“导出全部工作表”后，会按工作表名称生成 JSON 对象。',
      jsonToExcelTip: '支持 JSON 数组、对象数组、二维数组；也支持 { "表1": [...], "表2": [...] } 这种多工作表结构。',

      baseDesc: '支持 2 到 36 进制整数互转，并同步展示常用 2 / 8 / 10 / 16 进制结果。',
      sourceBase: '原始进制',
      targetBase: '目标进制',
      binary: '二进制',
      octal: '八进制',
      decimal: '十进制',
      hexadecimal: '十六进制',
      customBase: '自定义进制',
      baseInputPlaceholder: '例如：FF、1010、255',
      baseError: '请输入有效的整数，并确认字符符合所选进制。',
      commonResult: '常用结果',
      swapBase: '交换进制',

      codeGeneratorDesc: '生成二维码和条形码，适合链接、编号、工单号、物料号等内容。',
      qrCode: '二维码',
      barcode: '条形码',
      qrText: '二维码内容',
      barcodeText: '条形码内容',
      size: '尺寸',
      width: '宽度',
      height: '高度',
      barcodeFormat: '条码类型',
      displayValue: '显示文字',
      downloadPng: '下载 PNG',
      downloadSvg: '下载 SVG',
      qrcodeMissing: '二维码功能依赖 qrcodejs 库，请检查网络或改为本地引用。',
      barcodeMissing: '条形码功能依赖 JsBarcode 库，请检查网络或改为本地引用。',
      generateFailed: '生成失败，请检查输入内容和条码类型。',

      regexDesc: '输入正则表达式和测试文本，验证是否匹配，并查看匹配内容、位置和分组。',
      regexPattern: '正则表达式',
      regexFlags: '修饰符',
      regexText: '测试文本',
      regexPlaceholder: '例如：\\d+',
      regexTextPlaceholder: '在这里输入需要测试的文本',
      matchResult: '匹配结果',
      matched: '匹配成功',
      notMatched: '未匹配',
      matchCount: '匹配数量',
      regexError: '正则表达式不正确',
      globalMatch: '全局匹配',
      ignoreCase: '忽略大小写',
      multiline: '多行模式',

      letterDesc: '常用大小写、命名符号和空格清理工具。输入内容后点击按钮，结果会显示到右侧。',
      upperAll: '全大写 AB',
      lowerAll: '全小写 ab',
      capitalizeWords: '首字母大写 Aa Bb',
      lowerFirstWords: '首字母小写 aA bB',
      sentenceFirstUpper: '句子首字母大写 Aa bb',
      titleCase: '标题大小写 Title Case',
      spaceToUnderline: '空格→下划线',
      underlineToSpace: '下划线→空格',
      hyphenToUnderline: '中横线→下划线',
      underlineToHyphen: '下划线→中横线',
      removeSymbols: '清除符号',
      removeSpaces: '清除空格',

      beautifyDesc: '支持 JSON、HTML、CSS、JavaScript、XML 的格式化与压缩，适合快速整理代码片段。',
      dataType: '类型',
      sourceCode: '源代码',
      formattedCode: '处理结果',
      codePlaceholder: '在这里粘贴需要处理的内容',
      indentSize: '缩进',
      invalidFormatInput: '内容格式不正确或无法处理。',
      beautifyTip: 'JSON 和 XML 会校验格式；HTML、CSS、JavaScript 会尽量格式化，复杂压缩建议用专业构建工具。'
    },
    en: {
      appTitle: 'Developer Tools',
      stringConcat: 'String Concatenation',
      excelJson: 'Excel ⇔ JSON',
      baseConversion: 'Base Conversion',
      generateCode: 'Code Generator',
      regexValidation: 'Regular Expression Validation',
      letterConverter: 'Letter Converter',
      beautificationTools: 'Beautification Tools',
      input: 'Input',
      output: 'Output',
      result: 'Result',
      preview: 'Preview',
      convert: 'Convert',
      generate: 'Generate',
      validate: 'Validate',
      format: 'Format',
      compress: 'Compress',
      copy: 'Copy',
      cut: 'Cut',
      copied: 'Copied',
      clear: 'Clear',
      download: 'Download',
      swapToInput: 'Use output as input',
      inputChip: 'Input',
      outputChip: 'Output',
      noInput: 'Please enter content first',
      converted: 'Converted',
      generated: 'Generated',
      invalidInput: 'Invalid input',
      invalidLibrary: 'Dependency failed to load. Check the network or use local files.',
      fileName: 'File name',

      inputFormat: 'Input format',
      outputFormat: 'Output format',
      autoDetect: 'Auto detect',
      lineBreakFormat: 'Line break',
      parseCompactByChar: 'Split compact text by character',
      stringConcatDesc: 'Parse input into a value list first, then convert it to the target format. Supports line breaks, commas, single quotes, double quotes, and compact text.',
      stringHelp: 'Example: input 1, 2, 3 on separate lines and select Format(xx,xx) as output to get 1,2,3. Input \'11\',\'12\',\'13\', select Format(\'xx\',\'xx\') as input and Line break as output to get 11, 12, 13 on separate lines.',
      inputPlaceholder: 'Example:\n1\n2\n3',
      outputPlaceholder: 'The result will be shown here',

      excelToJson: 'Excel → JSON',
      jsonToExcel: 'JSON → Excel',
      excelJsonDesc: 'Import Excel and convert it to JSON, or paste JSON and export it as Excel. All data is processed locally in the browser.',
      chooseExcel: 'Choose Excel file',
      selectSheet: 'Select sheet',
      firstRowAsHeader: 'Use first row as headers',
      exportAllSheets: 'Export all sheets',
      convertExcelToJson: 'Convert to JSON',
      downloadJson: 'Download JSON',
      jsonInput: 'JSON input',
      jsonPlaceholder: 'Example:\n[\n  { "name": "A", "qty": 1 },\n  { "name": "B", "qty": 2 }\n]',
      downloadExcel: 'Download Excel',
      invalidExcel: 'Please choose an Excel file first',
      invalidJson: 'Invalid JSON format',
      noJsonToDownload: 'No JSON to download',
      noSheet: 'No sheet found',
      xlsxMissing: 'Excel functions require the xlsx library. Check the network or reference a local xlsx.full.min.js file.',
      singleSheetTip: 'By default, only the selected sheet is converted. Enable “Export all sheets” to generate a JSON object by sheet name.',
      jsonToExcelTip: 'Supports JSON arrays, object arrays, two-dimensional arrays, and multi-sheet objects like { "Sheet1": [...], "Sheet2": [...] }.',

      baseDesc: 'Convert integers between bases 2 to 36 and show common binary, octal, decimal, and hexadecimal results.',
      sourceBase: 'Source base',
      targetBase: 'Target base',
      binary: 'Binary',
      octal: 'Octal',
      decimal: 'Decimal',
      hexadecimal: 'Hexadecimal',
      customBase: 'Custom base',
      baseInputPlaceholder: 'Example: FF, 1010, 255',
      baseError: 'Enter a valid integer and make sure the characters match the selected base.',
      commonResult: 'Common results',
      swapBase: 'Swap bases',

      codeGeneratorDesc: 'Generate QR codes and barcodes for links, numbers, work orders, item numbers, and similar values.',
      qrCode: 'QR Code',
      barcode: 'Barcode',
      qrText: 'QR code content',
      barcodeText: 'Barcode content',
      size: 'Size',
      width: 'Width',
      height: 'Height',
      barcodeFormat: 'Barcode type',
      displayValue: 'Show text',
      downloadPng: 'Download PNG',
      downloadSvg: 'Download SVG',
      qrcodeMissing: 'QR code generation requires the qrcodejs library. Check the network or use a local file.',
      barcodeMissing: 'Barcode generation requires the JsBarcode library. Check the network or use a local file.',
      generateFailed: 'Generation failed. Check the content and barcode type.',

      regexDesc: 'Enter a regular expression and test text to validate matches and view matched text, positions, and groups.',
      regexPattern: 'Regular expression',
      regexFlags: 'Flags',
      regexText: 'Test text',
      regexPlaceholder: 'Example: \\d+',
      regexTextPlaceholder: 'Enter the text to test here',
      matchResult: 'Match result',
      matched: 'Matched',
      notMatched: 'Not matched',
      matchCount: 'Match count',
      regexError: 'Invalid regular expression',
      globalMatch: 'Global match',
      ignoreCase: 'Ignore case',
      multiline: 'Multiline',

      letterDesc: 'Common case conversion, naming-symbol conversion, and whitespace cleanup tools. Enter text and click a button to place the result on the right.',
      upperAll: 'UPPERCASE AB',
      lowerAll: 'lowercase ab',
      capitalizeWords: 'Capitalize Words Aa Bb',
      lowerFirstWords: 'Lower First aA bB',
      sentenceFirstUpper: 'Sentence case Aa bb',
      titleCase: 'Title Case',
      spaceToUnderline: 'Space→Underscore',
      underlineToSpace: 'Underscore→Space',
      hyphenToUnderline: 'Hyphen→Underscore',
      underlineToHyphen: 'Underscore→Hyphen',
      removeSymbols: 'Remove Symbols',
      removeSpaces: 'Remove Spaces',

      beautifyDesc: 'Format and compress JSON, HTML, CSS, JavaScript, and XML snippets for quick cleanup.',
      dataType: 'Type',
      sourceCode: 'Source code',
      formattedCode: 'Result',
      codePlaceholder: 'Paste content here',
      indentSize: 'Indent',
      invalidFormatInput: 'The content is invalid or cannot be processed.',
      beautifyTip: 'JSON and XML are validated. HTML, CSS, and JavaScript are formatted as much as possible; use a build tool for complex minification.'
    }
  };

  const state = {
    lang: localStorage.getItem('devToolsLang') || ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en'),
    currentTool: localStorage.getItem('devToolsCurrentTool') || 'string-concat',
    workbook: null,
    currentJson: ''
  };

  const tools = [
    { id: 'string-concat', titleKey: 'stringConcat', icon: '◐', render: renderStringConcat },
    { id: 'excel-json', titleKey: 'excelJson', icon: '⇄', render: renderExcelJson },
    { id: 'base-conversion', titleKey: 'baseConversion', icon: '▣', render: renderBaseConversion },
    { id: 'generate-code', titleKey: 'generateCode', icon: '⌘', render: renderCodeGenerator },
    { id: 'regex-validation', titleKey: 'regexValidation', icon: '✖', render: renderRegexValidation },
    { id: 'letter-converter', titleKey: 'letterConverter', icon: '↗', render: renderLetterConverter },
    { id: 'beautification-tools', titleKey: 'beautificationTools', icon: '▤', render: renderBeautificationTools }
  ];

  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.zh[key] || key;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function showToast(message) {
    const $toast = $('#toast');
    $toast.text(message).addClass('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => $toast.removeClass('show'), 1600);
  }

  function copyText(text, afterCopy) {
    if (!text) return;
    const done = function () {
      if (typeof afterCopy === 'function') afterCopy();
      showToast(t('copied'));
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      return;
    }
    fallbackCopy(text, done);
  }

  function fallbackCopy(text, done) {
    const $temp = $('<textarea>').val(text).appendTo('body').select();
    document.execCommand('copy');
    $temp.remove();
    done();
  }

  function applyI18n() {
    $('[data-i18n]').each(function () {
      $(this).text(t($(this).data('i18n')));
    });
    $('#appVersion').text(APP_VERSION);
    document.title = `${t('appTitle')} ${APP_VERSION}`;
    $('#langSelect').val(state.lang);
  }

  function renderMenu() {
    const html = tools.map(tool => `
      <button class="tool-menu-item ${tool.id === state.currentTool ? 'active' : ''}" type="button" data-tool-id="${tool.id}">
        <span class="tool-icon">${tool.icon}</span>
        <span>${escapeHtml(t(tool.titleKey))}</span>
      </button>
    `).join('');
    $('#toolMenu').html(html);
  }

  function renderCurrentTool() {
    const tool = tools.find(item => item.id === state.currentTool) || tools[0];
    state.currentTool = tool.id;
    $('#currentToolTitle').text(t(tool.titleKey));
    $('#content').html(tool.render(tool));
    $('.tool-menu-item').removeClass('active');
    $(`.tool-menu-item[data-tool-id="${tool.id}"]`).addClass('active');
    localStorage.setItem('devToolsCurrentTool', tool.id);
    bindToolEvents(tool.id);
  }

  function baseOptions(selected) {
    const options = [
      [2, t('binary') + ' 2'],
      [8, t('octal') + ' 8'],
      [10, t('decimal') + ' 10'],
      [16, t('hexadecimal') + ' 16']
    ];
    for (let i = 3; i <= 36; i++) {
      if (![8, 10, 16].includes(i)) options.push([i, `${t('customBase')} ${i}`]);
    }
    return options.map(([value, label]) => `<option value="${value}" ${Number(selected) === value ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('');
  }

  function renderStringConcat() {
    return `
      <div class="card tool-card string-tool-card">
        <div class="card-header compact-header">
          <h2 class="card-title">${escapeHtml(t('stringConcat'))}</h2>
          <div class="card-desc">${escapeHtml(t('stringConcatDesc'))}</div>
        </div>
        <div class="card-body tool-body string-body">
          <div class="workspace-toolbar format-row">
            <div class="field-inline">
              <label class="label" for="inputFormat">${escapeHtml(t('inputFormat'))}</label>
              <select id="inputFormat" class="form-control">
                <option value="auto">${escapeHtml(t('autoDetect'))}</option>
                <option value="lineBreak">${escapeHtml(t('lineBreakFormat'))}</option>
                <option value="comma">Format(xx,xx)</option>
                <option value="singleQuote">Format('xx','xx')</option>
                <option value="doubleQuote">Format("xx","xx")</option>
                <option value="compact">Format(xxxx)</option>
              </select>
            </div>
            <div class="field-inline">
              <label class="label" for="outputFormat">${escapeHtml(t('outputFormat'))}</label>
              <select id="outputFormat" class="form-control">
                <option value="lineBreak">${escapeHtml(t('lineBreakFormat'))}</option>
                <option value="comma" selected>Format(xx,xx)</option>
                <option value="singleQuote">Format('xx','xx')</option>
                <option value="doubleQuote">Format("xx","xx")</option>
                <option value="compact">Format(xxxx)</option>
              </select>
            </div>
            <label class="checkbox-line checkbox-inline compact-option">
              <input type="checkbox" id="splitCompactByChar" />
              <span>${escapeHtml(t('parseCompactByChar'))}</span>
            </label>
          </div>
          <div class="workspace-tip">${escapeHtml(t('stringHelp'))}</div>
          <div class="string-grid editor-grid">
            <section class="editor-panel">
              <div class="editor-head"><label class="label" for="stringInput">${escapeHtml(t('input'))}</label><span class="editor-chip">${escapeHtml(t('inputChip'))}</span></div>
              <textarea class="editor-area" id="stringInput" placeholder="${escapeHtml(t('inputPlaceholder'))}"></textarea>
            </section>
            <section class="editor-panel">
              <div class="editor-head"><label class="label" for="stringOutput">${escapeHtml(t('output'))}</label><span class="editor-chip">${escapeHtml(t('outputChip'))}</span></div>
              <textarea class="editor-area" id="stringOutput" placeholder="${escapeHtml(t('outputPlaceholder'))}" readonly></textarea>
            </section>
          </div>
          <div class="action-bar">
            <button class="btn btn-primary" type="button" id="btnStringConvert">${escapeHtml(t('convert'))}</button>
            <button class="btn" type="button" id="btnStringCopy">${escapeHtml(t('copy'))}</button>
            <button class="btn" type="button" id="btnStringSwap">${escapeHtml(t('swapToInput'))}</button>
            <button class="btn btn-danger" type="button" id="btnStringClear">${escapeHtml(t('clear'))}</button>
          </div>
        </div>
      </div>`;
  }

  function renderExcelJson() {
    return `
      <div class="card tool-card excel-tool-card">
        <div class="card-header compact-header">
          <h2 class="card-title">${escapeHtml(t('excelJson'))}</h2>
          <div class="card-desc">${escapeHtml(t('excelJsonDesc'))}</div>
        </div>
        <div class="card-body tool-body excel-body">
          <div class="tabs tool-tabs">
            <button class="tab-btn active" type="button" data-tab="excelToJsonPane">${escapeHtml(t('excelToJson'))}</button>
            <button class="tab-btn" type="button" data-tab="jsonToExcelPane">${escapeHtml(t('jsonToExcel'))}</button>
          </div>
          <div class="tab-pane active excel-pane" id="excelToJsonPane">
            <div class="workspace-toolbar excel-controls">
              <div class="field-inline file-field"><label class="label" for="excelFile">${escapeHtml(t('chooseExcel'))}</label><input class="file-input" type="file" id="excelFile" accept=".xlsx,.xls,.csv" /></div>
              <div class="field-inline sheet-field"><label class="label" for="sheetSelect">${escapeHtml(t('selectSheet'))}</label><select id="sheetSelect" class="form-control" disabled><option value="">${escapeHtml(t('selectSheet'))}</option></select></div>
              <label class="checkbox-line compact-option"><input type="checkbox" id="headerRow" checked /><span>${escapeHtml(t('firstRowAsHeader'))}</span></label>
              <label class="checkbox-line compact-option"><input type="checkbox" id="allSheets" /><span>${escapeHtml(t('exportAllSheets'))}</span></label>
            </div>
            <div class="workspace-tip">${escapeHtml(t('singleSheetTip'))}</div>
            <div class="action-bar excel-action-bar">
              <button class="btn btn-primary" type="button" id="btnExcelToJson">${escapeHtml(t('convertExcelToJson'))}</button>
              <button class="btn" type="button" id="btnCopyJson">${escapeHtml(t('copy'))}</button>
              <button class="btn" type="button" id="btnDownloadJson">${escapeHtml(t('downloadJson'))}</button>
              <button class="btn btn-danger" type="button" id="btnClearExcelJson">${escapeHtml(t('clear'))}</button>
            </div>
            <section class="editor-panel output-panel"><div class="editor-head"><label class="label" for="excelJsonOutput">${escapeHtml(t('output'))}</label><span class="editor-chip">JSON</span></div><textarea class="editor-area small" id="excelJsonOutput" placeholder="${escapeHtml(t('outputPlaceholder'))}"></textarea></section>
          </div>
          <div class="tab-pane excel-pane" id="jsonToExcelPane">
            <section class="editor-panel json-input-panel"><div class="editor-head"><label class="label" for="jsonInput">${escapeHtml(t('jsonInput'))}</label><span class="editor-chip">JSON</span></div><textarea class="editor-area" id="jsonInput" placeholder="${escapeHtml(t('jsonPlaceholder'))}"></textarea></section>
            <div class="workspace-tip">${escapeHtml(t('jsonToExcelTip'))}</div>
            <div class="action-bar json-action-bar"><label class="label" for="excelFileName">${escapeHtml(t('fileName'))}</label><input type="text" id="excelFileName" value="data.xlsx" /><button class="btn btn-primary" type="button" id="btnJsonToExcel">${escapeHtml(t('downloadExcel'))}</button><button class="btn btn-danger" type="button" id="btnClearJsonInput">${escapeHtml(t('clear'))}</button></div>
          </div>
        </div>
      </div>`;
  }

  function renderBaseConversion() {
    return `
      <div class="card tool-card base-tool-card">
        <div class="card-header compact-header"><h2 class="card-title">${escapeHtml(t('baseConversion'))}</h2><div class="card-desc">${escapeHtml(t('baseDesc'))}</div></div>
        <div class="card-body tool-body">
          <div class="workspace-toolbar">
            <div class="field-inline"><label class="label" for="sourceBase">${escapeHtml(t('sourceBase'))}</label><select id="sourceBase" class="form-control">${baseOptions(10)}</select></div>
            <div class="field-inline"><label class="label" for="targetBase">${escapeHtml(t('targetBase'))}</label><select id="targetBase" class="form-control">${baseOptions(16)}</select></div>
            <button class="btn" type="button" id="btnSwapBase">${escapeHtml(t('swapBase'))}</button>
          </div>
          <div class="editor-grid base-grid">
            <section class="editor-panel"><div class="editor-head"><label class="label" for="baseInput">${escapeHtml(t('input'))}</label><span class="editor-chip">${escapeHtml(t('sourceBase'))}</span></div><textarea class="editor-area" id="baseInput" placeholder="${escapeHtml(t('baseInputPlaceholder'))}"></textarea></section>
            <section class="editor-panel"><div class="editor-head"><label class="label" for="baseOutput">${escapeHtml(t('output'))}</label><span class="editor-chip">${escapeHtml(t('targetBase'))}</span></div><textarea class="editor-area" id="baseOutput" readonly placeholder="${escapeHtml(t('outputPlaceholder'))}"></textarea></section>
          </div>
          <div class="result-panel" id="baseCommonResult"><div class="result-title">${escapeHtml(t('commonResult'))}</div><div class="result-list muted-result">-</div></div>
          <div class="action-bar"><button class="btn btn-primary" type="button" id="btnBaseConvert">${escapeHtml(t('convert'))}</button><button class="btn" type="button" id="btnBaseCopy">${escapeHtml(t('copy'))}</button><button class="btn btn-danger" type="button" id="btnBaseClear">${escapeHtml(t('clear'))}</button></div>
        </div>
      </div>`;
  }

  function renderCodeGenerator() {
    return `
      <div class="card tool-card code-tool-card">
        <div class="card-header compact-header"><h2 class="card-title">${escapeHtml(t('generateCode'))}</h2><div class="card-desc">${escapeHtml(t('codeGeneratorDesc'))}</div></div>
        <div class="card-body tool-body code-body">
          <div class="tabs tool-tabs"><button class="tab-btn active" type="button" data-tab="qrPane">${escapeHtml(t('qrCode'))}</button><button class="tab-btn" type="button" data-tab="barcodePane">${escapeHtml(t('barcode'))}</button></div>
          <div class="tab-pane active code-pane" id="qrPane">
            <div class="workspace-toolbar"><div class="field-inline grow-field"><label class="label" for="qrText">${escapeHtml(t('qrText'))}</label><input type="text" id="qrText" value="https://" /></div><div class="field-inline"><label class="label" for="qrSize">${escapeHtml(t('size'))}</label><select id="qrSize" class="form-control"><option value="180">180</option><option value="220" selected>220</option><option value="260">260</option><option value="320">320</option></select></div></div>
            <div class="preview-layout"><div class="code-preview-box"><div id="qrPreview" class="qr-preview placeholder-preview">${escapeHtml(t('preview'))}</div></div></div>
            <div class="action-bar"><button class="btn btn-primary" type="button" id="btnGenerateQr">${escapeHtml(t('generate'))}</button><button class="btn" type="button" id="btnDownloadQr">${escapeHtml(t('downloadPng'))}</button><button class="btn btn-danger" type="button" id="btnClearQr">${escapeHtml(t('clear'))}</button></div>
          </div>
          <div class="tab-pane code-pane" id="barcodePane">
            <div class="workspace-toolbar"><div class="field-inline grow-field"><label class="label" for="barcodeText">${escapeHtml(t('barcodeText'))}</label><input type="text" id="barcodeText" value="1234567890" /></div><div class="field-inline"><label class="label" for="barcodeFormat">${escapeHtml(t('barcodeFormat'))}</label><select id="barcodeFormat" class="form-control"><option value="CODE128">CODE128</option><option value="CODE39">CODE39</option><option value="EAN13">EAN13</option><option value="UPC">UPC</option><option value="ITF">ITF</option></select></div><label class="checkbox-line"><input type="checkbox" id="barcodeDisplayValue" checked /><span>${escapeHtml(t('displayValue'))}</span></label></div>
            <div class="preview-layout"><div class="code-preview-box barcode-box"><svg id="barcodeSvg"></svg></div></div>
            <div class="action-bar"><button class="btn btn-primary" type="button" id="btnGenerateBarcode">${escapeHtml(t('generate'))}</button><button class="btn" type="button" id="btnDownloadBarcode">${escapeHtml(t('downloadSvg'))}</button><button class="btn btn-danger" type="button" id="btnClearBarcode">${escapeHtml(t('clear'))}</button></div>
          </div>
        </div>
      </div>`;
  }

  function renderRegexValidation() {
    return `
      <div class="card tool-card regex-tool-card">
        <div class="card-header compact-header"><h2 class="card-title">${escapeHtml(t('regexValidation'))}</h2><div class="card-desc">${escapeHtml(t('regexDesc'))}</div></div>
        <div class="card-body tool-body regex-body">
          <div class="workspace-toolbar regex-controls"><div class="field-inline grow-field"><label class="label" for="regexPattern">${escapeHtml(t('regexPattern'))}</label><input type="text" id="regexPattern" placeholder="${escapeHtml(t('regexPlaceholder'))}" /></div><label class="checkbox-line"><input type="checkbox" id="regexGlobal" checked /><span>${escapeHtml(t('globalMatch'))}</span></label><label class="checkbox-line"><input type="checkbox" id="regexIgnoreCase" /><span>${escapeHtml(t('ignoreCase'))}</span></label><label class="checkbox-line"><input type="checkbox" id="regexMultiline" /><span>${escapeHtml(t('multiline'))}</span></label></div>
          <div class="editor-grid regex-grid"><section class="editor-panel"><div class="editor-head"><label class="label" for="regexText">${escapeHtml(t('regexText'))}</label><span class="editor-chip">Text</span></div><textarea class="editor-area" id="regexText" placeholder="${escapeHtml(t('regexTextPlaceholder'))}"></textarea></section><section class="editor-panel"><div class="editor-head"><label class="label" for="regexResult">${escapeHtml(t('matchResult'))}</label><span class="editor-chip" id="regexStatusChip">-</span></div><textarea class="editor-area" id="regexResult" readonly></textarea></section></div>
          <div class="regex-highlight" id="regexHighlight"></div>
          <div class="action-bar"><button class="btn btn-primary" type="button" id="btnRegexValidate">${escapeHtml(t('validate'))}</button><button class="btn" type="button" id="btnRegexCopy">${escapeHtml(t('copy'))}</button><button class="btn btn-danger" type="button" id="btnRegexClear">${escapeHtml(t('clear'))}</button></div>
        </div>
      </div>`;
  }

  function renderLetterConverter() {
    const buttons = [
      ['upper', 'upperAll'], ['lower', 'lowerAll'], ['capitalize', 'capitalizeWords'], ['lowerFirst', 'lowerFirstWords'], ['sentence', 'sentenceFirstUpper'], ['title', 'titleCase'],
      ['spaceUnderline', 'spaceToUnderline'], ['underlineSpace', 'underlineToSpace'], ['hyphenUnderline', 'hyphenToUnderline'], ['underlineHyphen', 'underlineToHyphen'], ['removeSymbols', 'removeSymbols'], ['removeSpaces', 'removeSpaces']
    ];
    return `
      <div class="card tool-card letter-tool-card">
        <div class="card-header compact-header"><h2 class="card-title">${escapeHtml(t('letterConverter'))}</h2><div class="card-desc">${escapeHtml(t('letterDesc'))}</div></div>
        <div class="card-body tool-body letter-body">
          <div class="quick-button-grid">${buttons.map(([action, key]) => `<button class="btn btn-success-soft" type="button" data-letter-action="${action}">${escapeHtml(t(key))}</button>`).join('')}</div>
          <div class="editor-grid letter-grid"><section class="editor-panel"><div class="editor-head"><label class="label" for="letterInput">${escapeHtml(t('input'))}</label><span class="editor-chip">${escapeHtml(t('inputChip'))}</span></div><textarea class="editor-area" id="letterInput" placeholder="${escapeHtml(t('inputPlaceholder'))}"></textarea></section><section class="editor-panel"><div class="editor-head"><label class="label" for="letterOutput">${escapeHtml(t('output'))}</label><span class="editor-chip">${escapeHtml(t('outputChip'))}</span></div><textarea class="editor-area" id="letterOutput" readonly placeholder="${escapeHtml(t('outputPlaceholder'))}"></textarea></section></div>
          <div class="action-bar center-actions"><button class="btn" type="button" id="btnLetterCopy">${escapeHtml(t('copy'))}</button><button class="btn" type="button" id="btnLetterCut">${escapeHtml(t('cut'))}</button><button class="btn btn-danger" type="button" id="btnLetterClear">${escapeHtml(t('clear'))}</button></div>
        </div>
      </div>`;
  }

  function renderBeautificationTools() {
    return `
      <div class="card tool-card format-tool-card">
        <div class="card-header compact-header"><h2 class="card-title">${escapeHtml(t('beautificationTools'))}</h2><div class="card-desc">${escapeHtml(t('beautifyDesc'))}</div></div>
        <div class="card-body tool-body format-body">
          <div class="workspace-toolbar"><div class="field-inline"><label class="label" for="formatType">${escapeHtml(t('dataType'))}</label><select id="formatType" class="form-control"><option value="json">JSON</option><option value="html">HTML</option><option value="css">CSS</option><option value="javascript">JavaScript</option><option value="xml">XML</option></select></div><div class="field-inline"><label class="label" for="formatIndent">${escapeHtml(t('indentSize'))}</label><select id="formatIndent" class="form-control"><option value="2" selected>2</option><option value="4">4</option></select></div></div>
          <div class="workspace-tip">${escapeHtml(t('beautifyTip'))}</div>
          <div class="editor-grid format-grid"><section class="editor-panel"><div class="editor-head"><label class="label" for="formatInput">${escapeHtml(t('sourceCode'))}</label><span class="editor-chip">${escapeHtml(t('inputChip'))}</span></div><textarea class="editor-area" id="formatInput" placeholder="${escapeHtml(t('codePlaceholder'))}"></textarea></section><section class="editor-panel"><div class="editor-head"><label class="label" for="formatOutput">${escapeHtml(t('formattedCode'))}</label><span class="editor-chip">${escapeHtml(t('outputChip'))}</span></div><textarea class="editor-area" id="formatOutput" readonly placeholder="${escapeHtml(t('outputPlaceholder'))}"></textarea></section></div>
          <div class="action-bar"><button class="btn btn-primary" type="button" id="btnFormat">${escapeHtml(t('format'))}</button><button class="btn" type="button" id="btnCompress">${escapeHtml(t('compress'))}</button><button class="btn" type="button" id="btnFormatCopy">${escapeHtml(t('copy'))}</button><button class="btn" type="button" id="btnFormatSwap">${escapeHtml(t('swapToInput'))}</button><button class="btn btn-danger" type="button" id="btnFormatClear">${escapeHtml(t('clear'))}</button></div>
        </div>
      </div>`;
  }

  function parseStringItems(text, inputFormat, splitCompactByChar) {
    let raw = String(text || '').trim();
    if (!raw) return [];
    const formatMatch = raw.match(/^Format\((.*)\)$/is);
    if (formatMatch) raw = formatMatch[1].trim();
    if (inputFormat === 'compact') return splitCompactByChar ? Array.from(raw).map(item => item.trim()).filter(Boolean) : [stripPairQuote(raw)].filter(Boolean);
    if (inputFormat === 'lineBreak') return raw.split(/\r?\n/).map(item => stripPairQuote(item.trim())).filter(Boolean);
    return parseDelimitedText(raw, splitCompactByChar);
  }

  function parseDelimitedText(raw, splitCompactByChar) {
    const hasSeparator = /[,，;；\n\r\t]/.test(raw);
    if (!hasSeparator && splitCompactByChar) return Array.from(raw).map(item => item.trim()).filter(Boolean);
    const result = [];
    let buffer = '';
    let quote = null;
    let escaping = false;
    function pushBuffer() {
      let value = stripPairQuote(buffer.trim());
      if (value !== '') result.push(value);
      buffer = '';
    }
    for (let i = 0; i < raw.length; i++) {
      const ch = raw[i];
      if (escaping) { buffer += ch; escaping = false; continue; }
      if (ch === '\\') { escaping = true; continue; }
      if (quote) { if (ch === quote) quote = null; else buffer += ch; continue; }
      if (ch === '"' || ch === "'") { quote = ch; continue; }
      if (ch === ',' || ch === '，' || ch === ';' || ch === '；' || ch === '\n' || ch === '\r' || ch === '\t') { pushBuffer(); continue; }
      buffer += ch;
    }
    pushBuffer();
    return result;
  }

  function stripPairQuote(value) {
    if (value.length >= 2) {
      const first = value[0];
      const last = value[value.length - 1];
      if ((first === "'" && last === "'") || (first === '"' && last === '"')) return value.slice(1, -1);
    }
    return value;
  }

  function formatStringItems(items, formatType) {
    switch (formatType) {
      case 'lineBreak': return items.join('\n');
      case 'singleQuote': return items.map(item => `'${String(item).replace(/'/g, "\\'")}'`).join(',');
      case 'doubleQuote': return items.map(item => `"${String(item).replace(/"/g, '\\"')}"`).join(',');
      case 'compact': return items.join('');
      case 'comma': default: return items.join(',');
    }
  }

  function bindStringConcatEvents() {
    $('#btnStringConvert').on('click', function () {
      const input = $('#stringInput').val();
      if (!String(input || '').trim()) return showToast(t('noInput'));
      const items = parseStringItems(input, $('#inputFormat').val(), $('#splitCompactByChar').is(':checked'));
      $('#stringOutput').val(formatStringItems(items, $('#outputFormat').val()));
      showToast(t('converted'));
    });
    $('#btnStringCopy').on('click', () => copyText($('#stringOutput').val()));
    $('#btnStringSwap').on('click', function () { const output = $('#stringOutput').val(); if (output) { $('#stringInput').val(output); $('#stringOutput').val(''); } });
    $('#btnStringClear').on('click', () => $('#stringInput,#stringOutput').val(''));
  }

  function ensureXlsx() {
    if (typeof XLSX === 'undefined') { showToast(t('xlsxMissing')); return false; }
    return true;
  }

  function bindExcelJsonEvents() {
    bindTabs();
    $('#excelFile').on('change', function (event) {
      if (!ensureXlsx()) return;
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const data = new Uint8Array(e.target.result);
          state.workbook = XLSX.read(data, { type: 'array' });
          const names = state.workbook.SheetNames || [];
          $('#sheetSelect').html(names.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('')).prop('disabled', names.length === 0);
          if (names.length) $('#sheetSelect').val(names[0]);
          showToast(t('converted'));
        } catch (err) { console.error(err); showToast(t('invalidExcel')); }
      };
      reader.readAsArrayBuffer(file);
    });
    $('#btnExcelToJson').on('click', function () {
      if (!ensureXlsx()) return;
      if (!state.workbook) return showToast(t('invalidExcel'));
      const allSheets = $('#allSheets').is(':checked');
      const useHeader = $('#headerRow').is(':checked');
      try {
        let result;
        if (allSheets) {
          result = {};
          (state.workbook.SheetNames || []).forEach(name => { result[name] = sheetToJson(state.workbook.Sheets[name], useHeader); });
        } else {
          const sheetName = $('#sheetSelect').val();
          if (!sheetName) return showToast(t('noSheet'));
          result = sheetToJson(state.workbook.Sheets[sheetName], useHeader);
        }
        state.currentJson = JSON.stringify(result, null, 2);
        $('#excelJsonOutput').val(state.currentJson);
        showToast(t('converted'));
      } catch (err) { console.error(err); showToast(t('invalidExcel')); }
    });
    $('#btnCopyJson').on('click', () => copyText($('#excelJsonOutput').val()));
    $('#btnDownloadJson').on('click', function () { const json = $('#excelJsonOutput').val(); if (!json) return showToast(t('noJsonToDownload')); downloadBlob(json, 'data.json', 'application/json;charset=utf-8'); });
    $('#btnClearExcelJson').on('click', function () { state.workbook = null; state.currentJson = ''; $('#excelFile').val(''); $('#sheetSelect').html(`<option value="">${escapeHtml(t('selectSheet'))}</option>`).prop('disabled', true); $('#excelJsonOutput').val(''); });
    $('#btnJsonToExcel').on('click', function () {
      if (!ensureXlsx()) return;
      const raw = $('#jsonInput').val();
      if (!String(raw || '').trim()) return showToast(t('noInput'));
      try {
        const data = JSON.parse(raw);
        const wb = jsonToWorkbook(data);
        let fileName = ($('#excelFileName').val() || 'data.xlsx').trim();
        if (!/\.xlsx$/i.test(fileName)) fileName += '.xlsx';
        XLSX.writeFile(wb, fileName);
      } catch (err) { console.error(err); showToast(t('invalidJson')); }
    });
    $('#btnClearJsonInput').on('click', () => $('#jsonInput').val(''));
  }

  function sheetToJson(sheet, useHeader) { return useHeader ? XLSX.utils.sheet_to_json(sheet, { defval: '' }) : XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' }); }

  function jsonToWorkbook(data) {
    const wb = XLSX.utils.book_new();
    if (isPlainObject(data) && Object.keys(data).length && Object.values(data).every(isSheetLike)) {
      Object.keys(data).forEach(name => XLSX.utils.book_append_sheet(wb, dataToSheet(data[name]), safeSheetName(name)));
      return wb;
    }
    XLSX.utils.book_append_sheet(wb, dataToSheet(data), 'Sheet1');
    return wb;
  }

  function dataToSheet(data) {
    if (Array.isArray(data)) {
      if (data.length === 0) return XLSX.utils.aoa_to_sheet([]);
      if (Array.isArray(data[0])) return XLSX.utils.aoa_to_sheet(data);
      if (isPlainObject(data[0])) return XLSX.utils.json_to_sheet(data);
      return XLSX.utils.aoa_to_sheet(data.map(item => [item]));
    }
    if (isPlainObject(data)) return XLSX.utils.json_to_sheet([data]);
    return XLSX.utils.aoa_to_sheet([[data]]);
  }

  function isSheetLike(value) { return Array.isArray(value) || isPlainObject(value); }
  function isPlainObject(value) { return Object.prototype.toString.call(value) === '[object Object]'; }
  function safeSheetName(name) { return String(name || 'Sheet').replace(/[\\/?*\[\]:]/g, '_').slice(0, 31) || 'Sheet'; }

  function parseBigIntBase(value, base) {
    let str = String(value || '').trim().replace(/_/g, '').replace(/\s+/g, '');
    if (!str) throw new Error('empty');
    let sign = 1n;
    if (str[0] === '-') { sign = -1n; str = str.slice(1); }
    if (str[0] === '+') str = str.slice(1);
    if (base === 16 && /^0x/i.test(str)) str = str.slice(2);
    if (base === 2 && /^0b/i.test(str)) str = str.slice(2);
    if (base === 8 && /^0o/i.test(str)) str = str.slice(2);
    if (!str) throw new Error('empty');
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = 0n;
    const bigBase = BigInt(base);
    for (const ch of str.toLowerCase()) {
      const val = chars.indexOf(ch);
      if (val < 0 || val >= base) throw new Error('invalid digit');
      result = result * bigBase + BigInt(val);
    }
    return result * sign;
  }

  function bindBaseConversionEvents() {
    function convertBase() {
      const raw = $('#baseInput').val();
      if (!String(raw || '').trim()) return showToast(t('noInput'));
      try {
        const fromBase = Number($('#sourceBase').val());
        const toBase = Number($('#targetBase').val());
        const value = parseBigIntBase(raw, fromBase);
        $('#baseOutput').val(value.toString(toBase).toUpperCase());
        const rows = [
          [t('binary'), value.toString(2)],
          [t('octal'), value.toString(8)],
          [t('decimal'), value.toString(10)],
          [t('hexadecimal'), value.toString(16).toUpperCase()]
        ];
        $('#baseCommonResult .result-list').html(rows.map(row => `<div class="result-row"><span>${escapeHtml(row[0])}</span><code>${escapeHtml(row[1])}</code></div>`).join(''));
        showToast(t('converted'));
      } catch (err) { console.error(err); showToast(t('baseError')); }
    }
    $('#btnBaseConvert').on('click', convertBase);
    $('#baseInput').on('keydown', e => { if (e.ctrlKey && e.key === 'Enter') convertBase(); });
    $('#btnBaseCopy').on('click', () => copyText($('#baseOutput').val()));
    $('#btnBaseClear').on('click', () => { $('#baseInput,#baseOutput').val(''); $('#baseCommonResult .result-list').html('<span class="muted-result">-</span>'); });
    $('#btnSwapBase').on('click', function () { const a = $('#sourceBase').val(); const b = $('#targetBase').val(); $('#sourceBase').val(b); $('#targetBase').val(a); const out = $('#baseOutput').val(); if (out) { $('#baseInput').val(out); $('#baseOutput').val(''); } });
  }

  function bindCodeGeneratorEvents() {
    bindTabs();
    $('#btnGenerateQr').on('click', generateQrCode);
    $('#btnDownloadQr').on('click', downloadQrCode);
    $('#btnClearQr').on('click', function () { $('#qrText').val(''); $('#qrPreview').empty().addClass('placeholder-preview').text(t('preview')); });
    $('#btnGenerateBarcode').on('click', generateBarcode);
    $('#btnDownloadBarcode').on('click', downloadBarcodeSvg);
    $('#btnClearBarcode').on('click', function () { $('#barcodeText').val(''); $('#barcodeSvg').empty(); });
    setTimeout(() => { generateQrCode(false); generateBarcode(false); }, 80);
  }

  function generateQrCode(showMessage = true) {
    const text = $('#qrText').val();
    if (!String(text || '').trim()) return showToast(t('noInput'));
    if (typeof QRCode === 'undefined') return showToast(t('qrcodeMissing'));
    const size = Number($('#qrSize').val()) || 220;
    const el = document.getElementById('qrPreview');
    el.innerHTML = '';
    $(el).removeClass('placeholder-preview');
    try {
      new QRCode(el, { text, width: size, height: size, correctLevel: QRCode.CorrectLevel.M });
      if (showMessage) showToast(t('generated'));
    } catch (err) { console.error(err); showToast(t('generateFailed')); }
  }

  function downloadQrCode() {
    const canvas = $('#qrPreview canvas')[0];
    const img = $('#qrPreview img')[0];
    if (canvas) return downloadDataUrl(canvas.toDataURL('image/png'), 'qrcode.png');
    if (img && img.src) return downloadDataUrl(img.src, 'qrcode.png');
    showToast(t('noInput'));
  }

  function generateBarcode(showMessage = true) {
    const text = $('#barcodeText').val();
    if (!String(text || '').trim()) return showToast(t('noInput'));
    if (typeof JsBarcode === 'undefined') return showToast(t('barcodeMissing'));
    try {
      JsBarcode('#barcodeSvg', text, { format: $('#barcodeFormat').val(), displayValue: $('#barcodeDisplayValue').is(':checked'), lineColor: '#172033', margin: 12, height: 90 });
      if (showMessage) showToast(t('generated'));
    } catch (err) { console.error(err); showToast(t('generateFailed')); }
  }

  function downloadBarcodeSvg() {
    const svg = document.getElementById('barcodeSvg');
    if (!svg || !svg.innerHTML.trim()) return showToast(t('noInput'));
    const xml = new XMLSerializer().serializeToString(svg);
    downloadBlob(xml, 'barcode.svg', 'image/svg+xml;charset=utf-8');
  }

  function bindRegexValidationEvents() {
    function validate() {
      const pattern = $('#regexPattern').val();
      const text = $('#regexText').val();
      if (!pattern) return showToast(t('noInput'));
      try {
        let flags = '';
        if ($('#regexGlobal').is(':checked')) flags += 'g';
        if ($('#regexIgnoreCase').is(':checked')) flags += 'i';
        if ($('#regexMultiline').is(':checked')) flags += 'm';
        const regex = new RegExp(pattern, flags);
        const matches = [];
        let match;
        if (flags.includes('g')) {
          while ((match = regex.exec(text)) !== null) {
            matches.push(formatMatch(match));
            if (match[0] === '') regex.lastIndex++;
          }
        } else {
          match = regex.exec(text);
          if (match) matches.push(formatMatch(match));
        }
        const ok = matches.length > 0;
        $('#regexStatusChip').text(ok ? t('matched') : t('notMatched')).toggleClass('success-chip', ok).toggleClass('danger-chip', !ok);
        $('#regexResult').val(`${ok ? t('matched') : t('notMatched')}\n${t('matchCount')}: ${matches.length}\n\n${matches.map((m, i) => `${i + 1}. [${m.index}] ${m.value}${m.groups.length ? '\n   groups: ' + JSON.stringify(m.groups) : ''}`).join('\n')}`);
        $('#regexHighlight').html(buildRegexHighlight(text, pattern, flags));
        showToast(t('converted'));
      } catch (err) { console.error(err); $('#regexStatusChip').text(t('regexError')).removeClass('success-chip').addClass('danger-chip'); $('#regexResult').val(String(err.message || err)); showToast(t('regexError')); }
    }
    $('#btnRegexValidate').on('click', validate);
    $('#btnRegexCopy').on('click', () => copyText($('#regexResult').val()));
    $('#btnRegexClear').on('click', () => { $('#regexPattern,#regexText,#regexResult').val(''); $('#regexHighlight').empty(); $('#regexStatusChip').text('-').removeClass('success-chip danger-chip'); });
  }

  function formatMatch(match) { return { value: match[0], index: match.index, groups: Array.prototype.slice.call(match, 1) }; }

  function buildRegexHighlight(text, pattern, flags) {
    if (!text) return '';
    try {
      if (!flags.includes('g')) flags += 'g';
      const regex = new RegExp(pattern, flags);
      let last = 0;
      let html = '';
      let match;
      while ((match = regex.exec(text)) !== null) {
        html += escapeHtml(text.slice(last, match.index));
        html += `<mark>${escapeHtml(match[0])}</mark>`;
        last = match.index + match[0].length;
        if (match[0] === '') regex.lastIndex++;
      }
      html += escapeHtml(text.slice(last));
      return html ? `<div class="highlight-title">${escapeHtml(t('preview'))}</div><pre>${html}</pre>` : '';
    } catch (_) { return ''; }
  }

  function bindLetterConverterEvents() {
    $('[data-letter-action]').on('click', function () {
      const input = $('#letterInput').val();
      if (!String(input || '').trim()) return showToast(t('noInput'));
      $('#letterOutput').val(convertLetter(input, $(this).data('letter-action')));
      showToast(t('converted'));
    });
    $('#btnLetterCopy').on('click', () => copyText($('#letterOutput').val()));
    $('#btnLetterCut').on('click', () => copyText($('#letterOutput').val(), () => $('#letterOutput').val('')));
    $('#btnLetterClear').on('click', () => $('#letterInput,#letterOutput').val(''));
  }

  function convertLetter(text, action) {
    switch (action) {
      case 'upper': return text.toUpperCase();
      case 'lower': return text.toLowerCase();
      case 'capitalize': return text.replace(/\p{L}[\p{L}\p{N}]*/gu, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      case 'lowerFirst': return text.replace(/\p{L}[\p{L}\p{N}]*/gu, word => word.charAt(0).toLowerCase() + word.slice(1));
      case 'sentence': return text.toLowerCase().replace(/(^\s*\p{L}|[.!?。！？]\s*\p{L})/gu, s => s.toUpperCase());
      case 'title': return text.toLowerCase().replace(/\p{L}[\p{L}\p{N}]*/gu, word => word.charAt(0).toUpperCase() + word.slice(1));
      case 'spaceUnderline': return text.trim().replace(/\s+/g, '_');
      case 'underlineSpace': return text.replace(/_+/g, ' ');
      case 'hyphenUnderline': return text.replace(/-+/g, '_');
      case 'underlineHyphen': return text.replace(/_+/g, '-');
      case 'removeSymbols': return text.replace(/[^\p{L}\p{N}\s_-]/gu, '');
      case 'removeSpaces': return text.replace(/\s+/g, '');
      default: return text;
    }
  }

  function bindBeautificationEvents() {
    $('#btnFormat').on('click', () => runBeautify(false));
    $('#btnCompress').on('click', () => runBeautify(true));
    $('#btnFormatCopy').on('click', () => copyText($('#formatOutput').val()));
    $('#btnFormatSwap').on('click', function () { const out = $('#formatOutput').val(); if (out) { $('#formatInput').val(out); $('#formatOutput').val(''); } });
    $('#btnFormatClear').on('click', () => $('#formatInput,#formatOutput').val(''));
  }

  function runBeautify(compressMode) {
    const input = $('#formatInput').val();
    if (!String(input || '').trim()) return showToast(t('noInput'));
    const type = $('#formatType').val();
    const indent = Number($('#formatIndent').val()) || 2;
    try {
      const output = processCode(input, type, indent, compressMode);
      $('#formatOutput').val(output);
      showToast(t('converted'));
    } catch (err) { console.error(err); showToast(t('invalidFormatInput')); }
  }

  function processCode(input, type, indent, compressMode) {
    if (type === 'json') {
      const data = JSON.parse(input);
      return compressMode ? JSON.stringify(data) : JSON.stringify(data, null, indent);
    }
    if (type === 'html') return compressMode ? compressHtml(input) : (typeof html_beautify === 'function' ? html_beautify(input, { indent_size: indent }) : formatHtmlLike(input, indent));
    if (type === 'css') return compressMode ? compressCss(input) : (typeof css_beautify === 'function' ? css_beautify(input, { indent_size: indent }) : formatCss(input, indent));
    if (type === 'javascript') return compressMode ? compressJs(input) : (typeof js_beautify === 'function' ? js_beautify(input, { indent_size: indent }) : formatJsFallback(input, indent));
    if (type === 'xml') return compressMode ? compressXml(input) : formatXmlWithValidation(input, indent);
    return input;
  }

  function formatHtmlLike(input, indent) {
    const unit = ' '.repeat(indent);
    const tokens = input.replace(/>\s*</g, '>\n<').split(/\n+/).filter(Boolean);
    let level = 0;
    const lines = [];
    tokens.forEach(token => {
      const trimmed = token.trim();
      if (!trimmed) return;
      if (/^<\//.test(trimmed)) level = Math.max(level - 1, 0);
      lines.push(unit.repeat(level) + trimmed);
      if (/^<[^!?/][^>]*[^/]>/i.test(trimmed) && !/^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b/i.test(trimmed)) level++;
    });
    return lines.join('\n');
  }

  function formatXmlWithValidation(input, indent) {
    const parsed = new DOMParser().parseFromString(input, 'application/xml');
    if (parsed.getElementsByTagName('parsererror').length) throw new Error('invalid xml');
    return formatHtmlLike(input, indent);
  }

  function formatCss(input, indent) {
    const unit = ' '.repeat(indent);
    let level = 0;
    return input.replace(/\s*{\s*/g, ' {\n').replace(/;\s*/g, ';\n').replace(/\s*}\s*/g, '\n}\n').split('\n').map(line => {
      let s = line.trim();
      if (!s) return '';
      if (s.startsWith('}')) level = Math.max(level - 1, 0);
      const out = unit.repeat(level) + s;
      if (s.endsWith('{')) level++;
      return out;
    }).filter(Boolean).join('\n');
  }

  function formatJsFallback(input, indent) { return input.replace(/;\s*/g, ';\n').replace(/\{\s*/g, '{\n').replace(/\}\s*/g, '\n}\n').replace(/,\s*/g, ', '); }
  function compressHtml(input) { return input.replace(/<!--([\s\S]*?)-->/g, '').replace(/>\s+</g, '><').trim(); }
  function compressXml(input) { formatXmlWithValidation(input, 2); return input.replace(/>\s+</g, '><').trim(); }
  function compressCss(input) { return input.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>+~])\s*/g, '$1').trim(); }
  function compressJs(input) { return input.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1').replace(/\s+/g, ' ').replace(/\s*([{}();,:=+\-*\/<>])\s*/g, '$1').trim(); }

  function bindTabs() {
    $('.tab-btn').off('click.devtoolsTabs').on('click.devtoolsTabs', function () {
      const tabId = $(this).data('tab');
      const $container = $(this).closest('.tool-body');
      $container.find('.tab-btn').removeClass('active');
      $(this).addClass('active');
      $container.find('.tab-pane').removeClass('active');
      $('#' + tabId).addClass('active');
    });
  }

  function downloadBlob(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    downloadDataUrl(url, filename, true);
  }

  function downloadDataUrl(url, filename, revokeAfter) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (revokeAfter) URL.revokeObjectURL(url);
  }

  function bindToolEvents(toolId) {
    if (toolId === 'string-concat') bindStringConcatEvents();
    if (toolId === 'excel-json') bindExcelJsonEvents();
    if (toolId === 'base-conversion') bindBaseConversionEvents();
    if (toolId === 'generate-code') bindCodeGeneratorEvents();
    if (toolId === 'regex-validation') bindRegexValidationEvents();
    if (toolId === 'letter-converter') bindLetterConverterEvents();
    if (toolId === 'beautification-tools') bindBeautificationEvents();
  }

  function bindAppEvents() {
    $('#toolMenu').on('click', '.tool-menu-item', function () {
      state.currentTool = $(this).data('tool-id');
      renderCurrentTool();
      $('body').removeClass('menu-open');
    });
    $('#langSelect').on('change', function () {
      state.lang = $(this).val();
      localStorage.setItem('devToolsLang', state.lang);
      applyI18n();
      renderMenu();
      renderCurrentTool();
    });
    $('#menuToggle').on('click', () => $('body').toggleClass('menu-open'));
    $('#overlay').on('click', () => $('body').removeClass('menu-open'));
  }

  $(function () {
    $('#appVersion').text(APP_VERSION);
    document.title = `${t('appTitle')} ${APP_VERSION}`;
    $('#langSelect').val(state.lang);
    applyI18n();
    renderMenu();
    renderCurrentTool();
    bindAppEvents();
  });
})(jQuery);
