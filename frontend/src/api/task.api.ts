import axios, { AxiosError } from 'axios';

const baseURL = 'http://localhost:3000/api/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw new Error('Failed to fetch tasks');
  }
};

export const createTask = async (task: string, completed: boolean) => {
  try {
    const response = await axios.post(baseURL, { title: task, completed });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error adding task:', error.response?.data || error.message);
      throw new Error('Failed to add task');
    }
  }
};

export const updateTask = async (id: number, title: string, completed: boolean) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, { title, completed });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error updating task:', error.response?.data || error.message);
      throw new Error('Failed to update task');
    }
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error deleting task:', error.response?.data || error.message);
      throw new Error('Failed to delete task');
    }
  }
};
