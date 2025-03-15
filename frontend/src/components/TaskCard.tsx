import { View, Text, Pressable } from 'react-native';
import ExpoCheckbox from 'expo-checkbox';
interface Props {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: (id: number, title: string, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TaskCard = ({ task, onToggle, onDelete }: Props) => {
  return (
    <View className="flex-row mb-4 border border-gray-300 rounded-lg p-4 bg-white dark:bg-gray-900 gap-2 justify-between">
      <Pressable
        className="p-4 border-b border-gray-300 flex-row items-center bg-white dark:bg-gray-900 gap-2"
        onPress={() => onToggle(task.id, task.title, task.completed)}
      >
        <ExpoCheckbox
          value={task.completed}
          onValueChange={() => onToggle(task.id, task.title, !task.completed)}
          color={task.completed ? '#4CAF50' : '#aaa'}
        />
        <Text
          style={{
            textDecorationLine: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#9ca3af' : '#000',
          }}
          className="ml-2 dark:text-white"
        >
          {task.title}
        </Text>
      </Pressable>
      <Pressable onPress={() => onDelete(task.id)}>
        <View className="p-4 flex-row items-center bg-white dark:bg-gray-900">
          <Text>🗑️</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TaskCard;
