export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: string };
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

export interface ICategory {
    id: string;
    title: string;
}