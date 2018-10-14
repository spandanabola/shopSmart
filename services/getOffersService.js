const  mongoose  =  require('mongoose');
module.exports  =  {
    getOffersByDate:  (req,  res)  =>  {
        var  offersByDate  =  require('../models/offer.js');
        var  OffersByDate  =  mongoose.model('offers',  offersByDate);
        var  info = {};
        OffersByDate.find({offer_start:{'$lte': new Date().toISOString()}, offer_end:{'$gte': new Date().toISOString()}}, 
        (err,  doc)  =>  {
            if  (err) {
                info  =  {
                    status:  false,
                    msg:  err
                }

            }  else  {
                info  =  {
                    status:  true,
                    model: doc
                }
            };
            res.send(info);
            res.end();
        });
    }
}