import React, { useState, useEffect } from 'react';
import { X, Sparkles, Brain, CheckCircle, AlertCircle, Play } from 'lucide-react';
import { generateTriviaQuestion } from '../services/gemini';
import { QuizState, QuizQuestion } from '../types';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [state, setState] = useState<QuizState>(QuizState.IDLE);
  const [questionData, setQuestionData] = useState<QuizQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && state === QuizState.IDLE) {
      loadNewQuestion();
    }
  }, [isOpen]);

  const loadNewQuestion = async () => {
    setState(QuizState.LOADING);
    setSelectedAnswer(null);
    try {
      const data = await generateTriviaQuestion();
      setQuestionData(data);
      setState(QuizState.QUESTION);
    } catch (e) {
      setState(QuizState.ERROR);
    }
  };

  const handleAnswer = (index: number) => {
    if (state !== QuizState.QUESTION) return;
    setSelectedAnswer(index);
    setState(QuizState.RESULT);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-brand-purple p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="animate-pulse" />
            <h2 className="text-xl font-bold font-hand text-2xl">Trắc nghiệm AI</h2>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 min-h-[300px] flex flex-col">

          {state === QuizState.LOADING && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 border-4 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 font-medium animate-pulse">Đang tìm câu hỏi thú vị...</p>
            </div>
          )}

          {state === QuizState.ERROR && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <Brain size={48} className="text-gray-300" />
              <p className="text-red-500">Úi! AI đang nghỉ chút. Thử lại nhé!</p>
              <button
                onClick={loadNewQuestion}
                className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold hover:bg-brand-darkPurple"
              >
                Thử lại
              </button>
            </div>
          )}

          {(state === QuizState.QUESTION || state === QuizState.RESULT) && questionData && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 text-center leading-relaxed">
                {questionData.question}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {questionData.options.map((option, idx) => {
                  let btnClass = "w-full p-4 rounded-xl text-left border-2 transition-all font-medium ";

                  if (state === QuizState.RESULT) {
                    if (idx === questionData.correctAnswer) {
                      btnClass += "bg-green-100 border-green-500 text-green-700";
                    } else if (idx === selectedAnswer) {
                      btnClass += "bg-red-100 border-red-500 text-red-700";
                    } else {
                      btnClass += "bg-gray-50 border-gray-100 text-gray-400";
                    }
                  } else {
                    btnClass += "bg-white border-gray-200 hover:border-brand-purple hover:bg-brand-lightPurple/20 text-gray-700";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={state === QuizState.RESULT}
                      className={btnClass}
                    >
                      <div className="flex justify-between items-center">
                        <span>{option}</span>
                        {state === QuizState.RESULT && idx === questionData.correctAnswer && <CheckCircle size={20} />}
                        {state === QuizState.RESULT && idx === selectedAnswer && idx !== questionData.correctAnswer && <AlertCircle size={20} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {state === QuizState.RESULT && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className={`p-4 rounded-xl mb-4 ${selectedAnswer === questionData.correctAnswer ? 'bg-brand-yellow/20' : 'bg-gray-100'}`}>
                    <p className="text-gray-800 font-medium">
                      <span className="font-bold mr-2">{selectedAnswer === questionData.correctAnswer ? 'Tuyệt vời!' : 'Cố lên!'}</span>
                      {questionData.explanation}
                    </p>
                  </div>
                  <button
                    onClick={loadNewQuestion}
                    className="w-full bg-brand-purple text-white py-3 rounded-full font-bold hover:bg-brand-darkPurple flex items-center justify-center gap-2"
                  >
                    Câu tiếp theo <Play size={18} fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;