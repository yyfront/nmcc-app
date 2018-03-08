function getUserName () {
    return document.querySelector('input[name="username"]').value
}

function cleanUserName () {
    document.querySelector('input[name="username"]').value = ''
}

document.getElementById('search').addEventListener('click', function () {
    const username = getUserName()

    axios.get('api/user', {
        params: { username }
    }).then(function (resp) {
        alert(JSON.stringify(resp.data))
        cleanUserName()
    })

})

document.getElementById('register').addEventListener('click', function () {
    const username = getUserName()

    axios.post('api/user', { username }).then(function (resp) {
        alert(JSON.stringify(resp.data))
        cleanUserName()
    })
})

document.getElementById('login').addEventListener('click', function () {
    const username = getUserName()

    axios.post('api/user/login', { username }).then(function (resp) {
        alert(JSON.stringify(resp.data))
        cleanUserName()
    })
})

document.getElementById('logout').addEventListener('click', function () {
    axios.get('api/user/logout').then(function (resp) {
        alert(JSON.stringify(resp.data))
        cleanUserName()
    })
})

document.getElementById('checkLogin').addEventListener('click', function () {
    axios.get('api/user/check').then(function (resp) {
        alert(JSON.stringify(resp.data))
        cleanUserName()
    })
})

