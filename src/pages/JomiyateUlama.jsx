import CommitteeLayout from '../components/CommitteeLayout.jsx';
import FactsCard from '../components/FactsCard.jsx';

export default function JomiyateUlama() {
  return (
    <CommitteeLayout
      title="জমঈয়তে ওলামায়ে মূসাবীয়া"
      crumb="জমঈয়তে ওলামায়ে মূসাবীয়া"
      lead="তাকওয়াদার আলেম-ওলামাদের জমঈয়ত।"
      aside={
        <FactsCard
          rows={[
            ['গঠন', 'প্রয়োজনীয় সংখ্যক আলেম-ওলামা নিয়ে'],
            ['যোগ্যতা', 'তাকওয়াদার নেছাব পড়া আলেম, বা আরবী শিক্ষায় আরো উচ্চ শিক্ষিত'],
          ]}
        />
      }
    >
      <p className="intro">
        বেলায়তী রহস্যের দিকে যে তাকওয়াদার নেছাব পড়া আলেম আজিজী সহকারে পূর্ণ রুজূয়ী রত, তারাই আলেম।
      </p>
      <p>
        এই ধরনের আলেম, কিংবা আরবী শিক্ষায় আরো উচ্চ শিক্ষিত, প্রয়োজনীয় সংখ্যক আলেম-ওলামা নিয়ে গঠিত হয়{' '}
        <strong>জমঈয়তে ওলামায়ে মূসাবীয়া</strong>।
      </p>

      <h2>যাঁরা এই জমঈয়তের আলেম</h2>
      <ul className="duty-list">
        <li>তাকওয়াদার নেছাব পড়া আলেম।</li>
        <li>বেলায়তী রহস্যের দিকে আজিজী সহকারে পূর্ণ রুজূয়ী রত।</li>
        <li>অথবা আরবী শিক্ষায় আরো উচ্চ শিক্ষিত।</li>
      </ul>
    </CommitteeLayout>
  );
}
