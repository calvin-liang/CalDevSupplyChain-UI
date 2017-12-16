import { loaderConstants } from '../constants';

export function loader(state = {}, action) {
  switch (action.type) {
    case loaderConstants.LOAD:
      return {
        type: 'loader-load',
        isLoading: true
      };
    case loaderConstants.ERROR:
      return {
        type: 'loader-error',
        isLoading: false
      };
    case loaderConstants.CLEAR:
      return {};
    default:
      return state
  }
}
