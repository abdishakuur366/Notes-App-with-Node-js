/**
 * GET /
 * Homepage 
*/
// exports.homepage = async (req, res) => {
//   const locals = {
//     title: "NodeJs Notes",
//     description: "Free NodeJS Notes App.",
//   }
//   res.render('index', {
//     locals,
//     layout: '../views/layouts/front-page'
//   });
// }

// exports.homepage = async(req, res)=>{
//   const locals = {
//     title:"NodeJS Notes App",
//     description:"Free NodeJS Notes App"
//   }
//   res.render('index',{
//     locals,
//     layouts:'../views/layouts/front-page'
//   });
// }

// exports.homepage = async(req, res)=>{
//   const locals ={
//     title: "Free NodeJS Notes App",
//     description: " Free NodeJS Notes App"
//   }
//   res.render('index',{
//     locals,
//     layouts:'../views/layouts/front-page'
//   })
// }
exports.homepage = async(req, res)=>{
  const locals= {
      title:'Free Notes',
      discription:'FreeNode JS notes'
  }
  res.render('index',{
      locals,
      layouts:'../views/layouts/front-page'
  })
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
    const locals = {
      title: "About - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('about', locals);
  }

  /**
  exports.homepage = async (req, res)=>{
    const locals = {
      title : "NodeJS Notes",
      description:"Free NodeJS Notes App"
    }
    res.render('index, {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
*/

/**
 

 */