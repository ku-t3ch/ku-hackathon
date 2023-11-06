import NodeCache from 'node-cache';

const cache = new NodeCache();

export const getCache = (key: string) => {
  return cache.get(key);
};

export const setCache = (ttl: number, key: string, value: any) => {
  cache.set(key, value, ttl);
};
