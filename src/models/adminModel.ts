import mongoose, {Document, Schema} from "mongoose";

export interface IAdminInterface {
    number: String;
    password: String;
}