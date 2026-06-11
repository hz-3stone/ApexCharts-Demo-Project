import SurveyResultDemoPage from '../../pages/SurveyResultDemoPage.vue'
import { mockSurveyResults } from '../../features/survey/mocks/surveyResults'

const meta = {
  title: 'ページ/アンケート結果デモ',
  component: SurveyResultDemoPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'DummyJSON の商品データを集計・加工してアンケート結果レポート風に可視化するデモページ。`initialData` を渡すと API 呼び出しをスキップします。',
      },
    },
  },
}

export default meta

export const Default = {
  name: 'モックデータ',
  args: {
    initialData: mockSurveyResults,
  },
  parameters: {
    docs: {
      source: {
        code: `<SurveyResultDemoPage :initial-data="mockSurveyResults" />`,
      },
    },
  },
}
