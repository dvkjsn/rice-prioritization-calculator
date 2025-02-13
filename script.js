function calculateRICE() {
    const reach = parseFloat(document.getElementById('reach').value);
    const impact = parseFloat(document.getElementById('impact').value);
    const confidence = parseFloat(document.getElementById('confidence').value);
    const effort = parseFloat(document.getElementById('effort').value);

    if (effort <= 0) {
        alert("Effort cannot be zero or negative.");
        return;
    }

    const riceScore = (reach * impact * (confidence / 100)) / effort;
    document.getElementById('result').innerText = `RICE Score: ${riceScore.toFixed(2)}`;
}