export const saveObject = (object, key) => {
  if (!localStorageAvailable()) {
    return;
  }

  const jsonObj = JSON.stringify(object);

  localStorage.setItem(key, jsonObj);
};

export const loadObject = key => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return null;
};

const localStorageAvailable = () => {
  return storageAvailable('localStorage');
};

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API}
 */
const storageAvailable = type => {
  let storage;

  try {
    storage = window[type];
    const testString = '__storage_test__';
    storage.setItem(testString, testString);
    storage.removeItem(testString);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0)
    );
  }
};
