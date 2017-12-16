import { loaderConstants } from '../constants';

export const loaderActions = {
    load,
    error,
    clear
};

function load() {
    return { type: loaderConstants.LOAD };
}

function error() {
    return { type: loaderConstants.ERROR };
}

function clear() {
    return { type: loaderConstants.CLEAR };
}
