import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { Fireworks } from "@fireworks-js/react";

export default function Page2() {
  const [hearts, setHearts] = useState([]);
  const [showFireworks, setShowFireworks] = useState(false);

  // Génère les cœurs animés de manière dynamique
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, { id: Date.now(), left: Math.random() * 100 }]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Gestion des feux d'artifice
  const triggerFireworks = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000); // Les feux d'artifice durent 3 secondes
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Texte principal */}
      <h1 className="text-4xl font-bold text-pink-600 max-w-2xl">
        Déjà 3 ans qu'on se connait, bon anniversaire mon amoireuse ❤️. 
        Je suis plus qu'heureux de t'avoir à mes côtés tous les jours, que tu me supportes toujours et que tu sois le ptit rayon de soleil dans ma vie. Merci d'exister ❤️. 
        JE T'AIME (ps: clique sur le bouton juste en dessous hehe)
      </h1>

      {/* Bouton pour télécharger le PDF */}
      <a
        href="/document.pdf"
        download
        onClick={triggerFireworks} // Lancer les feux d'artifice
        className="mt-10 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg transition hover:bg-pink-400 cursor-pointer"
      >
        Clique-moi
      </a>

      {/* Feux d'artifice */}
      {showFireworks && (
        <Fireworks
          options={{
            rocketsPoint: { min: 50, max: 50 }, // Centrage des feux d'artifice
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
        />
      )}

      {/* Cœurs animés */}
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="absolute text-pink-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${heart.left}%`,
            fontSize: "2rem",
            animation: "floatUp 5s ease-in infinite",
            pointerEvents: "none", // Empêche les cœurs de bloquer les clics
          }}
        />
      ))}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes floatUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  );
}
