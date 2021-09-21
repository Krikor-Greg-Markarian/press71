export default function handler(req, res) {
  const object = {
    stories: [
      {
        recentnews: "RECENT NEWS",
        ibuprofen:
          "Ibuprofen should not be used for managing symptoms.say doctors and scientists",
        exclusive:
          "Exlusive: Amazon Confirms First Known Coronavirus Case in an Ameican Warehouse",
      },
      {
        recentnews: "RECENT NEWS",
        exclusive:
          "Exlusive: Amazon Confirms First Known Coronavirus Case in an Ameican Warehouse",
      },
      {
        recentnews: "RECENT NEWS",

        trump:
          "Trump sought to buy vaccine developer exclusively for US, say German officials",
      },
      {
        recentnews: "RECENT NEWS",
        coronavirus: "Coronavirus live updates:italy death toll nears 3,000",
      },
    ],
    coverStory: {
      coronabutton: "CORONAVIRUS",
      why: "Why Covid-19 is worse than the flu, in one chart shit",
      asupermarket:
        "A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the virus and die), as panic-buying blighed the nations...",
    },

    advice: {
      leftsection: [
        {
          Stories: "STORIES",
          adviceCorona:
            "Coronavirus live updates: Total US  cases near 9,000 as daeth toll approaches 150",
        },
        {
          Stories: "ADVICE",
          adviceCorona:
            "The Healthiest Way to Sweat Out a Pandemic",
        },
        {
          Stories: "Hospital",
          adviceCorona:
            "What to Do About a light Case of COVID-19",
        },
      ],
      rightsection: [
        {
          Stories: "VIRUSUPDATE",
          adviceCorona:
            "Colorodo Travel Guide:What to see,Do,Costs,Roads",
        },
        {
          Stories: "PANDAMIC",
          adviceCorona:
            "Van trip:3 Days in San Sebastian,Spain",
        },
        {
          Stories: "MEDICINE",
          adviceCorona:
            "Independent Trekking and Camping in Nepal",
        },
        {
          Stories: "LOCAL NEWS",
          adviceCorona:
            "Peru Travel Guide: What to See,Do,Costs,Roads",
        },
      ],
    },

    latestArticles:{
        box :[
         {
           forteen:"14 Coronavirus myths busted by WHO fo better Covid-19 Awareness",
           asupermarket2:
        "A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told i hope you get the...",
         },
         {
          forteen:"14 Coronavirus myths busted by WHO fo better Covid-19 Awareness",
          asupermarket2:
       "A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told i hope you get the...",
        },
        {
          forteen:"14 Coronavirus myths busted by WHO fo better Covid-19 Awareness",
          asupermarket2:
       "A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told i hope you get the...",
        },
        {
          forteen:"14 Coronavirus myths busted by WHO fo better Covid-19 Awareness",
          asupermarket2:
       "A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told i hope you get the...",
        },
        ],
      
        // sectionAlone:{
        //   left:"Advice",
        //   right:"View All"
        // }
      
    },

    textSection:{
        title:"",
        subtitle:"",
        smallText:"",
    }
  };
  res.status(200).json(object);
}
