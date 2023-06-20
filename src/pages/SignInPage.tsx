import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";

const SignInPage = () => {
    return (
      <MainLayout
        header={<Header />}
        main={<SignIn />}
        footer={<Footer />}
      />
    );
  };
  
  export default SignInPage;