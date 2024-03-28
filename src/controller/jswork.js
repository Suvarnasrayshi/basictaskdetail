
const getdynamic_table = async (req, res) =>{
    {
       
        res.render('dynamic-table');
    }
};


const getkukucube = async (req, res) =>{
    {
       
        res.render('kukucube');
    }
};

const getsortingalgo = async (req, res) =>{
    {
       
        res.render('sortingalgo');
    }
};

const gettictactoe = async (req, res) =>{
    {
       
        res.render('tictactoe');
    }
};


const getjsevent = async (req, res) =>{
    {
       
        res.render('jsevent');
    }
};

const getcitystate = async (req, res) =>{
    {
       
        res.render('citystate');
    }
};



module.exports ={gettictactoe,getsortingalgo,getkukucube,getdynamic_table,getjsevent,getcitystate};