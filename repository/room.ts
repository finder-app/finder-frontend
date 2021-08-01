import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
import { Repository } from '~/repository/repository'
import { Room } from '~/pb/room_pb'

export class RoomRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
    super(axios, apollo)
  }

  getRooms(): Promise<Room.AsObject[]> {
    return this.axios.get(`/rooms`)
  }
}