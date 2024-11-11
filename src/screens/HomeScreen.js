import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import QuestionForm from '../components/QuestionForm';
import { fetchQuestions, submitAnswers } from '../services/api';
import styled from 'styled-components/native';

const HomeScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const questions = await fetchQuestions();
      setQuestions(questions);
    } catch (error) {
      Alert.alert("Error", "No se pudieron cargar las preguntas.");
    }
  };

  const handleAnswer = (questionId, answerId) => {
    // Actualizar el estado `answers` correctamente
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = async () => {
    console.log("answers", answers);

    const answersArray = questions.map((q) => ({
      question_id: q.question_id, // Usa `pregunta_id` en lugar de `q.id` si tu estructura tiene esta propiedad
      answer_id: answers[q.question_id],
    }));

    try {
      await submitAnswers(answersArray);
      Alert.alert("Formulario enviado", "¿Deseas reiniciar?", [
        { text: "Sí", onPress: () => setAnswers({}) },
        { text: "No", onPress: () => navigation.navigate("CompletionScreen") },
      ]);
    } catch (error) {
      Alert.alert("Error", "No se pudo enviar el formulario.");
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", margin: 15 }}>
      <TitleText>Bienvenido a TeamCore</TitleText>
      <SubtitleText>Por favor, responde todas las preguntas:</SubtitleText>
      <QuestionForm questions={questions} onAnswer={handleAnswer} />
      <Button
        title="Finalizar"
        onPress={handleSubmit}
        disabled={Object.keys(answers).length !== questions.length} // Habilita solo si todas las preguntas tienen respuesta
      />
    </View>
  );
};

export const TitleText = styled.Text`
  font-size: 24px;
  color: #003670;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const SubtitleText = styled.Text`
  font-size: 18px;
  color: #003670;
  margin-bottom: 8px;
`;

export default HomeScreen;

