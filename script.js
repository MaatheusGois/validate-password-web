function checkPassword() {
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');

    let timeToCrack = "Instantly";
    let recommendation = "Consider using a stronger password.";
    let status = "Weak";
    let color = "#f10437";
    let icon = "❌";

    const length = password.length;
    const hasNumbers = /\d/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Crack time table based on length and type of characters
    if (length >= 18) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "26 trillion years";
            recommendation = "Your password is extremely strong!";
            status = "Super Strong";
            color = "#76f104";
            icon = "💪";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "2 trillion years";
            recommendation = "Your password is extremely strong!";
            status = "Super Strong";
            color = "#76f104";
            icon = "💪";
        } else if (hasLower && hasUpper) {
            timeToCrack = "126 billion years";
            recommendation = "Your password is extremely strong!";
            status = "Super Strong";
            color = "#76f104";
            icon = "💪";
        } else if (hasLower) {
            timeToCrack = "481 thousand years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else {
            timeToCrack = "6 days";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        }
    } else if (length === 17) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "380 billion years";
            recommendation = "Your password is very strong!";
            status = "Super Strong";
            color = "#76f104";
            icon = "💪";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "48 billion years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "2 billion years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasLower) {
            timeToCrack = "18 thousand years";
            recommendation = "Your password is strong!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else {
            timeToCrack = "14 hours";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 16) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "5 billion years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "779 million years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "46 million years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasLower) {
            timeToCrack = "713 years";
            recommendation = "Your password is strong!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else {
            timeToCrack = "1 hour";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 15) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "77 million years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "12 million years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "898 thousand years";
            recommendation = "Your password is strong!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower) {
            timeToCrack = "27 years";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else {
            timeToCrack = "9 minutes";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 14) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "1 million years";
            recommendation = "Your password is very strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "202 thousand years";
            recommendation = "Your password is strong!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "17 thousand years";
            recommendation = "Your password is medium!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower) {
            timeToCrack = "1 year";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else {
            timeToCrack = "52 seconds";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 13) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "15 thousand years";
            recommendation = "Your password is strong!";
            status = "Strong";
            color = "#04f176";
            icon = "✔️";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "3 thousand years";
            recommendation = "Your password is strong!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "332 years";
            recommendation = "Your password is medium!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower) {
            timeToCrack = "2 weeks";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else {
            timeToCrack = "5 seconds";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 12) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "226 years";
            recommendation = "Your password is strong!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "53 years";
            recommendation = "Your password is medium!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "6 years";
            recommendation = "Your password is medium!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower) {
            timeToCrack = "14 hours";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else {
            timeToCrack = "1 second";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 11) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "3 years";
            recommendation = "Your password is medium!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "1 year";
            recommendation = "Your password is medium!";
            status = "Medium";
            color = "#f19204";
            icon = "⚠️";
        } else if (hasLower && hasUpper) {
            timeToCrack = "7 months";
            recommendation = "Your password is weak!";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else if (hasLower) {
            timeToCrack = "2 hours";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else {
            timeToCrack = "1 second";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else if (length === 10) {
        if (hasNumbers && hasLower && hasUpper && hasSymbols) {
            timeToCrack = "4 months";
            recommendation = "Your password is weak!";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else if (hasNumbers && hasLower && hasUpper) {
            timeToCrack = "18 days";
            recommendation = "Your password is weak!";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else if (hasLower && hasUpper) {
            timeToCrack = "8 hours";
            recommendation = "Your password is weak!";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else if (hasLower) {
            timeToCrack = "5 minutes";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        } else {
            timeToCrack = "1 second";
            status = "Weak";
            color = "#f10437";
            icon = "❌";
        }
    } else {
        timeToCrack = "Instantly";
        status = "Weak";
        color = "#f10437";
        icon = "❌";
    }

    // Update the result section
    resultDiv.innerHTML = `
        <p><span style="color:${color}">${status} ${icon}</span></p>
        <p class="crack">Estimated Time to Crack: <b>${timeToCrack}</b></p>
        <p>${recommendation}</p>
    `;

    let opacity = "0.3";
    let rgbaColor = convertHexToRgba(color, opacity);

    resultDiv.style.backgroundColor = rgbaColor;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function convertHexToRgba(hex, opacity) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function seePassword() {
    const passwordInput = document.getElementById('password');
    const seePasswordButton = document.getElementById('seePasswordButton');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        seePasswordButton.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        seePasswordButton.textContent = "See Password";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const languageDropdown = document.getElementById('languageDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedFlag = this.querySelector('img').src;
            const selectedText = this.textContent.trim();

            // Atualiza o botão dropdown com a bandeira e o texto selecionados
            languageDropdown.innerHTML = `<img src="${selectedFlag}" alt="${selectedText}">`;

            // Ação adicional para trocar o idioma (opcional)
            // Aqui você pode adicionar a lógica para mudar o conteúdo da página para o idioma selecionado
            console.log(`Idioma selecionado: ${selectedText}`);
        });
    });
});
