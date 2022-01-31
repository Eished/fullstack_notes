export class MessageModel {
  id: number
  content: string
  constructor(private _id: number, public message: string) {
    this.id = _id
    this.content = message
  }
}
