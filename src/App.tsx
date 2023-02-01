import './App.css';
import SliderInput from './components/SliderInput';
import StorageServices from './components/StorageServices';
import { useState } from 'react';

function App() {
  const [storage, setStorage] = useState(100);
  const [transfer, setTransfer] = useState(400);

  const handleChangeStorage = (e: any, data: number | number[], storage = false) => {
    if (typeof data === 'number' && storage) {
      setStorage(data)
    } 

    if (typeof data === 'number' && !storage) {
      setTransfer(data)
    } 
  }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, storage = false) => {
    let value = +e.target.value;

    if (value < 0) {
      value = 0;
    }

    if (value > 1000) {
      value = 1000;
    }
    
    if (storage) {
      setStorage(value);
    } else {
      setTransfer(value);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto w-full lg:w-1/2 sm:w-3/4 border-gray-200 border p-1 pt-10 sm:p-10 rounded-lg flex flex-col-reverse sm:flex-col gap-5">
        <SliderInput 
          handleChangeStorage={handleChangeStorage}
          inputChange={inputChange}
          storage={storage}
          transfer={transfer}
        />
        <StorageServices 
          storage={storage}
          transfer={transfer}
        />
      </div>
    </div>
  );
}

export default App;
