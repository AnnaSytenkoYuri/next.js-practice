import Modal from '@/components/Modal/Modal';
import { getSingleNote } from '@/lib/api';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: Props) {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </Modal>
  );
}
