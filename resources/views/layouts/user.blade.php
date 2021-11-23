<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ config('app.name', 'Blog') }}</title>

    <link rel="stylesheet" href="{{ asset('css/admin/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/admin/adminlte.css') }}">

</head>
<body>
    <div id="app">
        <app></app>
    </div>

    <script src="{{ asset('js/admin/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/main.js') }}"></script>
    <script src="{{ asset('js/admin/adminlte.min.js') }}"></script>

</body>
</html>
