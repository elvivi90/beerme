import { NextResponse } from "next/server";
import PRODUCTS from '../../../data/products'


export async function GET () {
    const res = PRODUCTS
    return  NextResponse.json(PRODUCTS)
}