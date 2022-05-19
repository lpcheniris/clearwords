export const isEmpty = (obj:object) => Object.keys(obj).length === 0;
export const getAudioUrl = (query:string) => `https://dict.youdao.com/dictvoice?audio=${query}&type=2`