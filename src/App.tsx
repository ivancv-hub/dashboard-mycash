import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutShell } from './components/layout/LayoutShell';
import { SidebarProvider } from './contexts/SidebarContext';
import Dashboard from './pages/Dashboard';

// Placeholders para as Views
const Transactions = () => <div className="p-8"><h1>Transações</h1></div>;
const Cards = () => <div className="p-8"><h1>Cartões</h1></div>;
const Goals = () => <div className="p-8"><h1>Objetivos</h1></div>;
const Profile = () => <div className="p-8"><h1>Perfil</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
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
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
