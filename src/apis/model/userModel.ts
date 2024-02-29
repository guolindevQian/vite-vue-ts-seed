// 定义请求参数
export interface ListParams {
  id: number; //用户id
}

export interface RowItem {
  id: number;
  fileName: string;
}

export interface ListModel {
  code: number;
  data: RowItem[];
}
