// 'use client';

import NoteList from "@/components/NoteList/NoteList";
import { getNote} from "@/lib/api"
// import { useState } from "react";


export default async function Notes(){
     const response = await getNote();
     
     return (
         <section>
           <h1>Notes List</h1>
           {response.notes?.length > 0 && <NoteList notes={response.notes} />}
         </section>
       );
 }


// export default function Notes(){
//    const [notes, setNotes] = useState<Note[]>([]);
//    const handleClick = async() => {
//     const response = await getNote();
//     if (response?.notes){
//         setNotes(response.notes)
//     }
//    }
    
//     return (
//         <section>
//           <h1>Notes List</h1>
//           <button onClick={handleClick}>Get my notes</button>
//           {notes.length > 0 && <NoteList notes={notes} />}
//         </section>
//       );
// }