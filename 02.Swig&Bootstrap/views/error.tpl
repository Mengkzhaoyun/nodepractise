{% extends 'layout-admin.tpl' %} 

{% block title %}{% endblock %} 

{% block content %}
<div class="content">
    <h1>{{ message }}</h1>
    <h2>{{ error.status }}</h2>
    <pre>{{ error.stack }}</pre>
</div>
{% endblock %}