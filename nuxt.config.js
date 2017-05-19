module.exports = {
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#5c5c5c'},
    /*
     ** Build configuration
     */
    css: [
        /*
         {
         src: 'iview/src/styles/common/iconfont/ionicons.less',
         lang: 'less'
         },
         {
         src: 'iview/src/styles/components/index.less',
         lang: 'less'
         }*/
        'iview/dist/styles/iview.css',
        {
            src: '~assets/style/main.css',
            lang: 'less'
        }

    ],
    build: {
        vendor: ['axios', 'gsap', 'lodash.throttle'],
        extend(config) {
            for (rule of config.module.rules) {
                if (rule.loader === 'vue-loader') {
                    rule.query.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}';
                }
            }
            config.resolve.extensions.push('.ts');
            config.module.rules.push({
                test: /\.ts$/,
                loader: 'ts-loader'
            });
        },
        postcss: [
            require('postcss-salad')()
        ]
    },
    plugins: ['~plugins/fresh-ui', '~plugins/muse-ui', '~plugins/iview-ui']
};
