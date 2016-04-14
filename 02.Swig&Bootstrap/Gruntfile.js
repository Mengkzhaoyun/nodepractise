module.exports = function(grunt) {
    grunt.initConfig({
        //将views/*.tpl编译输出为htmls/*.html
        swig: {
            default_options: {
                options: {
                    templatePath: 'views/',
                    data: {
                        title: 'Swig Express Samples By MengkZhaoyun'
                    }
                },
                expand: true,
                cwd: 'views/',                
                src: ['*.tpl'],
                dest: 'htmls/',
                ext: '.html'
            }
        }
    })

    // 加载包含 "swig" 任务的插件。
    grunt.loadNpmTasks('grunt-swig-templates');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['swig']);

};