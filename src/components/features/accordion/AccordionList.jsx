import { useState } from "react";
import AccordionItem from "./AccordionItem";

function AccordionList({ panels }) {
  // Estado inicializado en `null` para que no haya paneles abiertos al inicio
  const [activeIndex, setActiveIndex] = useState(null);

  // Función que permite alternar entre abrir/cerrar un panel
  const handleShow = (id) => {
    setActiveIndex(activeIndex === id ? null : id); // ✅ Ahora permite abrir y cerrar
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(1fr)" }}>
      {panels.map((panel) => (
        <AccordionItem
          key={panel.id}
          title={panel.title}
          onShow={() => handleShow(panel.id)}
          isActive={activeIndex === panel.id} // Solo el panel activo se muestra
        >
          {panel.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default AccordionList;

