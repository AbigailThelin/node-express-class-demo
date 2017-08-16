let data = require('./data.js')


module.exports = {
    get: (request, response)=> {
    response.status(200).send({books: data})
},
    post:(request, response)=>{
    data.push(request.body)
    response.status(200).send(data)
},
    put: (request, response)=>{
    data[req.params.index].name = request.params.name;
    res.status(200).send(data);
},
    delete:(request, response) =>{
    data.splice(request.params.index, 1)
    response.status(200).send(data);
}
}