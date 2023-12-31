import MeetupDetail from "@/components/meetups/MeetupDetails"

const MeetupDetails = () => {
  return (
    <MeetupDetail 
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GAADZpT2_Q1H37Q_TmEUnXMLAmNYyOh832tA2H-FGajQPYRRi5cLjCnzkczLRopDbbs&usqp=CAU' 
    title="First Meetup" 
    address="Some Street 5, Some City" 
    description='This is a first meetup'/>
     
  )
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {params: {
        meetupId: 'm1',
      },
    },
    {
      params: {
        meetupId: 'm2',
      },
    },
    ],
  }
}

export async function getStaticProps(context){
   //fetch data for a single meetup
   const meetupId=context.params.meetupId;
   console.log(meetupId);

   return {
     props: {
       meetupDate: {
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GAADZpT2_Q1H37Q_TmEUnXMLAmNYyOh832tA2H-FGajQPYRRi5cLjCnzkczLRopDbbs&usqp=CAU',
         id: meetupId ,
         title: 'First Meetup',
         address: 'Some Street 5,Some City',
         description: 'This is a first meetup',
       }
     }
   }
}

export default MeetupDetails
