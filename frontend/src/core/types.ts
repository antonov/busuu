export type Exercise = {
    id: string;
    content: string;
    user_id: string;
    created_at: string;
    user: User;
} 
export type User = {
    id: string;
    name: string;
} 