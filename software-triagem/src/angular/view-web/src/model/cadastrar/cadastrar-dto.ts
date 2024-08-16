export class CadastroDto {
    fullName: string;
    phone: string;
    address: string;
    birthDate: string;
    email: string;
    password: string;


    constructor(fullName: string, phone: string, address: string, birthDate: string, email: string, password: string) {
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
    }
}
