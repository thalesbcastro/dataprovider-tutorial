export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    createdAt: string;
}

export interface IUsers {
    id: string;
    firstName: string;
    email: string;
    lastName: string
    status: boolean;
    birthday: string;
}