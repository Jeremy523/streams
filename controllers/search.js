// Search controller

var Search = {
    index: function(req,res) {
        res.render('search/index', { title: 'Search Streams' });
    }
};

module.exports = Search;