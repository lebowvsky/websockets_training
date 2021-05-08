import { Field, InputType } from "type-graphql";
import { MinLength } from "class-validator";

@InputType()
export class GetAppUserByIdInput {
  @Field(() => String)
  id!: string;
}

@InputType()
export class CreateNewAppUserInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  @MinLength(6)
  password!: string;
}
