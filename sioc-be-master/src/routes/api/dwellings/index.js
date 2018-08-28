const model = global.app.model;
const {random, forEach} = require('lodash');


module.exports = router => {
    router.get('/', (req, res, next) =>
        model.Dwelling.find({}).sort('-createdAt').lean().exec().then(
            dwellings => res.send({dwellings})
        ).catch(next)
    );

    router.post('/', (req, res, next) => {
        const dwelling = new model.Dwelling(req.body.dwelling);
        dwelling.siocId = random(0, 999999);
        dwelling.save().then(
            () => res.send({success: true})
        ).catch(next);
    });

    router.get('/:id', (req, res, next) => {
        model.Dwelling.findById(req.params.id).exec().then(
            dwelling => res.send({dwelling})
        ).catch(next);
    });

    router.put('/:id', (req, res, next) =>
        model.Dwelling.findByIdAndUpdate(req.params.id, req.body.dwelling).exec().then(
            () => res.send({success: true})
        ).catch(next)
    );

    router.get('/search/:id', (req, res, next) => {
        model.Dwelling.findOne({siocId: req.params.id}).exec().then(
            dwelling => res.send(dwelling._id)
        ).catch(next);
    });

    router.post('/search', async (req, res, next) => {
        const {searchParams} = req.body;
        const query = {};
        if (searchParams.publicationType !== undefined) {
            query['publicationType'] = searchParams.publicationType;
        }
        if (searchParams.subtype !== undefined) {
            query['subtype'] = searchParams.subtype;
        }
        if (searchParams.address) {
            const {address} = searchParams;
            forEach(address, (value, key) => {
                query[`address.${key}`] = value;
            });
        }
        if (searchParams.spaces) {
            const {spaces} = searchParams;
            forEach(spaces, (value, key) => {
                query[`spaces.${key}`] = value;
            });
        }
        if (searchParams.features) {
            const {features} = searchParams;
            forEach(features, (value, key) => {
                query[`features.${key}`] = value;
            });
        }
        if (searchParams.services) {
            const {services} = searchParams;
            forEach(services, (value, key) => {
                query[`services.${key}`] = value;
            });
        }
        if (searchParams.legal) {
            const {legal} = searchParams;
            forEach(legal, (value, key) => {
                query[`legal.${key}`] = value;
            });
        }
        if (searchParams.price) {
            if (searchParams.price.min !== undefined) {
                query['price'] = {$gt: req.body.searchParams.price.min};
            }
            if (searchParams.price.max !== undefined) {
                query['price'] = {$lt: req.body.searchParams.price.max};
            }
        }
        try {
            const dwellings = await model.Dwelling.find({
                '$and': [
                    query
                ]
            }).lean().exec();
            res.send({dwellings});
        } catch (err) {
            next(err);
        }
    });


    return router;
};

