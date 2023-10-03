import SelectCustom from "@/components/SelectCustom";
import FormCustom from "@/components/formCustom";
import styled from "styled-components";

export default async function Home() {
  const data = await logs();

  // convert();
  return (
    <main>
      <FormCustom data={data}></FormCustom>
    </main>
  );
}
async function logs() {
  const response = await fetch(
    "http://api.exchangeratesapi.io/v1/symbols?access_key=" + process.env.API,
    { next: { revalidate: 600 } }
  );
  const movies = await response.json();
  const arr = Object.keys(movies.symbols);
  return arr;
}
