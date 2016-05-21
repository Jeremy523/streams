// About controller

var About = {
    index: function(req, res) {
        res.render('about/index', { title: 'About Streams' });
    }
};

module.exports = About;