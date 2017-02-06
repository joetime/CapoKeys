<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Index.aspx.vb" Inherits="WebApplication1.Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="framework/Scripts/angular.min.js"></script>
    <link href="framework/Content/bootstrap.min.css" rel="stylesheet" />
</head>
<body ng-app>
    <form id="form1">
    <div>
        <h1>CapoKeys says, "Hello world!"</h1>
    </div>
        <div>
            10 + 20 = {{ 10 + 20 }}
        </div>
    </form>


    <script src="framework/Scripts/jquery-1.9.1.min.js"></script>
    <script src="framework/Scripts/bootstrap.min.js"></script>
</body>
</html>
