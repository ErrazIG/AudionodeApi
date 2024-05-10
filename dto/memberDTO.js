export class MemberDTO {
    constructor({id, username, email, description, role_id, img}) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.description = description;
      this.role_id = role_id;
      this.img = img;
    }
  }