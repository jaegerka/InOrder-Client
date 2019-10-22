export class InOrderUser {

    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    
    constructor(
        // id: number,
        firstname: string,
        lastname: string,
        username: string,
        password: string
    ) {
        // this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }

    public InOrderUser(firstname: string, lastname: string, username: string, password: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }

    // setId(id: number) {
    //     this.id = id;
    // }

    // getId() {
    //     return this.id;
    // }

    setUsername(username: string) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setFirstName(firstname: string) {
        this.firstname = firstname;
    }

    getFirstName() {
        return this.firstname;
    }

    setLastName(lastname: string) {
        this.lastname = lastname;
    }

    getLastName() {
        return this.lastname;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }
    
}
