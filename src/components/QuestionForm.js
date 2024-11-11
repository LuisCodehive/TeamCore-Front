import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

const QuestionForm = ({ questions, onAnswer }) => {
  // Estado para almacenar la respuesta seleccionada para cada pregunta
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Función para manejar la selección de una respuesta
  const handleAnswerSelect = (questionId, answerId) => {
    // Actualizar el estado con la respuesta seleccionada para la pregunta actual
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: answerId,
    }));

    // Llamar a la función onAnswer para enviar la respuesta seleccionada al componente padre
    onAnswer(questionId, answerId);
  };

  return (
    <View>
      {questions.map((question) => (
        <QuestionContainer key={question.question_id}>
          <Text style={{fontWeight:"bold"}}>{question.question}</Text>
          {question.answers.map((answer) => (
            <StyledButton
              key={answer.answer_id}
              mode={selectedAnswers[question.question_id] === answer.answer_id ? 'contained' : 'outlined'}
              onPress={() => handleAnswerSelect(question.question_id, answer.answer_id)}
            >
              {answer.answer}
            </StyledButton>
          ))}
        </QuestionContainer>
      ))}
    </View>
  );
};

// Estilos de contenedor de pregunta
const QuestionContainer = styled.View`
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  elevation: 2;
`;

// Estilo para el botón, cambiando su apariencia según el estado
const StyledButton = styled(Button)`
  margin-top: 8px;
`;

export default QuestionForm;



