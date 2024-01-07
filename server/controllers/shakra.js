exports.homepage= async(req, res)=>{
    const locals={
        title:'Free Node',
        description:'Free Node App'
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    });
}