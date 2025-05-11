import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class DeleteOrderResponse {
  @Field(() => Boolean)
  success!: boolean;

  @Field(() => ID)
  orderId!: string;

  @Field(() => String, { nullable: true })
  error?: string;
}