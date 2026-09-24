import { OrderEntity } from './entities/order.entity';
export type OrderPriority = 'completed' | 'high' | 'medium' | 'normal';
export interface OrderPriorityResult {
    priority: OrderPriority;
    message: string;
}
export declare class OrderPriorityService {
    classify(order: OrderEntity): OrderPriorityResult;
}
