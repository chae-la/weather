import { useEffect, useState } from "react";
import "./Stock.scss";
import { StocksData } from "../../types/StocksType";
import Button from "../Button/Button";
import { currentDate } from "../Utilities/Date";
import { reload } from "../Utilities/Refresh";
import { capitals } from "../Utilities/Capitals";

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
        setError("Failed to fetch stock data. Please wait...");
        setStockData(null);
        setTimeout(reload, 2000)
        console.error(error);
      }
    };
    fetchStockData();
  }, [ticker]);

  if (error) {
    return <div className="stock__error">{error}</div>;
  }

  const arrowChange = (changePercentage: number) => {
    if (changePercentage > 0) {
      return "^";
    } else if (changePercentage === 0) {
      return "=";
    } else {
      return "v";
    }
  };

  const getChangeColor = (changePercentage: number) => {
    if (changePercentage > 0) {
      return "green";
    } else if (changePercentage < 0) {
      return "red";
    } else {
      return "black";
    }
  };


  return (
    <div className="stock">
      <h2 className="stock__title">Stocks</h2>
        <p className="stock__last-update">Last Updated: {currentDate}</p>
      <div className="stock__input-container">
        <input
          type="text"
          value={capitals(inputTicker)}
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
          <h2
            className="stock__change"
            style={{ color: getChangeColor(stockData.changePercentage) }}
          >
            {stockData.changePercentage}% {arrowChange(stockData.changePercentage)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Stock;
