// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import path from 'node:path'
import { defaultTheme, defineUserConfig } from 'vuepress'
import casualCode from '@casual-ui/vuepress-plugin-casual-code'
import docSearch from '@vuepress/plugin-docsearch'
import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import nightOwlTheme from './config/night-owl.json'

export default defineUserConfig({
  title: 'Casual UI - Vue',
  templateDev: path.resolve(__dirname, 'template.dev.html'),
  templateBuild: path.resolve(__dirname, 'template.build.html'),
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A ui components lib that supports for Vue3+',
      seeVarsDefinition: 'Click to see variables definition',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      description: '一个支持Vue3+的组件库',
      seeVarsDefinition: '查看变量定义',
    },
  },
  theme: defaultTheme({
    logo: '/logo.png',
    locales: {
      '/': {
        navbar: [
          {
            text: 'Guide',
            children: [
              {
                text: 'Install',
                link: '/guide/install/',
              },
              {
                text: 'Theme Customization',
                link: '/guide/theme-customize/',
              },
              {
                text: 'Dark Mode',
                link: '/guide/dark-mode/',
              },
              {
                text: 'I18n',
                link: '/guide/i18n/',
              },
            ],
          },
          {
            text: 'Features',
            children: [
              {
                text: 'Components',
                link: '/components/button/',
              },
              {
                text: 'Global CSS Utils',
                link: '/global-style-utils/',
              },
              {
                text: 'Directives',
                link: '/directives/v-loading/',
              },
              {
                text: 'Composable',
                link: '/usable/useClickOutside/',
              },
            ],
          },
          {
            text: 'More',
            children: [
              {
                text: 'Casual UI - Svelte',
                link: 'https://svelte.casual-ui.site/',
              },
              {
                text: 'Casual UI - React',
                link: 'https://react.casual-ui.site/',
              },
            ],
          },
        ],
        sidebar: {
          '/guide/': [
            '/guide/install/',
            '/guide/theme-customize/',
            '/guide/dark-mode/',
            '/guide/i18n/',
          ],
          '/components/': [
            {
              text: 'Basic',
              collapsible: true,
              children: [
                '/components/button/',
                '/components/loading/',
                '/components/tag/',
                '/components/icon/',
                '/components/carousel/',
              ],
            },
            {
              text: 'Form',
              collapsible: true,
              children: [
                '/components/form/input/',
                '/components/form/select/',
                '/components/form/radio/',
                '/components/form/checkbox/',
                '/components/form/toggle/',
                '/components/form/date-picker/',
                '/components/form/slider/',
                '/components/form/form/',
              ],
            },
            {
              text: 'Popups',
              collapsible: true,
              children: [
                '/components/feedback/dialog/',
                '/components/feedback/drawer/',
                '/components/feedback/notification/',
                '/components/feedback/tooltip/',
              ],
            },
            {
              text: 'Interact',
              collapsible: true,
              children: [
                '/components/interact/ajax-bar/',
                '/components/interact/dropdown/',
                '/components/interact/expansion/',
                '/components/interact/tabs/',
              ],
            },
            {
              text: 'Data Presentation',
              collapsible: true,
              children: [
                '/components/data-presentation/list',
                '/components/data-presentation/table',
              ],
            },
          ],
          '/usable/': [
            '/usable/useClickOutside/',
            '/usable/useFormValidator/',
            '/usable/useI18n/',
          ],
          '/global-style-utils/': ['/global-style-utils/'],
          '/directives/': ['/directives/v-loading/'],
        },
      },
      '/zh-CN/': {
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        tip: '提示',
        contributorsText: '贡献者',
        lastUpdatedText: '最后更新于',
        editLinkText: '在Github上编辑此页',
        navbar: [
          {
            text: '指南',
            children: [
              {
                text: '安装',
                link: '/zh-CN/guide/install/',
              },
              {
                text: '主题定制',
                link: '/zh-CN/guide/theme-customize/',
              },
              {
                text: '暗黑模式',
                link: '/zh-CN/guide/dark-mode/',
              },
              {
                text: '国际化',
                link: '/zh-CN/guide/i18n/',
              },
            ],
          },
          {
            text: '功能',
            children: [
              {
                text: '组件',
                link: '/zh-CN/components/button/',
              },
              {
                text: '全局工具样式',
                link: '/zh-CN/global-style-utils/',
              },
              {
                text: '指令',
                link: '/zh-CN/directives/v-loading/',
              },
              {
                text: '可组合',
                link: '/zh-CN/usable/useClickOutside/',
              },
            ],
          },
          {
            text: '更多',
            children: [
              {
                text: 'Casual UI - Svelte',
                link: 'https://svelte.casual-ui.site/',
              },
              {
                text: 'Casual UI - React',
                link: 'https://react.casual-ui.site/',
              },
            ],
          },
        ],
        sidebar: {
          '/zh-CN/guide/': [
            '/zh-CN/guide/install/',
            '/zh-CN/guide/theme-customize/',
            '/zh-CN/guide/dark-mode/',
            '/zh-CN/guide/i18n/',
          ],
          '/zh-CN/usable/': [
            '/zh-CN/usable/useClickOutside/',
            '/zh-CN/usable/useFormValidator/',
            '/zh-CN/usable/useI18n/',
          ],
          '/zh-CN/global-style-utils/': ['/zh-CN/global-style-utils/'],
          '/zh-CN/directives/': ['/zh-CN/directives/v-loading/'],
          '/zh-CN/components/': [
            {
              text: '基础',
              collapsible: true,
              children: [
                '/zh-CN/components/button/',
                '/zh-CN/components/loading/',
                '/zh-CN/components/tag/',
                '/zh-CN/components/icon/',
                '/zh-CN/components/carousel/',
              ],
            },
            {
              text: '表单',
              collapsible: true,
              children: [
                '/zh-CN/components/form/input/',
                '/zh-CN/components/form/select/',
                '/zh-CN/components/form/radio/',
                '/zh-CN/components/form/checkbox/',
                '/zh-CN/components/form/toggle/',
                '/zh-CN/components/form/date-picker/',
                '/zh-CN/components/form/slider/',
                '/zh-CN/components/form/form/',
              ],
            },
            {
              text: '弹出层',
              collapsible: true,
              children: [
                '/zh-CN/components/feedback/dialog/',
                '/zh-CN/components/feedback/drawer/',
                '/zh-CN/components/feedback/notification/',
                '/zh-CN/components/feedback/tooltip/',
              ],
            },
            {
              text: '交互',
              collapsible: true,
              children: [
                '/zh-CN/components/interact/dropdown/',
                '/zh-CN/components/interact/expansion/',
                '/zh-CN/components/interact/tabs/',
              ],
            },
            {
              text: '数据展示',
              collapsible: true,
              children: [
                '/zh-CN/components/data-presentation/list',
                '/zh-CN/components/data-presentation/table',
              ],
            },
          ],
        },
      },
    },
    logoDark: '/logo.png',
    repo: 'https://github.com/Casual-UI/vue',
    repoLabel: 'Github',
    editLinkPattern: ':repo/edit/:branch/packages/docs/:path',
  }),
  plugins: [
    shikiPlugin({
      theme: nightOwlTheme,
    }),
    casualCode({
      componentsBasePath:
        `${path.resolve(__dirname, '../ui/src/components/')}/`,
      importMap: {
        imports: {
          '@quasar/extras/material-icons':
            'https://unpkg.com/@quasar/extras/material-icons/index.mjs',
          'casual-ui-vue':
            'https://unpkg.com/casual-ui-vue/dist/casual-ui-vue.es.js',
          'vue': 'https://unpkg.com/@vue/runtime-dom@3.2.36/dist/runtime-dom.esm-browser.js',
        },
      },
    }),
    docSearch({
      appId: 'GC34OK1KSK',
      apiKey: 'e29418351aacb050d006d9e76bdabe16',
      indexName: 'casual-ui-vue',
      locales: {
        '/zh-CN/': {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '重置查询',
                resetButtonAriaLabel: '重置查询',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '最近',
                noRecentSearchesText: '无最近搜索',
                saveRecentSearchButtonTitle: '保存当前搜索',
                removeRecentSearchButtonTitle: '从历史中删除当前搜索',
                favoriteSearchesTitle: '最爱的搜索',
                removeFavoriteSearchButtonTitle: '从最爱中移除',
              },
              errorScreen: {
                titleText: '无法获取搜索结果',
                helpText: '请检查网络连接',
              },
              footer: {
                selectText: '请选择',
                selectKeyAriaLabel: '输入关键字',
                navigateText: '导航',
                navigateUpKeyAriaLabel: '向上',
                navigateDownKeyAriaLabel: '向下',
                closeText: '关闭',
                closeKeyAriaLabel: '关闭',
                searchByText: '根据文字搜索',
              },
              noResultsScreen: {
                noResultsText: '没有找到结果',
                suggestedQueryText: '您可能想搜索',
                reportMissingResultsText: '没有找到结果？请报告缺失',
                reportMissingResultsLinkText: '报告缺失',
              },
            },
          },
        },
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-4H4K4S0QTD',
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@doc': process.cwd(),
        },
      },
      plugins: [
        Unocss({ presets: [presetIcons(), presetAttributify(), presetUno()] }),
      ],
      ssr: {
        noExternal: ['@casual-ui/utils'],
      },
    },
  }),
})
