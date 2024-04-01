const mongoose = require("mongoose")
const cardModel = require('../models/TaskModel')
// to ctrate a new card
const newCard = async (req,res) => {
    const {cardNum,HolderName,cardType,exDate,cvv} =req.body

    try{ 
        const card = await cardModel.create({cardNum,HolderName,cardType,exDate,cvv})
        res.status(200).json(card)
    } catch(e){
        res.status(400).json({ error: e.message})
    }
}

//To get all tasks
const getCard = async (req,res) => {
    try{
        const cards = await cardModel.find({})
        res.status(200).json(cards)
    }catch(e){
        res.status(400).json({error: e.message})
    }
}

//To get a Single tast
const getAcard = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Card not found" });
    }
    try {
        const card = await cardModel.findById(id);
        res.status(200).json(card);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}
//To update a card

const updateCard = async (req,res) => {
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Card not found"})
    }

    try{
        const card = await cardModel.findByIdAndUpdate({
            _id:id
        },
        {
            ...req.body,
        }
        )
        res.status(200).json(card)
    } catch(e){
        res.status(400).json({ error: e.message})
    }
}

//To delete a card

const deletecard = async (req,res) =>{
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Card not found"})
    }

    try{
        const dcard = await cardModel.findByIdAndDelete(id)
        res.status(200).json(dcard)
    }catch(e){
        res.status(400).json({error: e.message})
    }
}

module.exports = {newCard, getCard, getAcard, updateCard, deletecard}