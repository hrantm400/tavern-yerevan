import { useState } from 'react';
import { Flame } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Բոլոր Ուտեստները' },
    { id: 'appetizers', label: 'Առաջին Ուտեստներ' },
    { id: 'mains', label: 'Գլխավոր Ուտեստներ' },
    { id: 'grills', label: 'Խորոված' },
    { id: 'desserts', label: 'Աղանդերներ' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Խորոված',
      category: 'grills',
      description: 'Ավանդական հայկական խորոված բարձրակարգ մսի կտորներով',
      price: '₽ 4,500',
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      id: 2,
      name: 'Դոլմա',
      category: 'appetizers',
      description: 'Խաղողի տերևներ բրնձով և համեմունքներով լցոնված',
      price: '₽ 1,800',
      image: 'https://images.pexels.com/photos/5840071/pexels-photo-5840071.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      id: 3,
      name: 'Խաշ',
      category: 'mains',
      description: 'Ավանդական ապուր տավարի ոտքերից պատրաստված',
      price: '₽ 2,200',
      image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 4,
      name: 'Հարիսա',
      category: 'mains',
      description: 'Սննդարար շիլա ցորենով և մսով',
      price: '₽ 1,900',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 5,
      name: 'Ղափամա',
      category: 'mains',
      description: 'Դդում բրնձով, չորացրած մրգերով և ընկույզներով լցոնված',
      price: '₽ 2,100',
      image: 'https://images.pexels.com/photos/8477867/pexels-photo-8477867.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      id: 6,
      name: 'Գաթա',
      category: 'desserts',
      description: 'Քաղցր հացաբուլկեղեն կարագային լցոնումով',
      price: '₽ 800',
      image: 'https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 7,
      name: 'Ժինգյալով Հաց',
      category: 'appetizers',
      description: 'Հարթ հաց համեմունքներով լցոնված',
      price: '₽ 1,200',
      image: 'https://images.pexels.com/photos/3913008/pexels-photo-3913008.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false,
    },
    {
      id: 8,
      name: 'Լահմաջուն',
      category: 'appetizers',
      description: 'Հայկական հարթ հաց աղացած մսով',
      price: '₽ 1,500',
      image: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Մեր Մենյուն
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Բացահայտեք հայկական խոհանոցի իսկական համերը
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-amber-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Flame className="w-4 h-4" />
                    <span>Հանրաճանաչ</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.name}</h3>
                <p className="text-stone-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                    Պատվիրել
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">Ցանկանու՞մ եք տեսնել մեր ամբողջ մենյուն:</p>
          <button className="bg-stone-900 text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors">
            Ներբեռնել Ամբողջ Մենյուն
          </button>
        </div>
      </div>
    </section>
  );
}
