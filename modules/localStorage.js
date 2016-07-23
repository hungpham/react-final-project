
import {
  LOCAL_STATE_KEY
} from './constant';

export const loadState = () => {
  try {
    const serializedData = localStorage.getItem(LOCAL_STATE_KEY);

    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (e) {
    console.log('Error loading data from LocalStorage', e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem(LOCAL_STATE_KEY, serializedData);
  } catch (e) {
    console.log('Error save data to LocalStorage', e);
  }
};
