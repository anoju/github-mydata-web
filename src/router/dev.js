// 서버 개발시 추가되는 경로
export default [
  {
    path: '/validate',
    // beforeEnter: notRequireAuth(),
    component: () => import('@/views/validate'),
    children: [
      { path: '', redirect: 'formSubmission' },
      { path: 'basicForm', component: () => import('@/views/validate/basicForm') },
      { path: 'formSubmission', component: () => import('@/views/validate/formSubmission') },
      { path: 'withoutVm', component: () => import('@/views/validate/withoutVm') },
      { path: 'contextifiedValidators', component: () => import('@/views/validate/contextifiedValidators') },
      { path: 'dataNesting', component: () => import('@/views/validate/dataNesting') },
      { path: 'errorVsAnyError', component: () => import('@/views/validate/errorVsAnyError') },
      { path: 'validationGroups', component: () => import('@/views/validate/validationGroups') },
      { path: 'collectionsValidation', component: () => import('@/views/validate/collectionsValidation') },
      { path: 'asynchronousValidation', component: () => import('@/views/validate/asynchronousValidation') },
      { path: 'delayedValidationErrors', component: () => import('@/views/validate/delayedValidationErrors') },
      { path: 'accessingValidatorParameters', component: () => import('@/views/validate/accessingValidatorParameters') },
      { path: 'dynamicValidationSchema', component: () => import('@/views/validate/dynamicValidationSchema') },
      { path: 'dynamicParameters', component: () => import('@/views/validate/dynamicParameters') },
    ],
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import('@/views/debounce'),
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('@/views/dev'),
    children: [
      { path: '', redirect: 'axios' },
      { path: 'axios', component: () => import('@/views/dev/axios') },
      { path: 'await', component: () => import('@/views/dev/await') },
      { path: 'chart', component: () => import('@/views/dev/chart') },
    ],
  },
];
