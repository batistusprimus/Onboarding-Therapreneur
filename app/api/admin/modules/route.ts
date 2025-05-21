import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const modules = await prisma.module.findMany({
      include: {
        _count: {
          select: {
            resources: true,
          },
        },
      },
    })
    return NextResponse.json(modules)
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des modules" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const module = await prisma.module.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        lessons: data.lessons,
        duration: data.duration,
      },
    })
    return NextResponse.json(module)
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la création du module" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json()
    const module = await prisma.module.update({
      where: { id },
      data,
    })
    return NextResponse.json(module)
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la mise à jour du module" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.module.delete({
      where: { id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la suppression du module" }, { status: 500 })
  }
} 