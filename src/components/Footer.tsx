
// components/FooterLeCanard.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="bg-gray-700 text-white text-center py-3 text-lg font-semibold">
        Contacter « Le Canard »
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h2 className="text-base font-bold mb-2">CŒUR DE « CANARD »</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">À propos du « Canard »</a></li>
            <li><a href="#" className="hover:underline">Nos journalistes</a></li>
            <li><a href="#" className="hover:underline">Nos dessinateurs</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-base font-bold mb-2">LA BOUTIQUE</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Abonnement</a></li>
            <li><a href="#" className="hover:underline">Offrir le « Canard »</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-1 pt-7 md:pt-0">
            <li><a href="#" className="hover:underline">Acheter le journal</a></li>
            <li><a href="#" className="hover:underline">Acheter un dossier</a></li>
          </ul>
        </div>
      </div>

      {/* Social & App Links */}
      <div className="border-t border-gray-200 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Socials */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">SUIVRE LE PALMIPÈDE</span>
            <div className="flex space-x-3">
              <a href="#"><img src="/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#"><img src="/x-twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
              <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
              <a href="#"><img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
            </div>
          </div>

          {/* App Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">LES APPS DU « CANARD »</span>
            <a href="#"><img src="/appstore.png" alt="App Store" className="h-10" /></a>
            <a href="#"><img src="/googleplay.png" alt="Google Play" className="h-10" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-xs text-center text-gray-600 py-4 px-4 flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto space-y-2 lg:space-y-0">
        <div>
          <span className="mr-1">© 1915-2025</span>
          <span className="font-medium">Le Canard enchaîné</span>
          <span className="text-red-600 mx-1">•</span>
          <span>Tous droits réservés</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Politique de confidentialité</a>
          <a href="#" className="hover:underline">Gestion des cookies</a>
          <a href="#" className="hover:underline">CGV</a>
          <a href="#" className="hover:underline">Aide (FAQ)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
