import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/SignUpInModal/LoginForm";

export default function Join() {
  return (
    <>
      <Header />
      <main className="flex justify-center py-20">
        <div className="w-[400px] border p-6 rounded">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
