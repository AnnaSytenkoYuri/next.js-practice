type Props = {
    params: Promise<{ slug: string[] }>;
  };
  
  export default async function DocsPage({ params }: Props) {
  
    return (
      <div>
        <h1>Docs page</h1>
        <p>Current path: {(await params).slug?.join(" / ") || "home"}</p>
      </div>
    );
  }