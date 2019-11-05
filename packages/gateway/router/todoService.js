var express = require('express');
var rp = require('request-promise');
var router = express.Router()

const URL = 'http://localhost:4012'


//Workspace
router.get('/workspace', (req, res) => {
    let options = {
        uri: URL+req.path
    };
    
    rp.get(options)
    .then(function (body) {
        // Request succeeded...
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        // Request failed...
        res.send(JSON.parse(err.error))
    });
})

router.get('/workspace/:id', (req, res) => {
    let options = {
        uri: URL+req.path
    };
    
    rp.get(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        // Request failed...
        res.send(JSON.parse(err.error))
    });
})

router.post('/workspace', (req, res) => {
    // console.log(req.body)
    let options = {
        uri: URL+req.path,
        body:req.body,
        json: true 
    };
    
    rp.post(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        console.log(err)
        res.send(JSON.parse(err.error))
    });
})

router.put('/workspace/:id', (req, res) => {
    let options = {
        uri: URL+req.path,
        body:req.body,
        json:true
    };
    
    rp.put(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        res.send(JSON.parse(err.error))
    });
})

router.delete('/workspace/:id', (req, res) => {
    let options = {
        uri: URL+req.path,
    };
    
    rp.delete(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        res.send(JSON.parse(err.error))
    });
})


// Todo
router.get('/todo', (req, res) => {
    let options = {
        uri: URL+req.path
    };
    
    rp.get(options)
    .then(function (body) {
        // Request succeeded...
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        // Request failed...
        res.send(JSON.parse(err.error))
    });
})


router.get('/todo/:id', (req, res) => {
    let options = {
        uri: URL+req.path
    };
    
    rp.get(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        // Request failed...
        res.send(JSON.parse(err.error))
    });
})

router.post('/todo', (req, res) => {
    // console.log(req.body)
    let options = {
        uri: URL+req.path,
        body:req.body,
        json: true 
    };
    
    rp.post(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        console.log(err)
        res.send(JSON.parse(err.error))
    });
})

router.put('/todo/:id', (req, res) => {
    let options = {
        uri: URL+req.path,
        body:req.body,
        json:true
    };
    
    rp.put(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        res.send(JSON.parse(err.error))
    });
})

router.delete('/todo/:id', (req, res) => {
    let options = {
        uri: URL+req.path,
    };
    
    rp.delete(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        res.send(JSON.parse(err.error))
    });
})



// Todo Item
// router.get('/todo_item', (req, res) => {
//     let options = {
//         uri: URL+req.path
//     };
    
//     rp.get(options)
//     .then(function (body) {
//         // Request succeeded...
//         let result=typeof body==='object'?body :JSON.parse(body)
//         res.send(result)
//     })
//     .catch(function (err) {
//         // Request failed...
//         res.send(JSON.parse(err.error))
//     });
// })

router.get('/todo_item/:id', (req, res) => {
    let options = {
        uri: URL+req.path
    };
    
    rp.get(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        // Request failed...
        res.send(JSON.parse(err.error))
    });
})

router.post('/todo_item', (req, res) => {
    // console.log(req.body)
    let options = {
        uri: URL+req.path,
        body:req.body,
        json: true 
    };
    
    rp.post(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        console.log(err)
        res.send(JSON.parse(err.error))
    });
})

router.put('/todo_item/:id', (req, res) => {
    let options = {
        uri: URL+req.path,
        body:req.body,
        json:true
    };
    
    rp.put(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        res.send(JSON.parse(err.error))
    });
})

router.delete('/todo_item/:id', (req, res) => {
    let options = {
        uri: URL+req.path,
    };
    
    rp.delete(options)
    .then(function (body) {
        let result=typeof body==='object'?body :JSON.parse(body)
        res.send(result)
    })
    .catch(function (err) {
        res.send(JSON.parse(err.error))
    });
})

module.exports = router