import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS=[
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://64.media.tumblr.com/15154c6751274df234e3ffca103f1772/231b4cf4d97be1d6-d1/s640x960/7011821fd27679a45c986f93339b33eea13db5bd.jpg',
    address: 'Some address 5,12345 Some city',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pNPpKKTz4zX0BiVfx7d2hXTh0vR9aSxkAQ&usqp=CAU',
    address: 'Some address 10,12345 Some city',
    description: 'This is a second meetup!',
  },
];

function Home(props) {
   
  return (
      <MeetupList meetups={props.meetups}/>
  )
}
// export async function getServerSideProps(context){
//   const req=context.req;
//   const res=context.res;
//   //fetch data from on API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps(){
  //fetch data from on API
    return {
      props: {
        meetups: DUMMY_MEETUPS
      },
      revalidate: 1
    };
}

export default Home;







