export const REQUEST_ARR = {
    "Закреплённые сториз о работе в во внешних соц. сетях" : 0.5,
    "Заметки/репосты о работе во внешних соц. сетях" : 1,
    "Информационные посты о работе/мероприятиях  во внешних соц. сетях" : 3,
    "Отзыв в Дайджест" : 3,
    "Информационные посты/статья во внутренних ресурсах" : 5,
    "Отзывы о работе в Компании на сторонних ресурсах" : 5,
    "Экспертный комментарий на запрос прессы" : 5,
    "Помощь и участие в организации внутренних/внешних активностей" : 5,
    "Профильный материал на внешних ресурсах" : 10,
    "Идея и организация активности, одобренной руководством" : 10,
    "Участие в мероприятии от лица Компании" : 10,
}

export const requestNameArr = [];

for (let key in REQUEST_ARR) {
    requestNameArr.push(key);
}