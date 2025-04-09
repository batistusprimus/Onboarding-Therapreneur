import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <Card className="w-full max-w-2xl p-8 bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="p-4 rounded-full bg-primary/10">
            <CheckCircle2 className="w-16 h-16 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Félicitations !
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Ton onboarding est maintenant terminé. Nous avons toutes les informations nécessaires pour t&apos;aider à développer ton activité.
          </p>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Voici ce qui va se passer maintenant :
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Nous analysons tes réponses</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Nous préparons tes recommandations personnalisées</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Tu recevras un email avec la suite du processus</span>
              </li>
            </ul>
          </div>
          
          <div className="pt-6">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white">
                Accéder à mon tableau de bord
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
} 