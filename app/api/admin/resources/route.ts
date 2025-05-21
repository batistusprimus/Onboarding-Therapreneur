import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const resources = await prisma.resource.findMany({
      include: {
        module: {
          select: {
            title: true,
          },
        },
      },
    })
    return NextResponse.json(resources)
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des ressources" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const resource = await prisma.resource.create({
      data: {
        title: data.title,
        type: data.type,
        size: data.size,
        moduleId: data.moduleId,
      },
      include: {
        module: {
          select: {
            title: true,
          },
        },
      },
    })
    return NextResponse.json(resource)
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la création de la ressource" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json()
    const resource = await prisma.resource.update({
      where: { id },
      data,
      include: {
        module: {
          select: {
            title: true,
          },
        },
      },
    })
    return NextResponse.json(resource)
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la mise à jour de la ressource" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.resource.delete({
      where: { id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la suppression de la ressource" }, { status: 500 })
  }
} 