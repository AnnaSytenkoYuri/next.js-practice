import NoteList from "@/components/NoteList/NoteList";
import { getNote } from "@/lib/api";

interface Props{
    params: Promise<{slug: string[]}>
}

export default async function NotesByCategory({params}: Props){
    const {slug} = await params;
    const category = slug[0] === 'all' ? undefined : slug[0];
    const response = await getNote(category)
    return(
        <div>
            <h1>Note list</h1>
            {response?.notes?.length > 0 && <NoteList notes={response.notes}/>}

        </div>
    )
}