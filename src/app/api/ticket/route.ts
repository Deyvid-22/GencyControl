import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prismaClient } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "filed update ticket" });
  }

  try {
    await prismaClient.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "FECHEDO",
      },
    });

    return NextResponse.json({ message: "ticket updated successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "filed update ticket" }, { status: 400 });
  }
}

export async function POST(req: Request) {
  const { customerId, name, description } = await req.json();

  if (!customerId || !name || !description) {
    return NextResponse.json({ error: "filed create ticket" }, { status: 400 });
  }
  console.log("message", customerId, name, description);

  try {
    const ticket = await prismaClient.ticket.create({
      data: {
        name,
        description,
        customerId,
        status: "ABERTO",
      },
    });

    return NextResponse.json(ticket);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to create ticket" });
  }
}
