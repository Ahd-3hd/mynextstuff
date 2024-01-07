export default async function Home() {
  const resp = await fetch("http://127.0.0.1:3000/api/hello");

  console.log(resp.status);

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
