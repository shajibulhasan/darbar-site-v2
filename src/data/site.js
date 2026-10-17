export const SITE_NAME = 'আস্তানায়ে পাক দরবারে মূসাবীয়া';

export const committees = [
  { to: '/committees/monoyon-porishad', title: 'মনোনয়ন পরিষদ', desc: 'কেবিনেট বা নীতি নির্ধারণী ফোরাম', meta: 'মুরিদান সদস্য ৬২ জন' },
  { to: '/committees/ershad-tablig', title: 'এরশাদুত্ব তবলীগ কমিটী', desc: 'পাক দরবারে মূসাবীয়া', meta: 'সর্বনিম্ন ৫৫ জন মুরিদান' },
  { to: '/committees/entejamia', title: 'এন্তেজামেয়া কমিটি', desc: 'পাক দরবারে মূসাবীয়া', meta: 'সর্বনিম্ন ৩৭ জন মুরিদান' },
  { to: '/committees/jomiyate-ulama', title: 'জমঈয়তে ওলামায়ে মূসাবীয়া', desc: 'তাকওয়াদার আলেম-ওলামাদের জমঈয়ত', meta: 'প্রয়োজনীয় সংখ্যক আলেম-ওলামা' },
  { to: '#', title: 'জমঈতুল ওশশাকে মূসাবীয়া', desc: 'মুরীদানের সংগঠন', meta: 'সাধারণ, বিশিষ্ট ও অনুমোদ্য মেম্বার' },
];

export const committeeLinks = [
  { to: '/committees/monoyon-porishad', label: 'মনোনয়ন পরিষদ' },
  { to: '/committees/ershad-tablig', label: 'এরশাদুত্ব তবলীগ কমিটী' },
  { to: '/committees/entejamia', label: 'এন্তেজামেয়া কমিটি' },
  { to: '/committees/jomiyate-ulama', label: 'জমঈয়তে ওলামায়ে মূসাবীয়া' },
  { to: '#', label: 'জমঈয়তুল ওশশাকে মূসাবীয়া' },
];

export const dayras = [
  { name: 'পোপাদিয়া বোয়ালখালী', type: 'স্থায়ী শাখা' },
  { name: 'কদম রসূল', type: 'স্থায়ী শাখা' },
  { name: 'পুরাতন বিএফডিসি ঢাকা', type: 'স্থায়ী শাখা' },
  { name: 'চান্দগাঁও', type: 'স্থায়ী শাখা' },
  { name: 'চাকতাই', type: 'অস্থায়ী শাখা', temporary: true },
  { name: 'বাকলিয়া', type: 'স্থায়ী শাখা' },
];

const BN = '০১২৩৪৫৬৭৮৯';
export const bn = (n) => String(n).replace(/\d/g, (d) => BN[d]);
