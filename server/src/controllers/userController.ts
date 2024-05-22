import { Request, Response } from "express";
import { UserModel } from "../models/User.model";

export async function getUserDetails(req:Request, res:Response) {
  const { auth0Id } = req.body;
  try {
    const users = await UserModel.findOne({auth0Id});
    if(!users){
      return res.status(404).json({message:"User not found"})
    }
    return res.status(200).json(users);
  } catch (error : any) {
    return res.status(500).json({error:error.message})
  }
}
export async function createUser(req:Request, res:Response) {
  try {
    const { auth0Id } = req.body;
    const userExistOrNot = await UserModel.findOne({auth0Id})
    if(userExistOrNot){
      return res.status(400).json({message:"User already exist"})
    }

    const user = new UserModel(req.body);
    await user.save();

    return res.status(201).json({message:"User created successfully",user:user.toObject()})
      
  } catch (error : any) {
    return res.status(500).json({error:error.message})
  }
}