import _axios from '@/utils/axios';
import type { ListParams, ListModel } from './model/userModel';

export const getList = (params: ListParams) => {
  return _axios.get<ListModel>('/list', { params });
};
