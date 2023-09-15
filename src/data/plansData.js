import tPilav from '../assets/image13.png';
import tSalata from '../assets/image14.png';
import taSalata from '../assets/tavuklu-salata.png';
import fitSand from '../assets/ton-balikli-sandvic-tarifi-nasil-yapilir.png';
import muz from '../assets/sera-muz-yetistiriciligi.png';
import elma from '../assets/elma-removebg-preview.png';
import portakal from '../assets/Orange_Goknur-removebg-preview.png';
import ptozu from '../assets/110000019802072-removebg-preview.png';
import bcca from '../assets/10353512808498-removebg-preview.png';
import lcarnit from '../assets/navy-plus-nutrition-l-carnitine-1000-ml-gakuv-removebg-preview.png';
import prework from '../assets/HIQ-SMASH-PRO-LEMON-THUMB_1400x-removebg-preview.png';
import water from '../assets/c842cf79-ebff-46e8-8803-c22eea9005ea-removebg-preview.png';
import water2 from '../assets/c99be34b-ec24-466d-bf10-5f172a6b793a.png';
import cay from '../assets/cay-removebg-preview.png';
import cayb from '../assets/325cc2e0-db76-4154-ab1f-c5e2580d147d-removebg-preview.png';
import kahve from '../assets/A_small_cup_of_coffee-removebg-preview.png';
import tkahve from '../assets/sutlu-turk-kahvesi-nasil-yapilir-removebg-preview.png';
import ekspresso from '../assets/espresso-nasil-yapilir-removebg-preview.png';
import latte from '../assets/blog-10-removebg-preview.png';
import icecaf from '../assets/Iced_Americano-removebg-preview.png';
import icelat from '../assets/iced-latte-removebg-preview.png';
import brew from '../assets/cold-brew-coffee-yeni-removebg-preview.png';
import ccil from '../assets/resimayar-removebg-preview.png';
import esuyu from '../assets/istockphoto-178875550-170667a-removebg-preview.png';
import psuyu from '../assets/sikma-portakal-suyu-2-sutis-removebg-preview.png';
import psm from '../assets/Cinnamon-Roll-Protein-Smoothie-1-removebg-preview.png';
import spec from '../assets/EBE-Chocolate-Protein-Smoothie-14-removebg-preview.png'

export const plansData = [
  {
    icon: <img src={tPilav} alt='' />,
    name: 'Tavuklu Pilav',
    price: '50₺',
    features: [
      'Taze Yağsız Tavuk Eti',
      'Düşük Kalorili Pilav',
      'Yüksek Proteinli',
    ],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={tPilav} alt='' />,
    name: 'Tavuklu Pilav Büyük',
    price: '70₺',
    features: [
      'Taze Daha Çok Tavuk Eti',
      'Düşük Kalorili Pilav',
      'Daha Yüksek Proteinli',
    ],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={tPilav} alt='' />,
    name: 'Sporcu Pilavı',
    price: '60₺',
    features: [
      'Özel Hazırlanmış Tarif',
      'Maksimum Besin Değeri',
      'Yüksek Proteinli',
    ],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={taSalata} alt='' />,
    name: 'Tavuklu Salata',
    price: '70₺',
    features: ['Kalorisiz Protein Kaynağı', 'Taze Yeşillikler', 'Lif Kaynağı'],
    category: ['Tümü', 'Yiyecek'],
  },

  {
    icon: <img src={tSalata} alt='' />,
    name: 'Ton Balıklı Salata',
    price: '70₺',
    features: ['Yüksek Omega 3', 'Az Yağlı', 'Kilo Vermeye Yardımcı'],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={fitSand} alt='' />,
    name: 'Fit Sandviç',
    price: '50₺',
    features: ['Kaliteli Karbonhidrat', 'Sağlıklı', 'Enerji Kaynağı'],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={muz} alt='' />,
    name: 'Muz',
    price: '15₺',
    features: ['Yüksek Potasyum', 'Yüksek Lif', 'Kaliteli Karbonhidrat'],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={elma} alt='' />,
    name: 'Elma',
    price: '10₺',
    features: ['Sindirim Dostu', 'Yüksek Lif', 'Kaliteli Karbonhidrat'],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={portakal} alt='' />,
    name: 'Portakal',
    price: '10₺',
    features: ['Yüksek C Vitamini', 'Yüksek Lif', 'Kaliteli Karbonhidrat'],
    category: ['Tümü', 'Yiyecek'],
  },
  {
    icon: <img src={ptozu} alt='' />,
    name: 'Protein Tozu',
    price: '45₺',
    features: ['Hızlı Protein', 'Düşük Kalori', 'Hızlı Gelişim'],
    category: ['Tümü', 'Sporcu Takviyesi'],
  },
  {
    icon: <img src={bcca} alt='' />,
    name: 'Bcaa',
    price: '45₺',
    features: ['Esansiyel A. Asitler', 'Hızlı Gelişim', 'Kas Kütle Koruma'],
    category: ['Tümü', 'Sporcu Takviyesi'],
  },
  {
    icon: <img src={prework} alt='' />,
    name: 'Pre-Workout',
    price: '50₺',
    features: ['Yüksek Pump', 'Yüksek Enerji', 'Yağ Yakımı'],
    category: ['Tümü', 'Sporcu Takviyesi'],
  },
  {
    icon: <img src={lcarnit} alt='' />,
    name: 'L-Carnitine',
    price: '45₺',
    features: ['Hızlı Yağ Yakımı', 'Yüksek Enerji', 'Yüksek Performans'],
    category: ['Tümü', 'Sporcu Takviyesi'],
  },
  {
    icon: <img src={water} alt='' />,
    name: 'Su 0.5L',
    price: '5₺',
    features: ['Kas Gelişimine Katkı'],
    category: ['Tümü', 'Meşrubat'],
  },
  {
    icon: <img src={water2} alt='' />,
    name: 'Su 1.5L',
    price: '10₺',
    features: ['Kas Gelişimine Katkı'],
    category: ['Tümü', 'Meşrubat'],
  },
  {
    icon: <img src={cay} alt='' />,
    name: 'Çay',
    price: '10₺',
    features: ['Taze Dem'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={cayb} alt='' />,
    name: 'Çay Bardak',
    price: '15₺',
    features: ['Taze Dem'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={kahve} alt='' />,
    name: 'Filtre Kahve',
    price: '35₺',
    features: ['Zengin Tat', 'Yüksek Kafein', 'Yüksek Performans'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={tkahve} alt='' />,
    name: 'Türk Kahvesi',
    price: '25₺',
    features: ['Taze', 'Yüksek Kafein'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={tkahve} alt='' />,
    name: 'Double Türk Kahvesi',
    price: '35₺',
    features: ['Taze', 'Ekstra Yüksek Kafein'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={kahve} alt='' />,
    name: 'Americano',
    price: '40₺',
    features: ['Taze', 'Yüksek Kafein', 'Yumuşak İçim'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={ekspresso} alt='' />,
    name: 'Ekspreso',
    price: '25₺',
    features: ['Hızlı Enerji', 'Yüksek Kafein', 'Yumuşak İçim'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={ekspresso} alt='' />,
    name: 'Double Ekspreso',
    price: '35₺',
    features: ['Hızlı Enerji', 'Yüksek Kafein', 'Yumuşak İçim'],
    category: ['Tümü', 'Kahveler'],
  },

  {
    icon: <img src={kahve} alt='' />,
    name: 'Sporcu Kahvesi',
    price: '45₺',
    features: ['Sporculara Özel', 'Yüksek Kafein', 'Yüksek Performans'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={latte} alt='' />,
    name: 'Latte',
    price: '45₺',
    features: ['Zengin Aroma', 'Yüksek Kafein', 'Daha Yumuşak İçim'],
    category: ['Tümü', 'Kahveler'],
  },
  {
    icon: <img src={icecaf} alt='' />,
    name: 'Soğuk Kahve',
    price: '40₺',
    features: ['Serinlemek İsteyenlere', 'Yüksek Kafein', 'Yüksek Performans'],
    category: ['Tümü', 'Soğuk Kahveler'],
  },
  {
    icon: <img src={icecaf} alt='' />,
    name: 'Ice Americano',
    price: '45₺',
    features: ['Yumuşak İçim', 'Yüksek Kafein', 'Yüksek Performans'],
    category: ['Tümü', 'Soğuk Kahveler'],
  },
  {
    icon: <img src={icelat} alt='' />,
    name: 'Ice Latte',
    price: '45₺',
    features: ['Daha Yumuşak İçim', 'Yüksek Kafein'],
    category: ['Tümü', 'Soğuk Kahveler'],
  },
  {
    icon: <img src={brew} alt='' />,
    name: 'Cold Brew',
    price: '50₺',
    features: [
      'Hızlı Serinlik',
      'Daha Yüksek Kafein',
      'Daha Yüksek Performans',
    ],
    category: ['Tümü', 'Soğuk Kahveler'],
  },
  {
    icon: <img src={ccil} alt='' />,
    name: 'Churcill',
    price: '25₺',
    features: ['Detox Etkisi', 'Anında Ferahlık', 'Kilo Vermeye Yardımcı'],
    category: ['Tümü', 'Vitamin Bar'],
  },
  {
    icon: <img src={esuyu} alt='' />,
    name: 'Elma Suyu',
    price: '50₺',
    features: ['Vitamin Deposu', 'Detox Etkisi', 'Yağ Yakımı'],
    category: ['Tümü', 'Vitamin Bar'],
  },
  {
    icon: <img src={psuyu} alt='' />,
    name: 'Portakal Suyu',
    price: '60₺',
    features: ['C Vitamini Deposu', 'Detox Etkili', 'Taze Sıkım'],
    category: ['Tümü', 'Vitamin Bar'],
  },
  {
    icon: <img src={psm} alt='' />,
    name: 'Protein Smothie',
    price: '70₺',
    features: ['Vitamini Deposu', 'Kaliteli Protein', 'Kas Gelişimine Katkı'],
    category: ['Tümü', 'Vitamin Bar'],
  },
  {
    icon: <img src={spec} alt='' />,
    name: 'Special',
    price: '80₺',
    features: ['Özel Tarif'],
    category: ['Tümü', 'Vitamin Bar'],
  },
];
