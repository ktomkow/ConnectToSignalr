import React, { useEffect } from "react";

const Simple = () => {
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    console.log("mount");
  }, []);
  
  return (
    <>
      <div>Hello Dupa</div>
    </>
  );
};

export default Simple;
