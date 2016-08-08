<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판-등</title>
</head>
<body>
<h1>새 </h1>

<form action="add.do" method="post">
<table border="1"> 

<tbody>

  <tr>
    <th>제목</th><td><input name="title" type="text" ></td>
  </tr>
  <tr>
    <th>생성</th><td><textarea name="content" rows="5" cols="60"></textarea></td>
  </tr>
 

</tbody>

</table>
<p><button type="submit">등</button></p>
</form>
</body>
</html>