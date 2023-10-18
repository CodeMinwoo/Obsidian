Embedded Javascript templates 의 약자로 JS 템플릿 엔진 중 하나이다.

웹 서버에서 HTML 내에 동적 데이터를 삽입할 때 사용되며, 주로 Node.js 환경에서 개발시 사용한다

```ejs
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= heading %></h1>
  <ul>
    <% for(let i = 0; i < items.length; i++) { %>
      <li><%= items[i] %></li>
    <% } %>
  </ul>
</body>
</html>

```
