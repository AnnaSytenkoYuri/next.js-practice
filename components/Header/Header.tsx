import css from './Header.module.css';
import Link from 'next/link';
import { getCategoties } from '@/lib/api';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';

export default async function Header() {
  const categories = await getCategoties();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
