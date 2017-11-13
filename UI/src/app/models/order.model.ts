import {BaseModel} from './base.model';

export class OrderModel extends BaseModel {
  public apartmentId: number;
  public fio: string;
  public tel: string;
  public email: string;
}
