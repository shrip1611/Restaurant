import Hero from '../components/hero/Hero'
import Gallery from '../components/gallery/Gallery'
import Banner from '../components/Banner'
import FormWrapper from "../components/form/FormWrapper";
import ContactForm from "../components/form/ContactForm";
import WorkingHours from '../components/Working'
import Testimonial from '../components/testimonial/Testimonial'
import EventsSection from '../components/events/EventsSection'



const Home = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <Banner />
            <FormWrapper>
                <ContactForm />
            </FormWrapper>
            <WorkingHours />
            <EventsSection />
            <Testimonial />
        </>
    )
}

export default Home