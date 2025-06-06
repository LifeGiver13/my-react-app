import Header from "../Header";


export default function Home() {
    return (
        <>
            <Header >
                <div id="content">
                    <h1>Home</h1>
                    <div id="hero">
                        <h1>Welcome to the Personal Insight Quiz</h1>
                        <p>
                            This quiz is designed to help you understand yourself better through a series of personalized questions.
                        </p>
                        <p>
                            <strong>Note:</strong> This quiz collects personal data such as your name, age, preferences, and responses to sensitive questions. Your data will be used for analytical purposes only and will never be shared or sold.
                        </p>

                        <div>
                            <strong>Data Collection Disclaimer:</strong><br />
                            By proceeding, you agree to share personal information for the purpose of this quiz. All data is stored securely and used strictly for generating your results and improving the experience.
                        </div>

                    </div>

                </div>
            </Header>

        </>);

}


