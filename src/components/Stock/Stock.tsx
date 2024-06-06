import { useEffect, useState } from "react";
import "./Stock.scss";
import StockCard from "../StockCard/StockCard";
import { StocksData } from "../../types/StocksType";
import Button from "../Button/Button";



const Stock = () => {
  const [ticker, setTicker] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [inputTicker, setInputTicker] = useState<string>("");
  const [stockData, setStockData] = useState<StocksData | null>(null);

  const handleTickerChange = () => {
    if (inputTicker.trim()) {
      setTicker(inputTicker);
    }
  };

  useEffect(() => {
    const fetchStockData = async () => {
      if (!ticker) return;
      try {
        const apiKey = "qEgA0cDIdKGMdXoHjP8jcScEfZIYmrJR"; 
        const result = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${apiKey}`
        );
        if (!result.ok) {
          throw new Error(`Something went wrong. HTTP status: ${result.status}`);
        }
        const data = await result.json();
        const stockInfo = data[0];

        const parsedData: StocksData = {
          name: stockInfo.name,
          price: stockInfo.price,
          changePercentage: stockInfo.changesPercentage,
          dayLow: stockInfo.dayLow,
          dayHigh: stockInfo.dayHigh,
        };
        setStockData(parsedData);
      } catch (error) {
        setError("Failed to fetch stock data. Please try again later.");
        console.error(error);
      }
    };
    fetchStockData();
  }, [ticker]);

  if (error) {
    return <div className="stock__error">{error}</div>;
  }

  return (
    <div className="stock">
      <div className="stock__input-container">
        <input
          type="text"
          value={inputTicker}
          onChange={(e) => setInputTicker(e.target.value)}
          placeholder="e.g AAPL"
          className="stock__input"
        />
        <Button label="🔍" onClick={handleTickerChange} variant="secondary" />
      </div>
      {stockData && (
        <div className="stock__data-container">
          <div className="stock__title-container">
       <h3>{stockData.name}</h3>
        <h3>{stockData.price}</h3>
            </div>
            <div className="stock__hilo-container">
        <p>High: {stockData.dayHigh}</p>
        <p>Low: {stockData.dayLow}</p>
              </div>
        <h2 className="stock__change">{stockData.changePercentage}%</h2>
        </div>
      )}
    </div>
  );
};

export default Stock;
