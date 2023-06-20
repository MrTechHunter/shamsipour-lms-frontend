export const setLocalStorageWithExpiry = (key, value, ttl) => {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  setLocalStorage(key, item);
};
export const setSessionStorageWithExpiry = (key, value, ttl) => {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  setSessionStorage(key, item);
};
export const getLocalStorageWithExpiry = (key) => {
  const item = getLocalStorage(key);
  if (!item) {
    return null;
  }
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    clearLocalStorage(key);
    return null;
  }
  return item.value;
};
export const getSessionStorageWithExpiry = (key) => {
  const item = getSessionStorage(key);
  if (!item) {
    return null;
  }
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    clearLocalStorage(key);
    return null;
  }
  return item.value;
};
export const setLocalStorage = (key, value) => {
  if (!key) {
    return false;
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const setSessionStorage = (key, value) => {
  if (!key) {
    return false;
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};
export const getLocalStorage = (key) => {
  const itemString = localStorage.getItem(key);
  if (!itemString) {
    return null;
  } else {
    if (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return null;
    }
  }
};
export const getSessionStorage = (key) => {
  const itemString = sessionStorage.getItem(key);
  if (!itemString) {
    return null;
  } else {
    if (sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key))) {
      return JSON.parse(sessionStorage.getItem(key));
    } else {
      return null;
    }
  }
};
export const clearLocalStorage = (key = null) => {
  if (!key) {
    localStorage.clear();
    sessionStorage.clear();
  } else {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
};
export const clearSessionStorage = (key = '') => {
  if (!key) {
    sessionStorage.clear();
  } else {
    sessionStorage.removeItem(key);
  }
};
export const getToken = () => {
  return getLocalStorage('token')?.accessToken || getSessionStorage('token')?.accessToken;
};
