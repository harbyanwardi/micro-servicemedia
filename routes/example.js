const express = require('express');
const router = express.Router();


const { Example } = require('../models');

router.get('/', async (req, res) => {
    const example = await Example.findAll({
        attributes: ['id', 'employee_name']
    });


    return res.json({
        status: 'success',
        data: example
    })
})

router.post('/', async (req, res) => {
    const employee_name = req.body.employee_name;

    const example = await Example.create({ employeeName: employee_name });
    return res.json({
        status: 'Success',
        data: example
    })
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const example = await Example.findByPk(id);

    if (!example) {
        return res.status(404).json({
            status: 'error',
            message: 'example not found'
        })
    }
    await example.destroy();
    return res.json({
        status: 'success',
        message: 'Example deleted'
    })
})

router.put('/:id', async (req, res) => {
    const id_example = req.params.id;
    const employee_name = req.body.employee_name;
   

    const example = await Example.update(
        { employeeName: employee_name }, {
        where: { id: id_example }
      })
        .then(num => {
          if (num == 1) {
            return res.json({
                status: 'success',
                message: 'Example Updated'
            })
          } else {
            return res.json({
                status: 'error',
                message: 'Example Updated failed'
            })
          }
        });
});

module.exports = router;
