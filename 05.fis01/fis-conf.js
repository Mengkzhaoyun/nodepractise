fis.config.init({
    project: {
        md5Length: 7
    }
});

fis.config.merge({
    roadmap: {
        path: [
            {
                //查找所有Assets目录下的所有文件
                reg: /^\/Libs\/(.*)/i,
                //生成新的url '/Static/xxxx'
                url: '/Static/$1',
                //指定文件不产出MD5戳
                useHash: false,
                release: '/static/$1'
            },
            {
                //查找所有Assets目录下的js,css,png文件
                reg: /^\/Assets\/(.*\.(?:js|css|png))/i,
                //生成新的url '/myappAssets/xxxx'
                url: '/static/myapp/$1',
                //js/css/png打上md5标记生成到/myappAssets/xxx目录下
                release: '/static/myapp/$1'
            },            
            {
                //所有根目录下的.html文件
                reg : /^(.*\.html)/i,
                //发布到/myapp/xxx目录下
                release : '/myapp/$1'
            },
            {
                //前面规则未匹配到的其他文件
                reg: /.*/,
                //编译的时候不要产出了
                release: false
            }
        ]
    }
});
