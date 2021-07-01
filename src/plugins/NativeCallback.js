export default function createNativeCallbackPlugin() {
  return (store) => {
    console.log('[nativeCallBack] window.nativeCallback');
    window.nativeCallback = function nativeCallback(callbackId, isSuccess, command, data) {
      console.log('createNativeCallbackPlugin', callbackId, isSuccess, command, data);
      switch (command) {
        case 'signMobile':
          console.log('[CallBack] signmobile');
          store.dispatch('auth/authComplet', data);
          break;
        case 'signKorea':
          console.log('[CallBack] signkorea');
          store.dispatch('auth/authComplet', data);
          break;
        case 'signKakao':
          console.log('[CallBack] signkakao');
          store.dispatch('auth/authComplet', data);
          break;
        case 'signKBMobile':
          console.log('[CallBack] signkbmobile');
          store.dispatch('auth/authComplet', data);
          break;
        case 'getDeviceId':
          console.log('[CallBack] getDeviceId');
          store.set('auth/deviceId', data.dvId); // device ID
          store.set('auth/mdtMdDvdCd', '01');
          store.set('auth/prvtRgstId', data.prvtRgstId); // 80 -> 플링크 ID
          store.set('auth/prvtRgstKey', data.prvtRgstKey); // 300 -> push key
          store.set('auth/osCd', data.osCd); // OS 코드
          store.set('auth/osVrsn', data.osVrsn); // OS 버전
          store.set('auth/appVrsn', data.appVrsn); // APP 버전
          break;
        case 'signBio':
          console.log('[CallBack] signBio');
          store.set('auth/pblcKey', data.pblcKey); // 앱 공개키
          store.set('auth/signature', data.signature); // 앱 서명
          store.set('auth/signBio', data); // 생체 인증 결과 ( code, message, isSuccess )
          store.dispatch('auth/signBioCallBackFn');
          break;
        case 'isSignBio':
          console.log('[CallBack] isSignBio');
          store.set('auth/isSignBio', data); // 생체 인증 여부 결과 ( isAvailable )
          store.dispatch('auth/isSignBioCallBackFn');

          break;
        case 'setKblogToken':
          console.log('[CallBack] setKblogToken!!');
          break;
        case 'delKblogToken':
          console.log('[CallBack] delKblogToken!!');
          break;
        case 'addStnd':
          console.log('[CallBack] addStnd!!');
          break;
        case 'shareUrl':
          console.log('[CallBack] shareUrl!!');
          break;
        case 'getKblogToken':
          console.log('[CallBack] getKblogToken!!');
          store.set('auth/kblogToken', data.token);
          store.dispatch('auth/getKblogTokenCallBackFn');
          break;
        default:
          break;
      }
    };
  };
}
