const express = require('express');
const router = express.Router();
const { DoIt } = require('../models');

router.get('/', async (req, res,) => {
    res.status(200).json({message: "check this out"})
});

// router.get('/', async (req,res, next) => {
//     try{
//         const myDo = await DoIt.findById(req.params.id)
//         res.json(myDo)
//     }catch(err) {
//         console.log(err);
//         next();
//     }
// })

router.post('/', async (req, res) => {
    console.log(req.body)
    res.status(200).json({message: "create route"})
});

// router.post('/', async (req, res, next) => {
//     try {
//         const newDo = req.body
//         // newBook.user = req.session.currentUser.id;
//         await DoIt.create(req.body);
//         console.log(newDo);
//         res.redirect('/')
//     } catch(err) {
//         console.log(err);
//         next();
//     }
// })

router.get('/id', async (req, res) => {
    res.status(200).json({message: "ID route"})
})
// router.put('/:id', async (req, res, next) => {
//     try {
//         // console.log("This got hit")
//         // Go look for a book in the database whose _id matches the URL params that I'm being passed and update to the req.body coming in from a request
//         const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body);
//         res.json(updatedBook);
//     } catch(err) {
//         console.log(err);
//         next();
//     }
// })
router.delete('/:id', async (req, res) => {
    res.status(200).json({message: "delete" + req.params.id})
});
// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedItem = await DoIt.findByIdAndDelete(req.params.id);
//         res.redirect('/books');
//     } catch(err) {
//         console.log(err);
//         next();
//     }
// })

router.put('/:id', (req, res) => {
    console.log(req.body)
    res.status(200).json({message: "edit route"})
})
module.exports = router;