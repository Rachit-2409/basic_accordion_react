import Accordion from "./Accordion/Accordion"

let Accordion_data = [
{
  data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus, parovident quae minima adipisci repudiandae impedit molestiae. Commodi dignissimos ipsa dolorum saepe, accusamus nesciunt eius!",
  heading : "Accordion One",
  keys : 1
},
{
  data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus, parovident quae minima adipisci repudiandae impedit molestiae. Commodi dignissimos ipsa dolorum saepe, accusamus nesciunt eius!",
  heading : "Accordion Two",
  keys : 2
},
{
  data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus, parovident quae minima adipisci repudiandae impedit molestiae. Commodi dignissimos ipsa dolorum saepe, accusamus nesciunt eius!",
  heading : "Accordion Three",
  keys : 3
},
{
  data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus, parovident quae minima adipisci repudiandae impedit molestiae. Commodi dignissimos ipsa dolorum saepe, accusamus nesciunt eius!",
  heading : "Accordion Four",
  keys : 4
},
]
 


function App() {

  return (
    <>
    <div className="Accordion_box">
     {Accordion_data.map((element)=>(
       < Accordion key={element.keys} data={element.data} heading={element.heading}  />
      ))}
    </div>
    </>
  )
}

export default App
