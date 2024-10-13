module.exports.index=function(req,res){
    res.render('index', { title: 'Divya Anila' });
};

module.exports.signin=function(req,res){
    res.render('signin', { title: 'Divya Anila' });
};
module.exports.review=function(req,res){
    res.render('review', { title: 'Divya Anila' });
};