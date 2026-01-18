export type TransactionType = 'income' | 'expense';

export type Category = string; // Simples por enquanto, pode virar Objeto

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    type: TransactionType;
    date: string;
    category: Category;
    memberId: string | null; // null = Família
    accountId: string;
    isRecurring?: boolean;
    installments?: {
        current: number;
        total: number;
    };
}

export interface FamilyMember {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
}

export interface BankAccount {
    id: string;
    name: string;
    balance: number;
}

export interface CreditCard {
    id: string;
    name: string;
    limit: number;
    currentBill: number;
    closingDay: number;
    dueDay: number;
    lastDigits: string;
    theme: 'black' | 'lime' | 'white';
}

export interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline: string;
}
