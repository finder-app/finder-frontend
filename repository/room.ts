import { AxiosInstance } from 'axios'
import { Repository } from '~/repository/repository'
import { Room } from '~/finder-protocol-buffers/ts/room_pb'

export class RoomRepository extends Repository {
  constructor(axios: AxiosInstance) {
    super(axios)
  }

  getRooms(): Promise<Room.AsObject[]> {
    return this.axios.get(`/rooms`)
  }
}