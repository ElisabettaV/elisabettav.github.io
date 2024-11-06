
document.addEventListener("DOMContentLoaded", function () {
    function getAllParameters() {
        return new URLSearchParams(window.location.search);
    }

    const urlParams = getAllParameters();

    const parametriMappa = {
        serial_number: "serial_number",
        fineness: "fineness",
        net_weight: "net_weight"
    };

    for (const [param, id] of Object.entries(parametriMappa)) {
        const value = urlParams.get(param);
        const paragrafo = document.getElementById(id);

        if (value) {
            paragrafo.textContent = `${value}`;
        } else {
            paragrafo.textContent = `Parametro: ${param} not found.`;
        }
    }

});
