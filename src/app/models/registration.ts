export class Registration{
    firstName: string;
    lastName ?: string;
    email: string;
    password: string;
    phoneNumber:string;
    age ?: string;
    dob ?: string;
    status ?: string;
    lockUser ?: string;
    company ?: string;
    address ?: string;
    zone ?: string;
    lastLogin?: string;


    constructor(firstName: string, email: string, password: string,phoneNumber :string) {
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber
    }

    
}