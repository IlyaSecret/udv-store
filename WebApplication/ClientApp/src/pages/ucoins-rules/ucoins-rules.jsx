import { UcoinsRulesCard } from "../../components/ucoins-rules-card/ucoins-rules-card";
import { requestNameArr, REQUEST_ARR } from "../../utils/ucoins-request";
import "./ucoins-rules.css";

export const UcoinsRules = () => {
    console.log(requestNameArr[0]);
    return (
        <div className="ucoins-rules">
            <div className="ucoins-rules__accural-rules">
                <div className="ucoins-rules__accural-rules__title">
                    <h3>Важные правила по начислению юкоинов</h3>
                </div>
                <div className="ucoins-rules__octopus">
                <img src="/img/octopus.png"></img>
                </div>
                
                <div className="ucoins-rules__accural-rules__list">
                    <li className="rules_list">Участие в мероприятии от лица Компании считается в качестве докладчика, либо архитектора мероприятия. Участие в конференциях в качестве слушателя не считается внешней активностью.</li>
                    <li className="rules_list">Для начисления баллов необходимо написать об участии в активности сотрудник Х отдела маркетинга</li>
                    <li className="rules_list">Участие сотрудника в спортивных и развлекательных мероприятиях (Спартакиада Айтишников, Ночной забег и т.д.), которые оплачиваются компанией, также не считаются внешней активностью.</li>
                    <li className="rules_list">Если в анонсе внутренней активности не указано, <br></br> что за неё начисляются UCoins (участие в Laser Night Run), <br></br> то UCoins за неё не начисляются.</li>
                    <li className="rules_list">Для начисления юкоинов в соцсетях в любом посте/сториз <br></br> должен быть хэштег #usscltd + название <br></br> компании или ссылка на наш аккаунт:</li>
                    VK - <a href="https://vk.com/udv_dev" target="_blank" className="green underline rules_vk">vk.com/udv_dev</a>
                </div>
            </div>
            <div className="ucoins-rules__positions">
                <div className="ucoins-rules__positions__title">
                    <div className="ucoins-rules__positions__title__position">
                        Позиция
                    </div>
                    <div className="ucoins-rules__positions__title__ucoins yellow">
                        Начилсение
                    </div>
                </div>
                {requestNameArr.map(el => <UcoinsRulesCard position={el}/>)}
            </div>
            <div className="ucoins-rules__download">
                <a src="" className="green" download>Скачать</a> информацию о правилах и позициях
            </div>
        </div>
    );
}