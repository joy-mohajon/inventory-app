<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Inventory App</title>
    @vite(['public/build/assets/app.js', 'public/build/assets/app.css'])
</head>

<body>
    <div id="root"></div>
</body>

</html>