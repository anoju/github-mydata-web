import { make } from 'vuex-pathify';
import httpUtil from '@/utils/httpUtil';

const TODAY = 'v1/api/trxRequest/TO/02/';
// 사용자 정보 저장소
const state = {
  asset: [],
  assetByTypeList: [],
  assetByTypeDetail: {},
};

// getter
const getters = {
};

// setter
const mutations = make.mutations(state);

// actions
const actions = {
  getAssetSave({ commit }, payload) {
    const args = {
      payload,
    };
    return new Promise((resolve, reject) => {
      httpUtil.request('POST', '/api/'.concat(TODAY, 'TO02A006'), args).then((rst) => {
        if (rst.status === 200 && rst.data.code === 'S00000') {
          commit('SET_ASSET', rst.data.data[payload[0].trId].response);
          resolve(rst.data.data[payload[0].trId].response);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
  assetSave({ commit }, payload) {
    console.log(20, payload);
    const args = {
      payload,
    };
    return new Promise((resolve, reject) => {
      httpUtil.request('POST', '/api/'.concat(TODAY, 'TO02A006'), args).then((rst) => {
        if (rst.status === 200 && rst.data.code === 'S00000') {
          commit('SET_ASSET', rst.data);
          resolve(rst.data);
        } else {
          reject(new Error(process.env.NODE_ENV === 'development' ? rst.data.messageDev : rst.data.message));
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getAssetByTypeList({ commit }, payload) {
    const args = {
      payload,
    };
    return new Promise((resolve, reject) => {
      httpUtil.request('POST', '/api/'.concat(TODAY, 'TO02A002'), args).then((rst) => {
        if (rst.status === 200 && rst.data.code === 'S00000') {
          const data = rst.data.data[payload[0].trId].response;
          console.log(63, data);
          const result = {
            ...data,
            Record1: data.Record1.map((e) => ({
              ...e,
              isOpen: false,
            })),
          };
          commit('SET_ASSET_BY_TYPE_LIST', result);
          resolve(result);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getAssetByTypeDetail({ commit }, payload) {
    const args = {
      payload,
    };
    return new Promise((resolve, reject) => {
      httpUtil.request('POST', '/api/'.concat(TODAY, 'TO02A002'), args).then((rst) => {
        if (rst.status === 200 && rst.data.code === 'S00000') {
          commit('SET_ASSET_BY_TYPE_DETAIL', rst.data.data[payload[0].trId].response);
          resolve(rst.data.data[payload[0].trId].response);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
