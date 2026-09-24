import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';

export type OrderPriority = 'completed' | 'high' | 'medium' | 'normal';

export interface OrderPriorityResult {
  priority: OrderPriority;
  message: string;
}

@Injectable()
export class OrderPriorityService {
  classify(order: OrderEntity): OrderPriorityResult {
    // The status rule goes first: a ready order is always completed
    if (order.status === 'ready') {
      return { priority: 'completed', message: 'Order is ready' };
    }

    if (order.quantity >= 4) {
      return { priority: 'high', message: 'Prepare this order soon' };
    }

    if (order.quantity >= 2) {
      return { priority: 'medium', message: 'Order has medium priority' };
    }

    return { priority: 'normal', message: 'Order has normal priority' };
  }
}