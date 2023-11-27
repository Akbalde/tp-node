const express = require('express')
const path = require('path');
const axios = require('axios');
const multer =require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
// configuration d'express
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
// configuration de multer pour mle stockage des fichier
// extentiation
const stockage =multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,` ${file.filename}-${Date.now()}${path.extname(file.originalname)}`)
    },
}); 
const upload = multer({stockage})               

app.get('/',(req,res)=>{
   
    res.sendFile(path.join(__dirname,"views/form.html"))

})
// traitement du formulaire coté serveur
app.post('/submit',upload.array('image',20),(req,res)=>{
    const{nom, prenom, genre, pays, auteurs, } =req.body; 
    const cv = req.files.find(file =>file.filename ==='')
    res.send("Envoyes")
    
})
// app.post('/submit',upload.fields([{name:'image',maxCount:10},{name:'cv',maxCount:1}]),(req, res)=>{
//     const images = req.files['image']
//     const cv = req.files['cv']
    // if(images){
    //     images.forEach(image => {
    //         console.log(image)
    //         const oldPath = image.buffer;
    //         const newPath = path.join(__dirname,'uploads/',image.originalname);
    //         fs.writeFileSync(oldPath,newPath);            
    //     });
    //     if(cv){
    //             const oldPath = path.resolve( cv[0].path);
    //             const newPath = path.join(__dirname,'uploads/',cv[0].fielname);
    //             fs.renameSync(oldPath,newPath);            
    //         };
    //  }
    
// })

app.listen(port,()=>{
    console.log(`le serverur a démarré au port ${port}`);
})
