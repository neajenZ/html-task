function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase())
}

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()
    const formMessage = document.getElementById("formMessage")

    if (!name || !email || !message) {
        formMessage.textContent = "Заполните все поля!"
        formMessage.style.color = "red"
        formMessage.classList.remove("hidden")
        return
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Неккоректный email!"
        formMessage.style.color = "red"
        formMessage.classList.remove("hidden")
        return
    }

    // Успешное сообщение
    formMessage.textContent = "Форма успешно отправлена!"
    formMessage.style.color = "green"
    formMessage.classList.remove("hidden")

    // Сброс формы
    this.reset()
});

// Функция для проверки email

