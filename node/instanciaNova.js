//uma factory retorna um novo objecto
//if you want to create new instances, you must use a factory for that

module.exports = () => {
    return {
        valor : 1,
        inc(){
            this.valor++
        }
    }
}