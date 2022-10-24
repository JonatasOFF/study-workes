

// Diz o que fazer quando outro thread enviar uma mensagem
addEventListener('message', function (e) {
    var dados = e.data;
    const result = loopInfinite(1, 'module 1', 10) + loopInfinite(1, 'module 2', 10) + loopInfinite(1, 'module 3', 10)
    this.postMessage(result)
    // Outras funções, se aplicável
});

const processWrong = (value) => {
    return value * value / value / value + value * value - value
}

const loopInfinite = (value, module, wrappers) => {


    if (value > 5000) {
        console.log(value, '<= cabo ----- ', module);
        return `finalize ${module}`;
    }

    if (wrappers) {
        let resultValue = value
        for (let i = 0; i < wrappers; i++) {
            resultValue = processWrong(resultValue)
        }

    }

    const loading = Math.floor((value / 5000) * 100)
    console.log(loading, '% < = Carregando lv.', module)


    return loopInfinite(value + 1, module, wrappers)
}

