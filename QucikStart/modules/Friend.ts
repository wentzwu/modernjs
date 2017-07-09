
export class Friend {
    FirstName: string;
    LastName: string;
    get FullName(): string {
        return `${this.LastName},${this.FirstName}`;
    }
}