function showUserName (resp) {
    return document.querySelector('input[name="username"]').value = resp.username || '';
}

document.getElementById('getUser').addEventListener('click', function () {
    axios.get('api/user').then(function (resp) {
        showUserName(resp.data)
    })
})