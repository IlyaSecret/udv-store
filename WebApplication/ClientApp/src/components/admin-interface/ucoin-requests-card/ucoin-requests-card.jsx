import { useDispatch } from "react-redux";
import { requestNameArr, REQUEST_ARR } from "../../../utils/ucoins-request";
import "./ucoin-requests-card.css";
import { setUserCoins } from "../../../redux/user/reducer";
import { useRemoveRequestMutation } from "../../../redux/ucoin-req/ucoinRequestApi";
import { useState } from "react";
import { ModalWindow } from "../../modal-window/modal-window";



export const UcoinRequestsCard = ({request}) => {
    const [modalActive, setModalActive] = useState(false);
    const [removeRequest, {error}] = useRemoveRequestMutation();
    const requestIndex = requestNameArr[request.requestType];
    const dispatch = useDispatch();
    const remove = async () => {
        const id = request.id
        await removeRequest(id);
        location.reload();
    }
    const handleClick = () => {
        setModalActive(true);
    }
    return (
        <div className="ucoin-requests-card">
             <ModalWindow active={modalActive} setActive={setModalActive}>
                <div className="ucoin-requests-card__title">
                    Причина отказа
                </div>
                <div className="ucoin-requests-card__name">
                <div className="modal_full-name">
                                <p className="modal_user-info_title name">ФИО</p>
                                <p className="modal_user-info_value">{request.fio}</p>
                            </div>
                </div>
                <label>
                       <input id="get-ucoins-comment" placeholder="Ваш комментарий" onChange={(e) => setComment(e.target.value)}></input>
                   </label><br></br>
                   <div className="ucoin-requests-card__refuse refuse_request" onClick={() => remove()}>
                        Сохранить
                    </div>
            </ModalWindow>
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
                    <div className="ucoin-requests-card__info__comment">
                        {requestNameArr[request.requestType] }
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
                        remove();
                    }}>
                        Начислить
                    </div>
                    <div className="ucoin-requests-card__refuse" onClick={() => handleClick()}>
                        Отказать
                    </div>
                </div>
            </div>
        </div>
    )
}