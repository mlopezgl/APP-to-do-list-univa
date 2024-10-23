export interface Task {
    id: number; 
    text: string;
    completed: boolean;
}

export const createTask = (id: number, text: string): Task => {
    return { id, text, completed: false};
};