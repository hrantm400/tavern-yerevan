import { Award, Heart, Users, ChefHat } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: ChefHat,
      title: 'Ավանդական Բաղադրատոմսեր',
      description: 'Իսկական հայկական ուտեստներ, որոնք փոխանցվել են սերնդից սերունդ',
    },
    {
      icon: Heart,
      title: 'Սիրով Պատրաստված',
      description: 'Յուրաքանչյուր կերակուր պատրաստվում է կիրքով ու հոգատարությամբ',
    },
    {
      icon: Award,
      title: 'Բարձր որակ',
      description: 'Միայն ամենալավ տեղական բաղադրիչներ',
    },
    {
      icon: Users,
      title: 'Ընտանեկան մթնոլորտ',
      description: 'Ջերմ հյուրասիրություն ավանդական հայկական ոճով',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Հայկական Ժառանգության Համ
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Տավերնա Երևան-ը բերում է ձեզ հայկական ազգային խոհանոցի հարուստ համերը
            ջերմ, հրավիրիչ մթնոլորտում: Ավանդական խորովածից մինչև բուրավետ դոլմա,
            յուրաքանչյուր ուտեստ պատմում է մեր հնագույն խոհարարական ավանդույթների պատմությունը:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-stone-50 transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
              <p className="text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-stone-900 mb-6">
              Մեր Պատմությունը
            </h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Հիմնադրված Երեմյան Պրոեկտների կողմից, Տավերնա Երևան-ը դարձել է
              հայկական խոհարարական գերազանցության անկյունաքար: Մենք հարգում ենք մեր
              ժառանգությունը՝ ստեղծելով անմոռանալի ճաշակային փորձառություններ:
            </p>
            <p className="text-stone-600 leading-relaxed">
              Մեր խոհարարները համադրում են ժամանակի կողմից ստուգված տեխնիկաները
              ամենաթարմ բաղադրիչների հետ՝ մատուցելու ուտեստներ, որոնք բռնում են
              հայկական հյուրասիրության էությունը:
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
