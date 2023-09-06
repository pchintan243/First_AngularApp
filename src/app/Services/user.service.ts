export class UserService {
  user = [
    { name: 'user1', status: 'active' },
    { name: 'user2', status: 'inactive' },
    { name: 'user3', status: 'active' },
  ]

  AddNewUser(name: string, status: string) {
    this.user.push({ name: name, status: status });
  }
}
