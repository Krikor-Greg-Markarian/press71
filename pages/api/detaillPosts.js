export default function handler(req, res) {
    const object = {
        rasalina:{
            name:"Rasalina De Willamson",
            articles:"64 Articles Written 2comments",
        },
        text:{
            lorem: "Rasalina De has worked a italy report since its launch in 2011. In the years since, he has led by example the company's tech news team and published over 5,000 articles - a mix of breaking news,reviews,helpful how-tos, industry analysis, and more.n Romero has worked a Italy Report since its launch in 2011. In the years since.",
        },
    };
    res.status(200).json(object);
  }