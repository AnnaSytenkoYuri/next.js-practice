import { Note } from '@/lib/api';
import Link from 'next/link';

interface NoteItemProps {
  item: Note;
}

export default function NoteItem({ item }: NoteItemProps) {
  return (
    <li>
        <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
}
