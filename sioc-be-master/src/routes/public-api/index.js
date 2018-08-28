
module.exports = router => {
    router.get('/', (req, res) => res.send({nico: 'aaa'}));

    return router;
};
