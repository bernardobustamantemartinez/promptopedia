import '@styles/globals.css';

export const metadata = {
    title: "Promptopedia",
    description: 'Explore, Construct, & Share AI Prompts' 
}

const RootLayout = ({ children }) => {
  return (
    <html land='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

             <main className="app">
                {children}
             </main>
        </body>
    </html>
  )
}

export default RootLayout;