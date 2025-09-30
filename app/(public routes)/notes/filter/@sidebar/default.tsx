import { getCategoties } from '@/lib/api';
import Link from 'next/link';

export default async function NotesSidebar() {
  const categories = await getCategoties();
  return (
    <ul>
      <li>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/notes/filter/&{gategory.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}
