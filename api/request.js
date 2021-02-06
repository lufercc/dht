const request = require('axios');

class Request {

    static async request(reqType, endpoint, body) {
        let result = await request({
            method: reqType,
            url: endpoint,
            data: body
        })
        return this.mapResponse(result)
    }

    static mapResponse(response){
        return {
            body: response.data,
            statusCode : response.status
        }
    }
}

module.exports = Request
