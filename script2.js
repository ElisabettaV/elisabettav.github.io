document.addEventListener("DOMContentLoaded", function () {
    function getAllParameters() {
        return new URLSearchParams(window.location.search);
    }

    const urlParams = getAllParameters();

    const parametriMappa = {
        serial_number: "serial_number",
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

function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const cardElement = document.getElementById("card-content");

    html2canvas(cardElement, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("p", "mm", "a4");

                const pdfWidth = pdf.internal.pageSize.getWidth()/2;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Certificato.pdf');
    }).catch(error => {
        console.error("Errore durante la generazione del PDF:", error);
    });
}
