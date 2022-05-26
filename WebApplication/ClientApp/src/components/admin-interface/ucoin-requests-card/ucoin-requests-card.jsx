import { useDispatch } from "react-redux";
import { requestNameArr, REQUEST_ARR } from "../../../utils/ucoins-request";
import "./ucoin-requests-card.css";
import { setUserCoins } from "../../../redux/user/reducer";



export const UcoinRequestsCard = ({request}) => {
    const requestIndex = requestNameArr[request.requestType];
    const dispatch = useDispatch();
    return (
        <div className="ucoin-requests-card">
            
            <div className="ucoin-requests-card__image-container">
                <img src="/img/avatar.png" id="ucoin-requests-card__image"></img>
            </div>
            <div className="ucoin-requests-card__info">
                <div className="ucoin-requests-card__info__name">
                    <span className="ucoin-requests-card__info_title">ФИО</span>{request.fio}
                </div>
                <div className="ucoin-requests-card__info__email">
                    <span className="ucoin-requests-card__info_title">Почта</span>{request.email}
                </div>
                <div className="ucoin-requests-card__info__additionally">
                    <div className="ucoin-requests-card__info__comment">
                        {request.comment}
                    </div>
                    <div className="ucoin-requests-card__info__ucoins">
                        {REQUEST_ARR[requestIndex]} U
                    </div>
                </div>
                <div className="ucoin-requests-card__buttons">
                    <div className="ucoin-requests-card__accept yellow" onClick={() => {
                        const userInfo = {
                            userId : request.userId,
                            coinsAmount : REQUEST_ARR[requestIndex]
                        }
                        dispatch(setUserCoins(userInfo));
                    }}>
                        Начислить
                    </div>
                    <div className="ucoin-requests-card__refuse">
                        Отказать
                    </div>
                </div>
            </div>
        </div>
    )
}