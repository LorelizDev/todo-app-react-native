import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Text, View, TextInput, FlatList, Pressable, Alert, Platform } from 'react-native';
import './global.css';
import { getTasks, createTask, updateTask, deleteTask } from './src/api/task.api';
import TaskCard from './src/components/TaskCard';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      const tasks = response.tasks;
      setTasks(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task: string) => {
    try {
      const newTask = await createTask(task, false);
      setTasks([...tasks, newTask.task]);
      setTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id: number, title: string, completed: boolean) => {
    try {
      const updatedTask = await updateTask(id, title, !completed);
      setTasks(tasks.map(task => (task.id === id ? updatedTask.task : task)));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const removeTask = async (id: number) => {
    try {
      if (Platform.OS === 'web') {
        const confirm = window.confirm('Are you sure you want to delete this task?');
        if (confirm) {
          await deleteTask(id);
          setTasks(tasks.filter(task => task.id !== id));
        }
      } else {
        Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              await deleteTask(id);
              setTasks(tasks.filter(task => task.id !== id));
            },
          },
        ]);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View
      className="w-full justify-center items-center p-4 px-6 bg-gray-100"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <StatusBar style="auto" />
      <View className="w-full h-full max-w-md mx-auto">
        <Text className="text-2xl font-bold my-4 text-gray-800 text-center">Todo App</Text>
        <View className="mb-4 flex-row items-center justify-between gap-2">
          <TextInput
            value={task}
            onChangeText={setTask}
            placeholder="Add a task"
            className="p-3 border border-gray-300 rounded-lg bg-white w-3/4"
          />

          <Pressable
            onPress={() => addTask(task)}
            className="p-3 rounded-lg items-center bg-indigo-500 active:opacity-70 transition-all duration-300 w-1/4"
          >
            <Text className="text-white font-bold">Add Task</Text>
          </Pressable>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggle={() => toggleTask(item.id, item.title, item.completed)}
              onDelete={() => removeTask(item.id)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default App;
