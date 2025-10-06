import { Phone, Clock, MapPin, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Այցելեք Մեզ
          </h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            Արիք փորձեք իսկական հայկական հյուրասիրությունը
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Զանգահարեք Մեզ</h3>
            <a href="tel:010600006" className="text-amber-400 hover:text-amber-300 transition-colors">
              010 600006
            </a>
            <p className="text-stone-400 text-sm mt-1">Առաքում Հասանելի է</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Աշխատանքային Ժամեր</h3>
            <p className="text-stone-300">09:30 - 00:00</p>
            <p className="text-stone-400 text-sm mt-1">Ամեն Օր</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Տեղադրություն</h3>
            <p className="text-stone-300">Երևան</p>
            <p className="text-stone-400 text-sm mt-1">Հայաստան</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <Instagram className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Հետևեք Մեզ</h3>
            <a
              href="https://instagram.com/pandok.yerevan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              @pandok.yerevan
            </a>
            <p className="text-stone-400 text-sm mt-1">7,265 հետևորդ</p>
          </div>
        </div>

        <div className="bg-stone-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Արեք Գրանցում</h3>
              <p className="text-stone-300 mb-6">
                Նախապես գրանցեք ձեր սեղանը՝ ապահովելու համար լավագույն փորձառությունը Տավերնա Երևանում
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ձեր Անունը"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Հեռախոսահամար"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Հյուրերի Քանակը"
                    min="1"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                >
                  Գրանցել Սեղան
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Կապվեք Մեզ Հետ</h3>
              <p className="text-stone-300 mb-6">
                Հարցեր ունե՞ք: Մենք ուրախ կլինենք լսել ձեզ
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ձեր Անունը"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Ձեր Էլ. Փոստը"
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ձեր Հաղորդագրությունը"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Ուղարկել Հաղորդագրություն</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-stone-400">
          <p className="mb-4">Երեմյան Պրոեկտների կողմից</p>
          <p>&copy; 2025 Տավերնա Երևան: Բոլոր իրավունքները պաշտպանված են:</p>
        </div>
      </div>
    </section>
  );
}
