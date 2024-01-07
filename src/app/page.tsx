export default async function Home() {
  const resp = await fetch("http://localhost:3000/api/hello");

  console.log(resp.status);

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
