function convertToHex() {
    const decimalInput = document.getElementById('decimalInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!decimalInput) {
        resultDiv.innerHTML = 'Пожалуйста, введите десятичное число';
        return;
    }

    try {
        const decimalNumber = parseInt(decimalInput, 10);
        if (isNaN(decimalNumber)) {
            throw new Error('Неверный формат числа');
        }
        
        const hexString = decimalNumber.toString(16).toUpperCase();
        document.getElementById('hexInput').value = hexString;
        resultDiv.innerHTML = `DEC: ${decimalNumber} = HEX: 0x${hexString}`;
    } catch (error) {
        resultDiv.innerHTML = `Ошибка: ${error.message}`;
    }
}

function convertToDec() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!hexInput) {
        resultDiv.innerHTML = 'Пожалуйста, введите шестнадцатеричное число';
        return;
    }

    try {
        // Удаляем префикс 0x если он есть
        const cleanHex = hexInput.replace(/^0x/, '');
        
        if (!/^[0-9A-Fa-f]+$/.test(cleanHex)) {
            throw new Error('Неверный HEX формат');
        }
        
        const decimalNumber = parseInt(cleanHex, 16);
        document.getElementById('decimalInput').value = decimalNumber;
        resultDiv.innerHTML = `HEX: 0x${cleanHex.toUpperCase()} = DEC: ${decimalNumber}`;
    } catch (error) {
        resultDiv.innerHTML = `Ошибка: ${error.message}`;
    }
}