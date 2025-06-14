import Tools from "./compnents/Tools";

function Home() {
  return (
    <>
      
      <main className="flex justify-center items-center min-h-screen py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <Tools
              title="Love Calculator"
              description="Calculate the love compatibility between you and your partner. Enter your names and discover your love percentage!"
              link="/lovecalculator"
              buttonText="Check >>"
            />
            <Tools
              title="Marriage Calculator"
              description="Calculate the compatibility for marriage between you and your partner. Enter your names and get an estimate of your marital compatibility! ❤❤"
              link="/marriagetester"
              buttonText="Check >>"
            />
             <Tools
                    title="Live Chat"
                    description="Chat live with Love Tool to ask about your love, get tips, and more! Connect with our AI for personalized advice. 💖💖"
                    link="/livechat"
                    buttonText="Chat Now >>"
                  />
          </div>
        </div>
      </main>
    </>
  ); 
}

export default Home;