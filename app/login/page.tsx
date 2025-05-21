'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const clientInfo = localStorage.getItem('clientInfo');
    if (clientInfo) {
      const { id } = JSON.parse(clientInfo);
      router.push(`/clients/${id}`);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Ici, nous ferons une vérification simple du mot de passe
      // Pour l'instant, c'est un placeholder
      const response = await fetch('/api/auth/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Stocker les informations du client en session
        localStorage.setItem('clientInfo', JSON.stringify(data.clientInfo));
        // Rediriger vers la page client
        router.push(`/clients/${data.clientId}`);
      } else {
        setError(data.message || 'Mot de passe incorrect');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Bienvenue sur Thérapreneur
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Entrez votre mot de passe pour accéder à votre espace
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2C3E50] focus:border-[#2C3E50] focus:z-10 sm:text-sm"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2C3E50] hover:bg-[#1a2530] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C3E50]"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 