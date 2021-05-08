import { Resolver, Query, Mutation, Arg } from "type-graphql";
import AppUser from "../models/AppUser";
import { GetAppUserByIdInput, CreateNewAppUserInput } from "../inputs/AppUserInput";

@Resolver()
export default class AppUserResolver {
  @Query(() => AppUser)
  getUserById(@Arg("id") id: GetAppUserByIdInput): Promise<AppUser | undefined> {
    return AppUser.findOne(id);
  }

  @Query(() => [AppUser])
  appUsers(): Promise<AppUser[]> {
    return AppUser.find();
  }

  @Mutation(() => AppUser)
  async createAppUser(@Arg("data") data: CreateNewAppUserInput): Promise<AppUser> {
    const appUser = AppUser.create(data);

    if (!appUser) throw new Error("impossible to create new user");

    await appUser.save();
    return appUser;
  }
}
