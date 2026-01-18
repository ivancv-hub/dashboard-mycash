import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutShell } from './components/layout/LayoutShell';

// Placeholders para as Views (serão implementadas nos próximos prompts)
const Dashboard = () => <div className="p-8"><h1 className="text-display-sm text-neutral-1000">Dashboard</h1></div>;
const Transactions = () => <div className="p-8"><h1>Transações</h1></div>;
const Cards = () => <div className="p-8"><h1>Cartões</h1></div>;
const Goals = () => <div className="p-8"><h1>Objetivos</h1></div>;
const Profile = () => <div className="p-8"><h1>Perfil</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <LayoutShell>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LayoutShell>
    </BrowserRouter>
  );
}

export default App;
