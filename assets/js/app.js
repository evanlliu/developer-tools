(function ($) {
  'use strict';

  const APP_VERSION = 'v1.0.7';

  const I18N = {
    zh: {
      appTitle: '开发工具箱',
      stringConcat: 'String Concatenation',
      excelJson: 'Excel ⇔ JSON',
      baseConversion: 'Base Conversion',
      generateCode: 'Generate Code',
      regexValidation: 'Regular Expression Validation',
      letterConverter: '字母转换器',
      beautificationTools: 'Beautification Tools',
      comingSoon: '后续工具预留位置',
      comingSoonDesc: '这个菜单已经预留，后面可以继续接入新工具。',
      input: '输入',
      output: '输出',
      convert: '转换',
      copy: '复制',
      copied: '已复制',
      clear: '清空',
      swapToInput: '结果转输入',
      inputFormat: '输入格式',
      outputFormat: '输出格式',
      autoDetect: '自动识别',
      lineBreakFormat: '换行',
      parseCompactByChar: '无分隔文本按字符拆分',
      stringConcatDesc: '先把输入解析成数据列表，再转换成目标格式。支持换行、逗号、单引号、双引号、无分隔文本互转。',
      stringHelp: '示例：输入 1、2、3 分别换行，输出格式选择 Format(xx,xx)，得到 1,2,3；输入 \'11\',\'12\',\'13\'，输入格式选择 Format(\'xx\',\'xx\')，输出格式选择“换行”，得到 11、12、13 分别换行。无分隔文本默认视为一个值，如需 123 → 1,2,3，请勾选“按字符拆分”。',
      inputPlaceholder: '例如：\n1\n2\n3',
      outputPlaceholder: '转换结果会显示在这里',
      noInput: '请先输入内容',
      excelToJson: 'Excel → JSON',
      jsonToExcel: 'JSON → Excel',
      excelJsonDesc: '支持导入 Excel 转 JSON，也支持粘贴 JSON 并导出为 Excel。所有数据只在浏览器本地处理，不上传服务器。',
      chooseExcel: '选择 Excel 文件',
      selectSheet: '选择 Sheet',
      firstRowAsHeader: '第一行作为字段名',
      exportAllSheets: '导出全部 Sheet',
      convertExcelToJson: '转换为 JSON',
      downloadJson: '下载 JSON',
      jsonInput: 'JSON 输入',
      jsonPlaceholder: '例如：\n[\n  { "name": "A", "qty": 1 },\n  { "name": "B", "qty": 2 }\n]',
      fileName: '文件名',
      downloadExcel: '下载 Excel',
      invalidExcel: '请先选择 Excel 文件',
      invalidJson: 'JSON 格式不正确',
      converted: '转换完成',
      noJsonToDownload: '没有可下载的 JSON',
      noSheet: '没有读取到 Sheet',
      xlsxMissing: 'Excel 功能依赖 xlsx 库，请检查网络或将 xlsx.full.min.js 下载到本地引用。',
      singleSheetTip: '默认转换当前 Sheet；勾选“导出全部 Sheet”后，会按 Sheet 名生成 JSON 对象。',
      jsonToExcelTip: '支持 JSON 数组、对象数组、二维数组；也支持 { "Sheet1": [...], "Sheet2": [...] } 这种多 Sheet 结构。'
    },
    en: {
      appTitle: 'Developer Tools',
      stringConcat: 'String Concatenation',
      excelJson: 'Excel ⇔ JSON',
      baseConversion: 'Base Conversion',
      generateCode: 'Generate Code',
      regexValidation: 'Regular Expression Validation',
      letterConverter: 'Letter Converter',
      beautificationTools: 'Beautification Tools',
      comingSoon: 'Reserved tool area',
      comingSoonDesc: 'This item is reserved for future tools.',
      input: 'Input',
      output: 'Output',
      convert: 'Convert',
      copy: 'Copy',
      copied: 'Copied',
      clear: 'Clear',
      swapToInput: 'Use output as input',
      inputFormat: 'Input format',
      outputFormat: 'Output format',
      autoDetect: 'Auto detect',
      lineBreakFormat: 'Line break',
      parseCompactByChar: 'Split compact text by character',
      stringConcatDesc: 'Parse input into a value list first, then convert it to the target format. Supports line breaks, commas, single quotes, double quotes, and compact text.',
      stringHelp: 'Example: input 1, 2, 3 on separate lines and select Format(xx,xx) as output to get 1,2,3. Input \'11\',\'12\',\'13\', select Format(\'xx\',\'xx\') as input and Line break as output to get 11, 12, 13 on separate lines. Compact text is treated as one value by default. Enable character splitting for 123 → 1,2,3.',
      inputPlaceholder: 'Example:\n1\n2\n3',
      outputPlaceholder: 'The result will be shown here',
      noInput: 'Please enter content first',
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
      fileName: 'File name',
      downloadExcel: 'Download Excel',
      invalidExcel: 'Please choose an Excel file first',
      invalidJson: 'Invalid JSON format',
      converted: 'Converted',
      noJsonToDownload: 'No JSON to download',
      noSheet: 'No sheet found',
      xlsxMissing: 'Excel functions require the xlsx library. Check the network or reference a local xlsx.full.min.js file.',
      singleSheetTip: 'By default, only the selected sheet is converted. Enable “Export all sheets” to generate a JSON object by sheet name.',
      jsonToExcelTip: 'Supports JSON arrays, object arrays, two-dimensional arrays, and multi-sheet objects like { "Sheet1": [...], "Sheet2": [...] }.'
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
    { id: 'base-conversion', titleKey: 'baseConversion', icon: '▣', render: renderComingSoon },
    { id: 'generate-code', titleKey: 'generateCode', icon: '⌘', render: renderComingSoon },
    { id: 'regex-validation', titleKey: 'regexValidation', icon: '✖', render: renderComingSoon },
    { id: 'letter-converter', titleKey: 'letterConverter', icon: '↗', render: renderComingSoon },
    { id: 'beautification-tools', titleKey: 'beautificationTools', icon: '▤', render: renderComingSoon }
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

  function copyText(text) {
    if (!text) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => showToast(t('copied')));
      return;
    }
    const $temp = $('<textarea>').val(text).appendTo('body').select();
    document.execCommand('copy');
    $temp.remove();
    showToast(t('copied'));
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
              <div class="editor-head">
                <label class="label" for="stringInput">${escapeHtml(t('input'))}</label>
                <span class="editor-chip">Input</span>
              </div>
              <textarea class="editor-area" id="stringInput" placeholder="${escapeHtml(t('inputPlaceholder'))}"></textarea>
            </section>
            <section class="editor-panel">
              <div class="editor-head">
                <label class="label" for="stringOutput">${escapeHtml(t('output'))}</label>
                <span class="editor-chip">Output</span>
              </div>
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
      </div>
    `;
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
              <div class="field-inline file-field">
                <label class="label" for="excelFile">${escapeHtml(t('chooseExcel'))}</label>
                <input class="file-input" type="file" id="excelFile" accept=".xlsx,.xls,.csv" />
              </div>
              <div class="field-inline sheet-field">
                <label class="label" for="sheetSelect">${escapeHtml(t('selectSheet'))}</label>
                <select id="sheetSelect" class="form-control" disabled>
                  <option value="">${escapeHtml(t('selectSheet'))}</option>
                </select>
              </div>
              <label class="checkbox-line compact-option">
                <input type="checkbox" id="headerRow" checked />
                <span>${escapeHtml(t('firstRowAsHeader'))}</span>
              </label>
              <label class="checkbox-line compact-option">
                <input type="checkbox" id="allSheets" />
                <span>${escapeHtml(t('exportAllSheets'))}</span>
              </label>
            </div>
            <div class="workspace-tip">${escapeHtml(t('singleSheetTip'))}</div>
            <div class="action-bar excel-action-bar">
              <button class="btn btn-primary" type="button" id="btnExcelToJson">${escapeHtml(t('convertExcelToJson'))}</button>
              <button class="btn" type="button" id="btnCopyJson">${escapeHtml(t('copy'))}</button>
              <button class="btn" type="button" id="btnDownloadJson">${escapeHtml(t('downloadJson'))}</button>
              <button class="btn btn-danger" type="button" id="btnClearExcelJson">${escapeHtml(t('clear'))}</button>
            </div>
            <section class="editor-panel output-panel">
              <div class="editor-head">
                <label class="label" for="excelJsonOutput">${escapeHtml(t('output'))}</label>
                <span class="editor-chip">JSON</span>
              </div>
              <textarea class="editor-area small" id="excelJsonOutput" placeholder="${escapeHtml(t('outputPlaceholder'))}"></textarea>
            </section>
          </div>

          <div class="tab-pane excel-pane" id="jsonToExcelPane">
            <section class="editor-panel json-input-panel">
              <div class="editor-head">
                <label class="label" for="jsonInput">${escapeHtml(t('jsonInput'))}</label>
                <span class="editor-chip">JSON</span>
              </div>
              <textarea class="editor-area" id="jsonInput" placeholder="${escapeHtml(t('jsonPlaceholder'))}"></textarea>
            </section>
            <div class="workspace-tip">${escapeHtml(t('jsonToExcelTip'))}</div>
            <div class="action-bar json-action-bar">
              <label class="label" for="excelFileName">${escapeHtml(t('fileName'))}</label>
              <input type="text" id="excelFileName" value="data.xlsx" />
              <button class="btn btn-primary" type="button" id="btnJsonToExcel">${escapeHtml(t('downloadExcel'))}</button>
              <button class="btn btn-danger" type="button" id="btnClearJsonInput">${escapeHtml(t('clear'))}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderComingSoon(tool) {
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">${escapeHtml(t(tool.titleKey))}</h2>
          <div class="card-desc">${escapeHtml(t('comingSoonDesc'))}</div>
        </div>
        <div class="card-body">
          <div class="empty-state">${escapeHtml(t('comingSoon'))}</div>
        </div>
      </div>
    `;
  }

  function parseStringItems(text, inputFormat, splitCompactByChar) {
    let raw = String(text || '').trim();
    if (!raw) return [];

    const formatMatch = raw.match(/^Format\((.*)\)$/is);
    if (formatMatch) raw = formatMatch[1].trim();

    if (inputFormat === 'compact') {
      return splitCompactByChar
        ? Array.from(raw).map(item => item.trim()).filter(Boolean)
        : [stripPairQuote(raw)].filter(Boolean);
    }

    if (inputFormat === 'lineBreak') {
      return raw
        .split(/\r?\n/)
        .map(item => stripPairQuote(item.trim()))
        .filter(Boolean);
    }

    if (inputFormat === 'singleQuote' || inputFormat === 'doubleQuote') {
      return parseDelimitedText(raw, splitCompactByChar);
    }

    if (inputFormat === 'comma') {
      return parseDelimitedText(raw, splitCompactByChar);
    }

    return parseDelimitedText(raw, splitCompactByChar);
  }

  function parseDelimitedText(raw, splitCompactByChar) {
    const hasSeparator = /[,，;；\n\r\t]/.test(raw);
    if (!hasSeparator && splitCompactByChar) {
      return Array.from(raw).map(item => item.trim()).filter(Boolean);
    }

    const result = [];
    let buffer = '';
    let quote = null;
    let escaping = false;

    function pushBuffer() {
      let value = buffer.trim();
      value = stripPairQuote(value);
      if (value !== '') result.push(value);
      buffer = '';
    }

    for (let i = 0; i < raw.length; i++) {
      const ch = raw[i];

      if (escaping) {
        buffer += ch;
        escaping = false;
        continue;
      }

      if (ch === '\\') {
        escaping = true;
        continue;
      }

      if (quote) {
        if (ch === quote) {
          quote = null;
        } else {
          buffer += ch;
        }
        continue;
      }

      if (ch === '"' || ch === "'") {
        quote = ch;
        continue;
      }

      if (ch === ',' || ch === '，' || ch === ';' || ch === '；' || ch === '\n' || ch === '\r' || ch === '\t') {
        pushBuffer();
        continue;
      }

      buffer += ch;
    }
    pushBuffer();
    return result;
  }

  function stripPairQuote(value) {
    if (value.length >= 2) {
      const first = value[0];
      const last = value[value.length - 1];
      if ((first === "'" && last === "'") || (first === '"' && last === '"')) {
        return value.slice(1, -1);
      }
    }
    return value;
  }

  function formatStringItems(items, formatType) {
    switch (formatType) {
      case 'lineBreak':
        return items.join('\n');
      case 'singleQuote':
        return items.map(item => `'${String(item).replace(/'/g, "\\'")}'`).join(',');
      case 'doubleQuote':
        return items.map(item => `"${String(item).replace(/"/g, '\\"')}"`).join(',');
      case 'compact':
        return items.join('');
      case 'comma':
      default:
        return items.join(',');
    }
  }

  function bindStringConcatEvents() {
    $('#btnStringConvert').on('click', function () {
      const input = $('#stringInput').val();
      if (!String(input || '').trim()) {
        showToast(t('noInput'));
        return;
      }
      const items = parseStringItems(input, $('#inputFormat').val(), $('#splitCompactByChar').is(':checked'));
      const output = formatStringItems(items, $('#outputFormat').val());
      $('#stringOutput').val(output);
      showToast(t('converted'));
    });

    $('#btnStringCopy').on('click', function () {
      copyText($('#stringOutput').val());
    });

    $('#btnStringSwap').on('click', function () {
      const output = $('#stringOutput').val();
      if (output) {
        $('#stringInput').val(output);
        $('#stringOutput').val('');
      }
    });

    $('#btnStringClear').on('click', function () {
      $('#stringInput').val('');
      $('#stringOutput').val('');
    });
  }

  function ensureXlsx() {
    if (typeof XLSX === 'undefined') {
      showToast(t('xlsxMissing'));
      return false;
    }
    return true;
  }

  function bindExcelJsonEvents() {
    $('.tab-btn').on('click', function () {
      const tabId = $(this).data('tab');
      $('.tab-btn').removeClass('active');
      $(this).addClass('active');
      $('.tab-pane').removeClass('active');
      $('#' + tabId).addClass('active');
    });

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
          const options = names.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
          $('#sheetSelect').html(options).prop('disabled', names.length === 0);
          if (names.length) $('#sheetSelect').val(names[0]);
          showToast(t('converted'));
        } catch (err) {
          console.error(err);
          showToast(t('invalidExcel'));
        }
      };
      reader.readAsArrayBuffer(file);
    });

    $('#btnExcelToJson').on('click', function () {
      if (!ensureXlsx()) return;
      if (!state.workbook) {
        showToast(t('invalidExcel'));
        return;
      }
      const allSheets = $('#allSheets').is(':checked');
      const useHeader = $('#headerRow').is(':checked');
      try {
        let result;
        if (allSheets) {
          result = {};
          (state.workbook.SheetNames || []).forEach(name => {
            result[name] = sheetToJson(state.workbook.Sheets[name], useHeader);
          });
        } else {
          const sheetName = $('#sheetSelect').val();
          if (!sheetName) {
            showToast(t('noSheet'));
            return;
          }
          result = sheetToJson(state.workbook.Sheets[sheetName], useHeader);
        }
        state.currentJson = JSON.stringify(result, null, 2);
        $('#excelJsonOutput').val(state.currentJson);
        showToast(t('converted'));
      } catch (err) {
        console.error(err);
        showToast(t('invalidExcel'));
      }
    });

    $('#btnCopyJson').on('click', function () {
      copyText($('#excelJsonOutput').val());
    });

    $('#btnDownloadJson').on('click', function () {
      const json = $('#excelJsonOutput').val();
      if (!json) {
        showToast(t('noJsonToDownload'));
        return;
      }
      downloadBlob(json, 'data.json', 'application/json;charset=utf-8');
    });

    $('#btnClearExcelJson').on('click', function () {
      state.workbook = null;
      state.currentJson = '';
      $('#excelFile').val('');
      $('#sheetSelect').html(`<option value="">${escapeHtml(t('selectSheet'))}</option>`).prop('disabled', true);
      $('#excelJsonOutput').val('');
    });

    $('#btnJsonToExcel').on('click', function () {
      if (!ensureXlsx()) return;
      const raw = $('#jsonInput').val();
      if (!String(raw || '').trim()) {
        showToast(t('noInput'));
        return;
      }
      try {
        const data = JSON.parse(raw);
        const wb = jsonToWorkbook(data);
        let fileName = ($('#excelFileName').val() || 'data.xlsx').trim();
        if (!/\.xlsx$/i.test(fileName)) fileName += '.xlsx';
        XLSX.writeFile(wb, fileName);
      } catch (err) {
        console.error(err);
        showToast(t('invalidJson'));
      }
    });

    $('#btnClearJsonInput').on('click', function () {
      $('#jsonInput').val('');
    });
  }

  function sheetToJson(sheet, useHeader) {
    if (useHeader) {
      return XLSX.utils.sheet_to_json(sheet, { defval: '' });
    }
    return XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  }

  function jsonToWorkbook(data) {
    const wb = XLSX.utils.book_new();

    if (isPlainObject(data) && Object.keys(data).length && Object.values(data).every(isSheetLike)) {
      Object.keys(data).forEach(name => {
        XLSX.utils.book_append_sheet(wb, dataToSheet(data[name]), safeSheetName(name));
      });
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
    if (isPlainObject(data)) {
      return XLSX.utils.json_to_sheet([data]);
    }
    return XLSX.utils.aoa_to_sheet([[data]]);
  }

  function isSheetLike(value) {
    return Array.isArray(value) || isPlainObject(value);
  }

  function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  function safeSheetName(name) {
    return String(name || 'Sheet').replace(/[\\/?*\[\]:]/g, '_').slice(0, 31) || 'Sheet';
  }

  function downloadBlob(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function bindToolEvents(toolId) {
    if (toolId === 'string-concat') bindStringConcatEvents();
    if (toolId === 'excel-json') bindExcelJsonEvents();
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

    $('#menuToggle').on('click', function () {
      $('body').toggleClass('menu-open');
    });

    $('#overlay').on('click', function () {
      $('body').removeClass('menu-open');
    });
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
