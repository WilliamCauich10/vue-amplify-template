const set = (property: any) => (store: any, payload: any) => {
  // eslint-disable-next-line no-param-reassign
  store[property] = payload;
};

export default set;
