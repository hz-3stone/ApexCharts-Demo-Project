import '../src/style.css'
import { setup } from '@storybook/vue3'
import { createRouter, createMemoryHistory } from 'vue-router'

// RouterLink / RouterView が story 内で解決できるようにメモリルーターを注入
setup((app) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
  app.use(router)
})

const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        excludeDecorators: true,
        transform: (src) => src.replace(/ lang="ts"/g, ''),
      },
    },
  },
}

export default preview
