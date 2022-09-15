import { useDispatch } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";
import { useAppSelector } from "../hooks";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useAppSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    isDateModalOpen ? closeDateModal() : openDateModal();
  };

  return {
    // Propiedades
    isDateModalOpen,

    // Métodos
    openDateModal,
    closeDateModal,
    toggleDateModal,
  };
};
