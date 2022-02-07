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