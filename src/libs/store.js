import { create } from 'zustand';

const useStore = create((set) => ({
  isGridOverlayVisible: false,
  toggleGridOverlayVisibility: () =>
    set((state) => ({ isGridOverlayVisible: !state.isGridOverlayVisible })),

  isBizCardVisible: false,
  toggleBizCard: () => set((state) => ({ isBizCardVisible: !state.isBizCardVisible })),
}));

export default useStore;
