async function getUsers() {
    let url = '127.0.0.1:5000';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.name} ${user.surname}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            <p> ${user.salary} </p>
                            <p> ${user.phone} </p>
                            <p> ${user.cname} </p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();