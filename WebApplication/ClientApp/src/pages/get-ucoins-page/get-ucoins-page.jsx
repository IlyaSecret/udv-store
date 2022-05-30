import { useState } from "react";
import { GreenRegularButton } from "../../components/buttons/green-regular-button/green-regular-button";
import { requestNameArr } from "../../utils/ucoins-request";
import "./get-ucoins-page.css";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { getUcoinRequests, useAddRequestMutation } from "../../redux/ucoin-req/ucoinRequestApi";
import { ModalWindow } from "../../components/modal-window/modal-window";

export const GetUcoinsPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const user = useSelector((state) => state.user.user);
    const [lastname, firstname, patronymic] = user?.fio.split(" ")
    const [value, setValue] = useState('');
    const [comment, setComment] = useState("");
    const options = requestNameArr.map((el, index) => <option className="option-value" key={index} id="option-value-getucoins">{el}</option>);
    const requestType = requestNameArr.findIndex(el => el == value);
    const [addRequest, {error}] = useAddRequestMutation();

    return (
        <div className="get-ucoins-page">
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <img src="/img/tic.png"></img> <br></br>
                Заявка отправлена
            </ModalWindow>
            <span className="yellow">Хочу UCoins </span>
            <div className="get-ucoins-page__container">
            <div className="get-ucoins-page__info">
                <div className="get-ucoins-page__info__lastname">
                    <label>
                        <div className="get-ucoins-page__info__title">Фамилия</div>
                        <input id="get-ucoins-lastname" value={lastname}></input>
                    </label>
                </div>
                <div className="get-ucoins-page__info__firstname">
                <label>
                    <div className="get-ucoins-page__info__title">Имя</div>
                        <input id="get-ucoins-firstname" value={firstname}></input>
                    </label>
                </div>
                <div className="get-ucoins-page__info__patronymic">
                <label>
                        <div className="get-ucoins-page__info__title">Отчество</div>
                        <input id="get-ucoins-patronymic" value={patronymic}></input>
                    </label>
                </div>
                <div className="get-ucoins-page__info__comment">
                <label>
                       
                        <input id="get-ucoins-comment" placeholder="Ваш комментарий" onChange={(e) => setComment(e.target.value)}></input>
                    </label>
                </div>
                    <label className="custom-file-upload">
                        <input type="file"/>
                        + Прикрепить вложение
                    </label>
                <div className="get-ucoins-button" onClick={ () => {
                        let requestInfo = {
                            requestTypeId : requestType,
                            comment : comment
                        }
                        addRequest(requestInfo);
                        setModalActive(true);
                    }
                    }>
                    <GreenRegularButton value="Отправить" color={"#F2CB05"}></GreenRegularButton>
                </div>
                
            </div>
            <div className="get-ucoins-page__select-option">
            <div className="request-select" id="get-ucoins-select">
                            <select className="modal-select" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Позиция">
                                {options}
                            </select>
                        </div>
            </div>
            </div>
            
        </div>
    )
}