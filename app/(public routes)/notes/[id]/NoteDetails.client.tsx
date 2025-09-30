"use client";

import { getSingleNote } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function NoteDetailsClient() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note, id'],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Some Error</p>;

  const formattedDate = note.updatedAt
    ? `Update at: ${note.updatedAt}`
    : `Create at: ${note.createdAt}`;

    const handlCoBack = () =>{
    const isSure = confirm('Are you sure');
    if (isSure){
      router.back();
    }
    }

  return (
    <div>
      <button onClick={handlCoBack}>Back</button>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
