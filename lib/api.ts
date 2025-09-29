import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = 'https://next-docs-api.onrender.com';

export const getNote = async (categoryId?: string) => {
  const response = await axios.get<NoteListResponse>('/notes', {
    params: {categoryId},
  });
  return response.data;
};

export const getSingleNote = async (id: string) => {
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
};

export const getCategoties = async () => {
    const res = await axios<Category[]>('/categories');
    return res.data
}
