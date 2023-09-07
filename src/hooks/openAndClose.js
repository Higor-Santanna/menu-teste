import { useEffect, useState } from "react";

const openingHours = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const checkOpeningHours = () => {
      const data = new Date();
      const day = data.getDay();
      const hour = data.getHours();
      const minutes = data.getMinutes();
  
      // Verificar se é segunda-feira (dia 1) ou se está dentro do horário de abertura/fechamento
      if (day !== 1 && (hour >= 18 && hour < 23) || (hour === 23 && minutes === 0)) {
        setIsOpen(true); // Está fechado
      } else {
        setIsOpen(false); // Está aberto
      }
    };
  
    useEffect(() => {
      checkOpeningHours();
      const intervalId = setInterval(() => {
        checkOpeningHours();
      }, 1000); // Verificar a cada segundo
      return () => clearInterval(intervalId); // Limpar o intervalo quando o componente for desmontado
    }, []);
  
    return {
      isOpen,
    };
};

export { openingHours }