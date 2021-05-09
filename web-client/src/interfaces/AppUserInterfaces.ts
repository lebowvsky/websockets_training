export type appUserProps = {
  name: string;
  email: string;
};

export interface appUserInterface {
  id: string;
  name: string;
  email: string;
}



export interface subscribeToNewAppUserInterface {
  newAppUser: appUserInterface
}