var express = require('express');
var router = express.Router();
var  {User}  = require('../database/models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var express = require('express');
var router = express.Router();
var  {User}  = require('../database/models')


router.post('/', async(req, res) => {
    const user = User.build({
    
        name: req.body.name,
        email:req.body.email,
        clave: req.body.clave,
        tipo: req.body.tipo
    });


    try {
        const rta =await user.save();
        res.json({ rta });
    }
    catch (error) {
        console.log(error);
        res.json({ error });
    }
}

)

router.get('/', async function (req, res, next) {
   
    try {
    const list =  await User.findAll() ;
    res.json({ list });
    }
    catch (error) {
        console.log(error);
        res.json({ error });
    }
});

router.get('/:email', async function (req, res, next) {
   
    try {
    const list =  await User.findAll(
        {
            where:{id:req.params.id}
               }
    ) ;
    res.json({ list });
    }
    catch (error) {
        console.log(error);
        res.json({ error });
    }
});






router.delete('/:id', async (req, res) => {
    try{
    const usera = await User.destroy({
       where:{id:req.params.id}
          });
          res.json({ usera });
        }
            catch (error) {
                res.json({ error });
            }
        })
        

router.put('/:id', async(req, res) => {
    try{
  const rta = await User.update({
name:'nombre updated'
  },{where:{id:req.params.id}
  });
  res.json({ rta });
    }catch (error) {
        res.json({ error });
    }
})




module.exports = router;

