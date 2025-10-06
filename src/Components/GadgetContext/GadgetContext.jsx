import { createContext, useState, useEffect } from 'react';



const GadgetContext = createContext();

export const GadgetProvider = ({ children }) => {
  const [gadgets, setGadgets] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('/gadgetData.json')
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching gadget data:', error);
        setLoading(false); 
      });
  }, []);



  return (
    <GadgetContext.Provider value={{ gadgets , loading }}>
      {children}
    </GadgetContext.Provider>
  );
};

export default GadgetContext;