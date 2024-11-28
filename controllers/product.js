exports.create = async(req,res)=>{
    try{
        //code
        res.send('hello product create')
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Server error'})
    }
}
exports.list = async(req,res)=>{
    try{
        //code
        console.log(req.params.id)
        res.send('hello product list')
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Server error'})
    }
}