import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SQLite from 'react-native-sqlite-storage';
import questions from './data/questions';  // Import questions

SQLite.enablePromise(true);

export default function ReadingSection({ navigation }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [db, setDb] = useState(null);  // State for database instance

  const currentQuestion = questions[currentQuestionIndex];

  // Initialize SQLite database and load progress
  useEffect(() => {
    const openDatabase = async () => {
      try {
        const dbInstance = await SQLite.openDatabase({ name: 'quiz.db', location: 'default' });
        setDb(dbInstance);  // Save the database instance to state
        await dbInstance.transaction(tx => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY, currentQuestionIndex INTEGER, selectedAnswer INTEGER);'
          );
        });

        // Load progress from SQLite when the component is mounted
        dbInstance.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM progress WHERE id = 1',
            [],
            (tx, results) => {
              if (results.rows.length > 0) {
                const progress = results.rows.item(0);
                setCurrentQuestionIndex(progress.currentQuestionIndex || 0);
                setSelectedAnswer(progress.selectedAnswer || null);
                setShowNextButton(progress.showNextButton === 1); 
              }
            }
          );
        });
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    openDatabase();
  }, []);

  // Handle the answer selection
  const handleAnswerPress = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowNextButton(true);

    if (db) {
      db.transaction(tx => {
        tx.executeSql(
          'REPLACE INTO progress (id, currentQuestionIndex, selectedAnswer) VALUES (1, ?, ?)',
          [currentQuestionIndex, answerIndex, 1]
        );
      });
    }
  };

  // Handle the "Next" button press
  const handleNextPress = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowNextButton(false);

      if (db) {
        db.transaction(tx => {
          tx.executeSql(
            'REPLACE INTO progress (id, currentQuestionIndex, selectedAnswer) VALUES (1, ?, ?)',
            [currentQuestionIndex + 1, null]
          );
        });
      }
    } else {
      alert('おめでとうございます、問題を完了しました。');
    }
  };

  // Reset the quiz state
  const resetQuizState = () => {
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowNextButton(false);

    if (db) {
      db.transaction(tx => {
        tx.executeSql('DELETE FROM progress WHERE id = 1');
      });
    }
  };

  // Update navigation options based on quiz state
  useLayoutEffect(() => {
    if (showQuiz) {
      navigation.setOptions({
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              resetQuizState();
            }}
            style={styles.closeButton}
          >
            <Ionicons name="close-outline" size={24} color="black" /> {/* Close icon using Ionicons */}
          </TouchableOpacity>
        ),
      });
    } else {
      navigation.setOptions({
        headerShown: false,
      });
    }
  }, [navigation, showQuiz]);

  // Show quiz or button to start quiz
  if (!showQuiz) {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Ionicons
            name="book" // Book icon using Ionicons
            size={50} // Icon size
            color="black" // Icon color
            onPress={() => setShowQuiz(true)} // Handle press to show the quiz
          />
          <Text style={styles.text}>Jlpt 4 言語知識,読解</Text> {/* Additional text */}
        </View>
      </View>
    );
  }

  // Quiz progress screen
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.questionContainer}>
          <ScrollView
            style={styles.questionScroll}
            nestedScrollEnabled={true} // Prevent conflicts with parent ScrollView
          >
            <Text style={styles.question}>
              {currentQuestion.question}
            </Text>
            {currentQuestion.image && (
              <Image
                source={currentQuestion.image}
                style={styles.questionImage}
              />
            )}
          </ScrollView>
        </View>

        <View style={styles.optionsContainer}>
          <ScrollView nestedScrollEnabled={true}>
            {currentQuestion.options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionButton,
                  selectedAnswer === option.id && currentQuestion.correctAnswer === option.id && styles.correctOption,
                  selectedAnswer === option.id && currentQuestion.correctAnswer !== option.id && styles.wrongOption,
                  selectedAnswer !== null && currentQuestion.correctAnswer === option.id && styles.correctOption,
                ]}
                onPress={() => handleAnswerPress(option.id)}
                disabled={selectedAnswer !== null}
              >
                <Text style={styles.optionText}>{option.text}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {showNextButton && (
            <TouchableOpacity
              style={[styles.optionButton, styles.nextButton]}
              onPress={handleNextPress}
            >
              <Text style={[styles.optionText, styles.nextButtonText]}>次の問題</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingBottom: 30,
  },
  questionContainer: {
    marginBottom: 40,
    flex: 1,
  },
  questionScroll: {
    maxHeight: 380,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  questionImage: {
    width: '100%',
    height: 350,
    marginTop: 10,
    resizeMode: 'contain',
  },
  optionsContainer: {
    marginVertical: 25,
    maxHeight: 500,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  optionButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#aaa',
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  correctOption: {
    backgroundColor: 'green',
  },
  wrongOption: {
    backgroundColor: 'red',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 10,
    padding: 0,
    margin: 0,
  },
  nextButton: {
    padding: 20,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },
  extraSpace: {
    height: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
