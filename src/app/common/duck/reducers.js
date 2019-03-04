import types from './types';

const INITIAL_STATE = {
  fetchCurrentUserState: '',
  fetchSaleRecordState: '',
  fetchProductsState: '',
  fetchAllUserState: '',
  errorMessage: '',
  saleRecord: [],
  products: [],
  userData: []
};

const fetchAllDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_FETCH_CURRENT_USER_STATE: {
      const { fetchCurrentUserState } = action;
      return {
        ...state,
        fetchCurrentUserState,
      };
    }
    case types.SET_FETCH_CURRENT_USER_ERROR: {
      const { errorMessage } = action;
      return {
        ...state,
        errorMessage,
      };
    }
    case types.SET_FETCH_ALL_USER_STATE: {
      const { fetchAllUserState } = action;
      return {
        ...state,
        fetchAllUserState,
      };
    }
    case types.SET_FETCH_ALL_USER_ERROR: {
      const { errorMessage } = action;
      return {
        ...state,
        errorMessage,
      };
    }
    case types.SET_FETCH_SALE_RECORD_STATE: {
      const { fetchSaleRecordState } = action;
      return {
        ...state,
        fetchSaleRecordState,
      };
    }
    case types.SET_FETCH_SALE_RECORD_ERROR: {
      const { errorMessage } = action;
      return {
        ...state,
        errorMessage,
      };
    }
    case types.SET_FETCH_PRODUCTS_STATE: {
      const { fetchProductsState } = action;
      return {
        ...state,
        fetchProductsState,
      };
    }
    case types.SET_FETCH_PRODUCTS_ERROR: {
      const { errorMessage } = action;
      return {
        ...state,
        errorMessage,
      };
    }
    case types.ADD_USER_DATA: {
      const { userData } = action;
      const oldUserData = state.userData;
      return {
        ...state,
        userData: { ...oldUserData, ...userData },
      };
    }
    case types.ADD_SALE_RECORD: {
      const { saleRecord } = action;
      const oldSaleRecord = state.saleRecord;
      return {
        ...state,
        saleRecord: { ...oldSaleRecord, ...saleRecord },
      };
    }
    case types.ADD_PRODUCTS: {
      const { products } = action;
      const oldProducts = state.products;
      return {
        ...state,
        products: { ...oldProducts, ...products },
      };
    }
    default:
      return state;
  }
};

export default fetchAllDataReducer;
