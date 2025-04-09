import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { PlayCircle } from 'lucide-react';

interface Step1Props {
  onNext: (data: any) => void;
}

export const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [videosWatched, setVideosWatched] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ videosWatched });
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Introduction</h2>
      
      <p className="text-gray-600 mb-8">
        Bienvenue dans le programme Thérapreneur. Avant de commencer, visionne ces deux Looms pour comprendre le fonctionnement du programme et les règles de communication avec l'équipe.
      </p>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <PlayCircle className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Fonctionnement du dashboard</h3>
              <p className="text-sm text-gray-600 mb-2">5 minutes</p>
              <a
                href="https://www.loom.com/share/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Voir la vidéo →
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <PlayCircle className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Protocole Discord</h3>
              <p className="text-sm text-gray-600 mb-2">3 minutes</p>
              <a
                href="https://www.loom.com/share/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Voir la vidéo →
              </a>
            </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              id="videosWatched"
              checked={videosWatched}
              onChange={(e) => setVideosWatched(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="videosWatched" className="text-sm">
              J'ai visionné les deux vidéos
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-white"
            disabled={!videosWatched}
          >
            Continuer
          </Button>
        </form>
      </div>
    </Card>
  );
}; 