export class InOrderUser {

    id: number;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    
    public CurrentState(id: number, username: string, firstname: string, lastname: string, password: string) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }
    
}
