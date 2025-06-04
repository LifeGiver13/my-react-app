import { useParams } from 'react-router-dom';
import QuestionnaireForm from '../components/QuestionaireForm';
import Header from '../Header';

export default function Quiz() {
    const { id } = useParams();

    return (
        <>
            <Header>        <div>
                <h1>Take the Quiz</h1>
                <QuestionnaireForm id={id} />
            </div>

            </Header>

        </>
    )
}
