import { NextResponse } from 'next/server';

// Liste des clients avec leurs mots de passe
const clients = {
  'john-doe': {
    password: 'JohnDoe12345',
    clientInfo: {
      id: "john-doe",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "06 00 00 00 00",
      googleDocs: {
        "Plan de suivi": "https://docs.google.com/document/d/1ajCt2BPpTGqB7Lyo7MyBSpV9tgRk5fJr9pTiKLEGM4k/edit?usp=sharing",
        "Notes de séance": "https://docs.google.com/document/d/1AAJNzkxqJkeMz_3mR3zepiV4TL5asdK61MSi9Ndd2CE/edit?usp=sharing"
      }
    }
  },
  'template': {
    password: 'Template12345',
    clientInfo: {
      id: "template",
      name: "Client Template",
      email: "template@example.com",
      phone: "06 00 00 00 00",
      googleDocs: {
        "Plan de suivi": "https://docs.google.com/document/d/1ajCt2BPpTGqB7Lyo7MyBSpV9tgRk5fJr9pTiKLEGM4k/edit?usp=sharing",
        "Notes de séance": "https://docs.google.com/document/d/1AAJNzkxqJkeMz_3mR3zepiV4TL5asdK61MSi9Ndd2CE/edit?usp=sharing"
      }
    }
  }
};

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Vérifier le mot de passe pour chaque client
    for (const [clientId, client] of Object.entries(clients)) {
      if (client.password === password) {
        return NextResponse.json({
          success: true,
          clientId,
          clientInfo: client.clientInfo
        });
      }
    }

    // Si aucun client ne correspond
    return NextResponse.json({
      success: false,
      message: 'Mot de passe incorrect'
    }, { status: 401 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Une erreur est survenue'
    }, { status: 500 });
  }
} 