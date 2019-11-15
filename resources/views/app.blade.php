<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>{{ config('app.name') }}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet">
    <link href="{{ url(mix( '/css/main.css' )) }}" rel="stylesheet">
</head>
<body>
<div id="app"></div>
<transition mode="out-in">
    <app></app>
</transition>
<script src="{{ url (mix('/js/main.js')) }}" type="text/javascript"></script>
</body>
</html>
