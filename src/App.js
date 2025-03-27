import React, { useState } from "react";

const BUNNY =
  "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <BuggyButtons />;
}

const BuggyButtons = () => {
  const [openCount, setOpenCount] = useState(0);
  const IDs = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center mt-[50px]">
          {IDs.map((item) => {
            // IDs arrayini map methodu ile dolaşırken bir çıktı alabilmemiz için return eklememiz gerek
            return (
              <div key={item} className="mr-[10px]">
                <BuggyButton setOpenCount={setOpenCount} />
              </div>
            );
          })}
        </div>
        <div className="self-center mt-[20px]">
          {openCount + " açık tavşan "}
        </div>
      </div>
    </>
  );
};
// openCount değerini alt bileşende kullanmadığımız için gereksiz props göndermemize gerek yok ve alt bileşende kullanabilmemiz için props olarak yada destructer yaparak kullanabiliriz
const BuggyButton = ({ setOpenCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <img
      alt="bunny"
      src={BUNNY}
      height={300}
      width={200}
      onClick={() => {
        setOpenCount((p) => p - 1);
        setIsOpen(false);
      }}
    />
  ) : (
    <button
      onClick={() => {
        setOpenCount((p) => p + 1);
        setIsOpen(true);
      }}
    >
      TAVŞAN AÇ
    </button>
  );
};

export default App;
