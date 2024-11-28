exports.create = async(req,res)=>{
    try{
        res.send('hello category')
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

exports.list = async(req,res)=>{
    try{
        res.send('hello category list ')
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

exports.remove = async(req,res)=>{
    try{
        const { id } = req.params
        console.log(id)
        res.send('hello category remove ')
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

