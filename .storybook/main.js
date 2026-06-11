const config = {
  stories: ['../src/stories/**/*.stories.@(js|jsx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  addons: ['@storybook/addon-docs'],
}

export default config
