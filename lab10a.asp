<%@ Language="VBScript" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Background & Last Visit</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <style>
        body {
            transition: background-color 0.5s ease;
        }
    </style>
</head>
<body style="background-color:<%= Request.QueryString("bgcolor") %>">

<div class="container text-center mt-5">
    <h1 class="mb-4">Welcome to the ASP Background Page</h1>
    
    <% 
    ' Get the current date and time
    Dim currentDateTime
    currentDateTime = Now()

    ' Retrieve the last visit cookie
    Dim lastVisit
    lastVisit = Request.Cookies("LastVisit")

    ' Check if it’s the user's first visit
    If lastVisit = "" Then
        Response.Write("<p class='alert alert-info'>This is your first time visiting the page!</p>")
    Else
        Response.Write("<p class='alert alert-success'>Your last visit was on: " & lastVisit & "</p>")
    End If

    ' Set a cookie with the current date and time
    Response.Cookies("LastVisit") = currentDateTime
    Response.Cookies("LastVisit").Expires = DateAdd("d", 30, currentDateTime) ' Cookie valid for 30 days
    %>

    <p class="mt-4">Change the background by adding `?bgcolor=color` to the URL (e.g., `?bgcolor=blue`, `?bgcolor=#ff5733`).</p>

    <a href="lab10a.asp" class="btn btn-primary mt-3">Reset Background</a>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
