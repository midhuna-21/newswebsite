import Image from 'next/image';

export default function SubscribeCanard() {
  return (
    <div className="w-full flex justify-center bg-white py-8 px-4">
      <div className="max-w-5xl w-full border-t-4 border-b-4 border-red-600 py-8 px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/canard-illustration.png"
              alt="Le Canard Illustration"
              width={400}
              height={300}
              className="h-auto w-auto max-w-full"
              priority
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              S&rsquo;ABONNER AU <span className="text-red-700">« CANARD »</span>
            </h2>
            <p className="mt-4 text-black text-base md:text-lg">
              <span className="font-bold">
                Le Canard enchaîné est un journal satirique d’investigation qui ne paraît que grâce à ses lecteurs.
              </span>{' '}
              Abonnez-vous et soutenez le palmipède en ligne, indépendant des annonceurs et de tous les pouvoirs en place.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-base rounded-md transition">
              Voir toutes nos offres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
