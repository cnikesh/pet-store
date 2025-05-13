import { Injectable } from '@nestjs/common';
import { CreateOrderInput, CreateOrderServiceDto } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from '../prisma/prisma.service';
import { DeleteOrderResponse } from './dto/delete-order-response';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {

  constructor(private prisma: PrismaService){
    
  }
  create(createOrderInput: CreateOrderServiceDto) {
    const { items, totalAmount, userId } = createOrderInput;
    return this.prisma.order.create({
      data: {
        totalAmount,
        items:{
          create: items.map((item) => ({
            quantity: item.quantity,
            price: item.price,
            product: {
              connect:{
                id: item.productId
              }
            }
          }))
        },
        userId
      },
      include:{
        items:{
          include:{
            product: true
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.order.findMany({
      include:{
        items:{
          include:{
            product:true,
          }
        }
      }
    });
  }
  findUserOrders(userId: string) {
    return this.prisma.order.findMany({
      where: {
        userId,
        status: {
          not: 'PAYMENT_REQUIRED',
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    return this.prisma.order.update({
      where:{id},
      data: { ...updateOrderInput},
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async removeUnPaid(id: string): Promise<DeleteOrderResponse> {
    const order = await this.prisma.order.findUnique({
      where:{
        id
      }
    });
    if(!order){
    return {
      success: true,
      orderId: id
    }

    }

    if(order.status === OrderStatus.PAYMENT_REQUIRED){
      await this.prisma.order.delete({
        where:{
          id
        }
      })
      return {
        success: true,
        orderId: id
      }
    }

    return{
      success: false,
      orderId: id,
      error: 'Order is not in PAYMENT_REQUIRED state'
    }
  }
}
