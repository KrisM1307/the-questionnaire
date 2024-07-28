const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    const name = form.querySelector("input[name='name']").value;
    const secondName = form.querySelector("input[name='secondName']").value;
    const phone = form.querySelector("input[name='phone']").value;
    const email = form.querySelector("input[name='email']").value;
    const agree = form.querySelector("input[name='agree']").checked;


    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: KrisM1307'
            },
            body: JSON.stringify({
                name: name,
                secondName: secondName,
                phone: phone,
                email: email,
                agree: agree
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            showNotification("Данные успешно отправлены!", "success");
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            showNotification("Произошла ошибка :(", "error");
        });
});

function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.classList.add('notification');
    notification.textContent = message;
    if (type === "success") {
        notification.classList.add('success');
    } else {
        notification.classList.add('error');
    }

    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}