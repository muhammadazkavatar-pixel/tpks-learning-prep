import Quiz from "@/components/quiz";

const sampleQuestions = [
  {
    id: 1,
    question: "Manakah yang merupakan sifat dari benda tajam?",
    options: ["Tajam", "Dapur", "Daging", "Besi"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Apa yang harus dilakukan saat menggunakan benda tajam?",
    options: ["Bermain-main", "Hati-hati", "Lempar-lempar", "Biarkan saja"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Alat apa yang termasuk benda tajam?",
    options: ["Bantal", "Gunting", "Plastik", "Kertas"],
    correctAnswer: 1
  }
];

export default function Home() {
  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          TPKS Learning App
        </h1>
        <Quiz questions={sampleQuestions} onComplete={handleQuizComplete} />
      </div>
    </div>
  );
}
