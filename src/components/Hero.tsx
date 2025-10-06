import { Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-stone-900/85 to-red-900/90 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <div className="text-amber-400 text-sm font-medium tracking-widest mb-2">
            ԵՐԵՄՅԱՆ ՊՐՈԵԿՏՆԵՐԻ ԿՈՂՄԻՑ
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Տավերնա Երևան
        </h1>

        <p className="text-xl md:text-2xl text-amber-100 mb-8 font-light">
          Ավանդական Հայկական Ազգային Խոհանոց
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 text-white">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="text-lg">09:30 - 00:00</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-amber-400/50" />
          <div className="flex items-center space-x-2 text-white">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span className="text-lg">Երևան, Հայաստան</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Ուսումնասիրել Մենյուն
          </a>
          <a
            href="tel:010600006"
            className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Պատվիրել Առաքում
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
