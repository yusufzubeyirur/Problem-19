import { useEffect, useState } from "react";

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>
      {isOpen && (
        <Modal>
          <h1 className="pb-2 text-lg font-bold">Modal açık</h1>
          <button onClick={closeModal}>Kapalı</button>
        </Modal>
      )}
    </>
  );
}

function Modal({ children, closeModal }) {
  useEffect(() => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, []);
  // ref.showModal()
  return (
    <dialog className="border-2 border-black p-4" onClose={closeModal}>
      {children}
    </dialog>
  );
}
