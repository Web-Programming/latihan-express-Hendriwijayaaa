//Controller index
const index = (req, res) => {
 	res.render('index', { title: 'Express MVC' }); 
}; 
//Controller kontak 
const kontak =(req,res) => {
    res.render('kontak',{title: 'Ini Halaman kontak'});
};

const profil =(req,res) => {
    res.render('profil',{title: 'Ini Halaman Profil yaaaa'});
};

module.exports = { index,kontak,profil }; 
