import Computers from '../data/computers';

const handleCategory = (props) => {
  const {activeQuestionIndex, category} = props;
  switch (category) {
    case 'Computer': {
      return {
        question: Computers[activeQuestionIndex].question,
        answers: Computers[activeQuestionIndex].answers,
        length: Computers.length,
      };
    }
    default:
      return {
        question: null,
        answers: null,
        length: null,
      };
  }
};

export default handleCategory;
