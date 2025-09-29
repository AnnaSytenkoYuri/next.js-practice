"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound(){

    const router = useRouter();
    useEffect(()=>{
        const timer = setTimeout(()=> router.push('/'),3000);
        return() => clearTimeout(timer);
    }, [router])

    return(
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Вас буде перенаправлено на головну через кілька секунд…</p>
            <Link href="/">Go back home</Link>
        </div>
    )
}