import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Home() {
  const [hearts, setHearts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Récupère les dimensions de la fenêtre

  // Confettis au chargement de la page
  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Les confettis disparaissent après 3 secondes
  }, []);

  // Génération dynamique des cœurs animés
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, { id: Date.now(), left: Math.random() * 100 }]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Fonction pour jouer un message vocal
  const playAudio = () => {
    const audio = new Audio("/joyeux-anniversaire.mp3"); // Assurez-vous que ce fichier existe dans public/
    audio.play();
  };

  // Gestion des confettis au clic
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Les confettis disparaissent après 3 secondes
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center">
      {/* Confettis */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          gravity={0.2} // Les confettis tombent plus lentement
          numberOfPieces={300} // Nombre de confettis affichés
        />
      )}

      {/* Musique de fond */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" /> {/* Fichier audio de fond */}
      </audio>

      {/* Titre principal */}
      <h1
        className="text-5xl font-bold text-pink-600 cursor-pointer"
        onClick={() => {
          playAudio(); // Joue le message vocal
          triggerConfetti(); // Affiche les confettis
        }}
      >
        JOYEUX ANNIVERSAIRE MON AMOIREUSE 
      </h1>

      {/* Bouton vers la deuxième page */}
      <Link href="/page2">
        <button className="mt-10 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg transition hover:bg-pink-400">
          Clique-moi 👉👈
        </button>
      </Link>

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
