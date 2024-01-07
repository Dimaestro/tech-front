export interface IPropsLogin {
  setEmail: (value: string) => void,
  setPassword: (value: string) => void,
}

export interface IPropsRegister {
  setEmail: (value: string) => void,
  setPassword: (value: string) => void,
  setFirstName: (value: string) => void,
  setUsername: (value: string) => void,
}

export interface IStateAuth {
  user: IDataUser,
  isAuth: boolean,
}

interface IDataUser {
  id: number | null,
  firstName: string,
  username: string,
  createdAt: string
  updatedAt: string,
  watchlist: Array<IDataWatchlist>
}

interface IDataWatchlist {
  id: number | null,
  name: string,
  assetId: string,
  createdAt: string,
  updatedAt: string,
  user: number | null,
}
