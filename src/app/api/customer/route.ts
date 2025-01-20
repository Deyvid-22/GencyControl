import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prismaClient } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, phone, adress, userId } = await req.json();

  try {
    await prismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        adress: adress ? adress : "",
        userId: userId,
      },
    });
    return NextResponse.json({ message: "client created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create client" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json(
      { error: "Failed delete customer" },
      { status: 400 }
    );
  }

  const findTicket = await prismaClient.ticket.findFirst({
    where: {
      customerId: userId,
    },
  });

  if (findTicket) {
    return NextResponse.json(
      { error: "Failed to delete client" },
      { status: 400 }
    );
  }

  try {
    await prismaClient.customer.delete({
      where: {
        id: userId,
      },
    });
    return NextResponse.json({ message: "client deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete client" },
      { status: 400 }
    );
  }
}
