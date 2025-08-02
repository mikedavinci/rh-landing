import { create } from 'zustand';

interface AppState {
  isModalOpen: boolean;
  activeSection: string;
  setModalOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isModalOpen: false,
  activeSection: 'hero',
  setModalOpen: (open) => set({ isModalOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
}));