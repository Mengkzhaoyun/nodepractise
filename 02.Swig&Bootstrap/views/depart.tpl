{% extends 'parent/layout.tpl' %} 

{% block title %}02.Swig&Bootstrap.Department{%endblock%} 

{% block body %}class="hold-transition skin-blue sidebar-collapse sidebar-mini"{%endblock%} 

{% block content %}
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
        单位管理
        <small>单位</small>
      </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li>管理工具</li>
            <li class="active">单位管理</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Your Page Content Here -->
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-info">
                    <div id="toolbar_account"></div>
                    <div class="box-body">
                        <p>单位管理 在这里填写内容</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
{% endblock %} 

{% block script %}
<!-- AdminLTE App -->
<script src="plugins/AdminLTE-2.3.0-dist/js/app.min.js"></script>
{% endblock %}