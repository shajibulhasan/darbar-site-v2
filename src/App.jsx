import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import DarbarParichiti from './pages/DarbarParichiti.jsx';
import UrsNeyaz from './pages/UrsNeyaz.jsx';
import MonoyonPorishad from './pages/MonoyonPorishad.jsx';
import Entejamia from './pages/Entejamia.jsx';
import ErshadTablig from './pages/ErshadTablig.jsx';
import JomiyateUlama from './pages/JomiyateUlama.jsx';
import AdabeSalika from './pages/AdabeSalika.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<DarbarParichiti />} />
        <Route path="urs-neyaz" element={<UrsNeyaz />} />
        <Route path="adabe-salika" element={<AdabeSalika />} />
        <Route path="committees/monoyon-porishad" element={<MonoyonPorishad />} />
        <Route path="committees/ershad-tablig" element={<ErshadTablig />} />
        <Route path="committees/entejamia" element={<Entejamia />} />
        <Route path="committees/jomiyate-ulama" element={<JomiyateUlama />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}