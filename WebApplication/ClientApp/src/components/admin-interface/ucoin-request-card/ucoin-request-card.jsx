import "./ucoin-request-card.css";
import {useState} from 'react';
import { ModalWindow } from "../../modal-window/modal-window";
import { requestNameArr, REQUEST_ARR } from '../../../utils/ucoins-request';
import { useDispatch } from "react-redux";
import { setUserCoins } from "../../../redux/user/reducer";

export const RequestCard = ({user}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [modalActive, setModalActive] = useState(false);
    let ucoinsAmount = REQUEST_ARR[value];
    const options = requestNameArr.map((el, index) => <option className="option-value" key={index}>{el}</option>);
    return (
        <div className="request-card">
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__title yellow">
                            Начисление UCoins
                        </div>
                        <div className="modal__user-info">
                            <div className="modal_full-name">
                                <p className="modal_user-info_title name">ФИО</p>
                                <p className="modal_user-info_value">{user.fio}</p>
                            </div>
                            <div className="modal__email">
                                <p className="modal_user-info_title email">Почта</p>
                                <p className="modal_user-info_value">{user.email}</p>
                                
                            </div>
                        </div>
                        
                        <div className="modal__select">
                        <div className="request-select">
                            <select className="modal-select" value={value} onChange={(event) => setValue(event.target.value)}>
                                {options}
                            </select>
                        </div>
                        </div>
                        <div className="modal__number">
                            <input class="req-input" type="text" placeholder="Введите число" style={{color:"white"}} value={ucoinsAmount}></input>U
                        </div>
                        <div className="modal__button">
                            <div className="modal__button__content yellow" onClick={() => {
                                const userInfo = {
                                    userId : user.id,
                                    coinsAmount : ucoinsAmount
                                }
                                dispatch(setUserCoins(userInfo))
                                }}>Начислить</div>
                        </div>
                    </div>
                </div>
            </ModalWindow>
            <div className="request-card__name">{user.fio}</div>
            <div className="request-card__email">{user.email}</div>
            <div className="request-card__acc-ucoins yellow underline" onClick={() => setModalActive(true)}>Начислить UCoins</div>
        </div>
    )
}