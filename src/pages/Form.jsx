import FormWrapper from "../components/form/FormWrapper";
import ContactForm from "../components/form/ContactForm";
import SectionHeading from "../components/common/SectionHeading";

const Form = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <SectionHeading
        title="Request a Quote / Contact"
        subtitle="We'd love to hear from you!"
      />
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </div>
  );
};

export default Form;