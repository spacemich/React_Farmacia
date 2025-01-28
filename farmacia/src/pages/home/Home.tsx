function Home() {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/cJSL0WE.jpeg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            width: "100%", 
         }}>
                <div>
                    <div className="flex items-center justify-between gap-2 text-2xl" style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "black"
                    }}>
                        <h2 className="text-6xl font-bold border-blue-300 rounded-lg p-4 shadow-md text">M&B Drogarias</h2>
                        <br />
                        <p className="font-bold text-white bg-indigo-800 border border-blue-800 rounded-lg p-4 text-center shadow-md"> Experimente a experiência de comprar sempre conosco </p>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        backgroundColor: "bg-blue",
                        padding: "20px",
                        borderRadius: "10px"
                
                    }}>
                        
                        <img 
                            src="https://i.imgur.com/c2P63ci.jpeg"
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
