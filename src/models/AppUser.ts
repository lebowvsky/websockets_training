import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID, } from "type-graphql";

@Entity()
@ObjectType()
export default class AppUser extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id!: string

  @Column()
  @Field()
  name!: string

  @Column()
  @Field()
  email!: string

  @Column()
  @Field()
  password!: string
}
