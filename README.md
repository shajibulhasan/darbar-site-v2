# আস্তানায়ে পাক দরবারে মূসাবীয়া — React সাইট

Vite + React 18 + React Router + Bootstrap 5

## চালানো
```
npm install
npm run dev        # ডেভেলপমেন্ট (http://localhost:5173)
npm run build      # প্রোডাকশন বিল্ড → dist/
```

## ছবি
`public/images/` এ ছবি রাখুন: বড় স্ক্রিনে `bN.png`, ছোট স্ক্রিনে `bN.jpg`।
নতুন ছবির নম্বর `src/data/slides.js`-এ যোগ করুন।

## মেনু
`src/data/navigation.js` এডিট করলেই নেভবার বদলাবে (`to: "#"` = লিংক এখনও নেই)।

## হোস্টিং
`dist/` ফোল্ডারের ভেতরের সব ফাইল (`.htaccess` সহ) `public_html`-এ আপলোড করুন।
