import "./StockCard.scss"

type StockCardProps = {
    ticker: string;
    high: string;
    low: string;
    last_refresh: string;
    change: string;
}

const StockCard = ({ticker, high, last_refresh, low, change}: StockCardProps) => {
return(
    <div className="stock-card">
        <div className="stock-card__header-container">
        <h3 className="stock-card__title">{ticker}</h3>
        <p className="stock-card__date">Last Refreshed: {last_refresh}</p>
        </div>
        <div className="stock-card__info-container">
        <p className="stock-card__info">High: {high}</p>
        <p className="stock-card__info">Low: {low}</p>
        </div>
        <h2 className="stock-card__change">{change}%</h2>
    </div>
)

}

export default StockCard

//KNR2MAJ90KECQ11L

// better website?
// https://polygon.io/docs/stocks/getting-started