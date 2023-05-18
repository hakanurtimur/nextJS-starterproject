import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {

    const addMeetupHandler = (meetup) => {
        console.log(meetup)
    }

    return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
}