// components/CouacCard.tsx
import Image from 'next/image';

export default function CouacWithoutImgaeCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/couac-icon.png" // replace with your icon in /public
            alt="Couac Icon"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black leading-tight">Couac</h2>
          <p className="text-xs text-red-600 uppercase font-semibold">Gare aux arnaques</p>
        </div>
      </div>

      <hr className="my-2 border-black/30" />

    

      {/* Article Title & Summary */}
      <div>
        <h3 className="text-lg font-bold underline text-black">
          Abonnements forcés chez Canal+ ?
        </h3>
        <p className="text-sm text-black mt-2">
          La chaîne détenue par le groupe Bolloré semble pratiquer des changements d’offres à l’insu de ses abonnés ?...
        </p>
      </div>

      <hr className="my-4 border-black/20" />

      {/* Sub-links */}
      <div className="space-y-2 text-sm text-black font-semibold">
        <p>Lycéens en Borne out</p>
        <p>« Ophelia’s Got Talent », histoires d’eau</p>
      </div>
    </div>
  );
}
