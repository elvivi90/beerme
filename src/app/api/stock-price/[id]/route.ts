import { NextResponse } from "next/server";
import STOCK_PRICE from "../../../../data/stock-price";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (STOCK_PRICE[+id] !== undefined) {
    return NextResponse.json(STOCK_PRICE[+id]);
  }
  if (STOCK_PRICE[+id] === undefined) {
    return NextResponse.json({
      stock: 0,
      price: 0,
    });
  }
}
