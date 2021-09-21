export default function handler(req, res) {
  const object = {
    paragraph:{
      title:"for those of us who wants to say thank you to our moms, it's not always easy to put those big feelings in words. which is where dribble comes in.",
      subtitle:"These eight shots crystallize the hard work moms put into keeping their kids allive, happy, and healthy. They might give you the inpiration you need for filling out that card--or stand alone for your mom's interpretation.",
      subsubtitle:"Moms are the oens who bandage our boo-boos when we're little and continue to take care of us as we get older-often sacrificing their own needs so they can help with ours. Cruising on a bike",
    },
    hereCome:{
        asupermarket:"A supermarket woker was apat at by a customer attempting to stockpile pot Noodles while another was told (i hope you get the virus and die), as panic-buying blighed the nations...",
        aneyewitness:"An eyewitness described the scene at a packed branch of Asda in the Wirral,Merseyside, on saturday, as a man in his 30s attemped to buy more than the three Pot Noodles allowed by the store.",
        

    },
    wrapped:{
      article: "The incident, which was rasied in palimant by Labour MP Bill Esterson, was just one of the horrendous cases of abuse revealed by supermarket wokers in recent days as some customers grow angry over restrictions and empty shelves.",
      subarticle: "The doctor was exposed to the virus when the 38-year-old woman visited the clinic on March 12, the minister said. Five days later, she testes positive. That day, the doctor was also admitted in hospital. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim minima ducimus blanditiis consectetur id maiores nisi vel fugit illum, exercitationem ullam laudantium. Reprehenderit quis repellat cum porro magni voluptate.",
      subsubarticle:"Duis aute irune dolor in reprehenderit in voluptate velit esse cillium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
    },
    unordered:{
        unorderedtitle:          "Moms are like...buttons? Moms are like glue. Moms are like pizza vrusts. Moms are the ones who make sure things happen-from birth to school lunch.",
        unorderedsubtittle:"They're the ones we rely on for playdates and emotional support,homework help and babysitting. Moms are the ultimate dependable support. Like, hopefully, the button on your jeans.",
        unorderedsusubtitle:          "My hero when i was a kid was my mom. Same for everyone i knew. Moms are untouchable. They're elegant,smart,beautiful,kind...everything we want to be. At 29 years old, my favorite compliment i sbeing told that i look like my mom. Seeing myself in her image, like this daughter up top, make me so proud of how far I've come, and so thankful for where i come from.",
    },

    relatedpost:{
        imagetext:[
          {
            date:"24th March 2019",
            datetext:"Watch: 10 Days Lter: What italians Wish They Had Known",
            dateinfo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, expedita.",
          },
         
        ]
    },

    writtenby:{
        bigtitle:"written by",
        bigsub:"Rosalina D.William",
        bigtext:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt in dolorem magni quae, rem totam impedit quidem! Ipsam, iure saepe?",
    },

    comment:{
        littleBox:[
          {
            name:"Rosalina Kelian",
            seconddate:"24th March 2019",
            articlelorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.",

          },
          {
            name:"Rosalina Kelian",
            seconddate:"24th March 2019",
            articlelorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.",

          },
          {
            name:"Rosalina Kelian",
            seconddate:"24th March 2019",
            articlelorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.",

          }
        ]
    }
  };
  res.status(200).json(object);
}
