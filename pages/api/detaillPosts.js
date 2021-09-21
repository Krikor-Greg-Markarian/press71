export default function handler(req, res) {
    const object = {
        rasalina:{
            name:"Rasalina De Willamson",
            articles:"64 Articles Written 2comments",
        },
        text:{
            lorem: "Rasalina De has worked a italy report since its launch in 2011. In the years since, he has led by example the company's tech news team and published over 5,000 articles - a mix of breaking news,reviews,helpful how-tos, industry analysis, and more.n Romero has worked a Italy Report since its launch in 2011. In the years since.",
        },

        allPost:{
            box:[
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button:"DOCTOR"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button1:"CHECK POST"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button2:"DOCTOR"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button3:"WORK"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button4:"DOCTOR"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button5:"CHECK POST"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button6:"DOCTOR"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button7:"WORK"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button8:"DOCTOR"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button9:"CHECK POST"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button10:"DOCTOR"

                },
                {
                    title:"14 Coronavirus myth busted by WHO fo better covid-19 awareness",
                    subtitle:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the...",
                    button11:"WORK"

                },
            ]
        }
    };
    res.status(200).json(object);
  }