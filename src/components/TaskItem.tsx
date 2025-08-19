import type { TaskItemProps } from '../types/types';

export default function TaskItem({
  name,
  status,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div>
      <span style={{ textDecoration: status ? 'line-through' : 'none' }}>
        {name}
      </span>

      <button onClick={onToggle}>{status ? 'Undo' : 'Complete'}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
