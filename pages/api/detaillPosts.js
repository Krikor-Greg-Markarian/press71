export default function handler(req, res) {
    const object = {
        rasalina:{
            name:"Rasalina De Willamson",
            articles:"64 Articles Written 2comments",
        },
    };
    res.status(200).json(object);
  }