import { useNavigate } from 'react-router-dom';

export function useNavigation() {
    const navigate = useNavigate();

    const navItems = [
        { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
        { label: 'Transações', path: '/transactions', icon: 'ArrowLeftRight' },
        { label: 'Cartões', path: '/cards', icon: 'CreditCard' },
        { label: 'Objetivos', path: '/goals', icon: 'Target' },
        { label: 'Perfil', path: '/profile', icon: 'User' },
    ];

    return { navigate, navItems };
}
