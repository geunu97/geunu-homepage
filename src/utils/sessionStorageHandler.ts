const sessionStorageHandler = {
  setItem: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  getItem: (key: string) => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue === null ? null : JSON.parse(storedValue);
  },

  removeItem: (key: string) => {
    sessionStorage.removeItem(key);
  },
};

export default sessionStorageHandler;
