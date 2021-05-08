import { Resolver, Query, Mutation, Arg, Subscription, Root, PubSub, Publisher } from "type-graphql";
import AppUser from "../models/AppUser";
import { GetAppUserByIdInput, CreateNewAppUserInput } from "../inputs/AppUserInput";

type newAppUserNotificationPayload = {
  appUser: AppUser
}

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

  @Subscription({
    topics: 'NEW_APPUSER',
  })
  newAppUser(
    @Root() notificationPayload: newAppUserNotificationPayload,
  ): AppUser {
    return notificationPayload.appUser;
  }


  @Mutation(() => AppUser)
  async createAppUser(@Arg("data") data: CreateNewAppUserInput, @PubSub('NEW_APPUSER') publishNewAppUser: Publisher<newAppUserNotificationPayload>): Promise<AppUser> {
    const appUser = AppUser.create(data);

    if (!appUser) throw new Error("impossible to create new user");

    await appUser.save();
    publishNewAppUser({ appUser })
    return appUser;
  }
}
