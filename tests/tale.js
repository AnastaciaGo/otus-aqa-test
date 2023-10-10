export const kolobok = (person) => {
    switch(person) {
        case 'дедушка': 
            return 'Я от дедушки ушел'
            break
        case 'заяц': 
            return 'Я от заяца ушел'
            break
        case 'лиса':
            return 'Меня съели'
            break
        default:
            return 'Неверный персонаж'
    }
}

export const newYear = (person) => {
    return `${person}! `.repeat(3)
}

