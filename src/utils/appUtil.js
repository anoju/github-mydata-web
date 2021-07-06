import store from '@/store/index';

export default {
  // 모바일 웹 브라우저로 열림
  linkBrowser(url) {
    const l = document.createElement('a');
    l.href = url;
    if (store.get('auth/osCd') === '02') {
      return `to-app://${l.hostname + l.pathname + l.search}`;
    }
    return `intent://${l.hostname + l.pathname + l.search}#Intent;scheme=${l.protocol.slice(0, -1)};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`;
  },
};
