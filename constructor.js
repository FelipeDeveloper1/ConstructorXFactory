function carro(velatual = 0, vmax = 150) {
    this.acelerar = (delta = 20) => {
        if (velatual + delta < vmax) {
            velatual += delta
        } else {
            velatual = vmax
        }
    }
    this.show = () => {
        return `${velatual}`
    }
}
const ferrari = new carro(0, 200)
ferrari.acelerar(70)
ferrari.acelerar(50)
console.log(ferrari.show())