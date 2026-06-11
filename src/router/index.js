import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import ApexChartsDemoPage from '../pages/ApexChartsDemoPage.vue'
import SurveyResultDemoPage from '../pages/SurveyResultDemoPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',               component: IndexPage },
    { path: '/apexcharts',     component: ApexChartsDemoPage },
    { path: '/survey-result',  component: SurveyResultDemoPage },
  ],
})
