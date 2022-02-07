export const getPostsApi = (axios) => {
    let myPromise = new Promise(function (resolve, reject) {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                resolve({ statusCode: response.status, data: response.data })
            })
            .catch(error => {
                if (error.response) {
                    resolve({ statusCode: error.response.status, data: error.response.data })
                }
                else {
                    resolve({ statusCode: 503, data: '' })
                }
            })
    })

    return myPromise;
}

export const editPostsApi = (id, axios) => {
    let myPromise = new Promise(function (resolve, reject) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                resolve({ statusCode: response.status, data: response.data })
            })
            .catch(error => {
                if (error.response) {
                    resolve({ statusCode: error.response.status, data: error.response.data })
                }
                else {
                    resolve({ statusCode: 503, data: '' })
                }
            })
    })

    return myPromise;
}
export const SubmitEditPostsApi = (statement, axios) => {


    const config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    const body = JSON.stringify({
        id: statement.id,
        title: statement.title,
        body: statement.body,
        userId: statement.userId,
    })

    let myPromise = new Promise(function (resolve, reject) {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${statement.id}`, body, config)
            .then(response => {
                resolve({ statusCode: response.status, data: response.data })
            })
            .catch(error => {
                if (error.response) {
                    resolve({ statusCode: error.response.status, data: error.response.data })
                }
                else {
                    resolve({ statusCode: 503, data: '' })
                }
            })
    })

    return myPromise;
}