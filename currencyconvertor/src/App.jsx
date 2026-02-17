import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/usecurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  // Swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  // Convert logic
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  // Auto convert when amount or currency changes
  useEffect(() => {
    convert();
  }, [amount, from, to]);

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/34926383/pexels-photo-34926383.jpeg')",
      }}
    >
      <div className="w-[600px] h-[800px] flex justify-center items-center">
        <div className="w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* FROM */}
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="relative w-full h-0.6">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600  px-2 py-1"
              >
                Swap
              </button>
            </div>

            {/* TO */}
            <div className="w-full mt-2 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600  px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

            {loading && <p className="text-center mt-2">Loading...</p>}
            {error && <p className="text-center text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
