import Listing from "../models/listing.model.js";

export const createListing =async(req, res, next) => {
try {
    console.log("first")
    const listing = await Listing.create(req.body);
    console.log(listing,"controller");
    return res.status(201).json(listing);   
} catch (error) {
    console.log("listing");
    next(error);  
}
}