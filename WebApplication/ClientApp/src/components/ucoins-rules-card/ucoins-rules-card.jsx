import { REQUEST_ARR } from "../../utils/ucoins-request";
import "./ucoins-rules-card.css";

export const UcoinsRulesCard = ({position}) => {
    return (
        <div className="ucoins-rules-card">
            <div className="ucoins-rules-card__item">
                <div className="ucoins-rules-card__item__position">
                    {position}
                </div>
                <div className="ucoins-rules-card__item__amount">
                    {REQUEST_ARR[position]} U
                </div>
            </div>
             
        </div>
    );
}