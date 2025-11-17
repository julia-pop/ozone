const getData = () => {
    return fetch('https://test-5525f-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData