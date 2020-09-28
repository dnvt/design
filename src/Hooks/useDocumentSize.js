import React, { useState, useEffect, createContext, useContext } from "react";

const DocumentSizeCtx = createContext({ height: undefined });

export const DocumentSizeProvider = ({ children }) => {
  // Initialize state with undefined width/height so server and client renders match
  const [documentSize, setDocumentSize] = useState({
    height: undefined,
  });

  useEffect(() => {
    setDocumentSize({
      height: document.documentElement.offsetHeight - 144,
    });
  }, []);

  return (
    <DocumentSizeCtx.Provider value={documentSize}>
      {children}
    </DocumentSizeCtx.Provider>
  );
};

export const useDocumentSize = () => {
  return useContext(DocumentSizeCtx);
};
