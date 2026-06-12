import "./appearancesCard.css";

export function AppearancesCard({ item }) {
    return (
        <div className="ap-card">
            <div className="ap-img">
                <img src={item.image} alt="appearance"></img>
            </div>
            <div className="ap-detail">
                <div className="ap-info">
                    <p className="ap-title">{item.title}</p>
                </div>
                <div className="ap-btn">
                    <a href={item.pdf} target="_blank" rel="noreferrer">
                        <button>PDF</button>
                    </a>
                </div>
            </div>
        </div>
    );
}


