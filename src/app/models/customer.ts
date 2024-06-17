export class Customer {
    id: string;
    name: string;
    phone: string;
    email: string;
    age?: string;
    address: string;
    imageUrl?: string;
    status: string;

    constructor(id: string, name: string, email: string, phone: string, age: string, address: string, status: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.address = address;
        this.status = status;
    }
}
