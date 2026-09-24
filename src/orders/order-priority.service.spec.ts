import { OrderEntity } from './entities/order.entity';
import { OrderPriorityService } from './order-priority.service';
import { describe, it, expect } from '@jest/globals';

describe('OrderPriorityService', () => {
  const service = new OrderPriorityService();

  it('returns normal priority for a pending order with 1 unit', () => {
    const order = { quantity: 1, status: 'pending' } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('normal');
  });

  it('returns medium priority for a pending order with 3 units', () => {
    const order = { quantity: 3, status: 'pending' } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('medium');
  });

  it('returns high priority for a pending order with 4 units', () => {
    const order = { quantity: 4, status: 'pending' } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('high');
  });

  it('returns completed priority for a ready order with 5 units', () => {
    const order = { quantity: 5, status: 'ready' } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('completed');
  });
});