import { NextResponse } from "next/server";

type reqType = {
  from: string;
  to: string;
  amount: number;
};

export async function POST(req: Request) {
  const body = await req.json();
  const { from, to, amount }: reqType = body;

  const res = await fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API}&symbols=${from},${to}`,
    {
      next: { revalidate: 600 },
    }
  );
  const data = await res.json();
  const rate = [1 / data.rates[from], 1 / data.rates[to]];
  const convert = (rate[0] / rate[1]) * amount;
  const result = Math.round(convert * 100) / 100;

  return NextResponse.json({ from, amount, to, result });
}
