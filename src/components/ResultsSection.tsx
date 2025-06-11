import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ResultsSection = () => {
  const overallProgress = {
    completed: 2,
    inProgress: 2,
    total: 6,
    percentage: 67,
  };

  const labResults = [
    {
      id: 1,
      title: "Материнская плата",
      score: 95,
      maxScore: 100,
      timeSpent: "2.5 часа",
      attempts: 1,
      status: "excellent",
      completedAt: "15.03.2024",
    },
    {
      id: 2,
      title: "Архитектура процессора",
      score: 78,
      maxScore: 100,
      timeSpent: "3.2 часа",
      attempts: 2,
      status: "good",
      completedAt: "В процессе",
    },
    {
      id: 3,
      title: "Система памяти",
      score: 0,
      maxScore: 100,
      timeSpent: "1.5 часа",
      attempts: 0,
      status: "in-progress",
      completedAt: "В процессе",
    },
  ];

  const achievements = [
    { title: "Первая лабораторная", icon: "Award", earned: true },
    { title: "Отличный результат", icon: "Star", earned: true },
    { title: "Быстрое прохождение", icon: "Zap", earned: false },
    { title: "Исследователь", icon: "Search", earned: false },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90)
      return { text: "Отлично", color: "bg-green-100 text-green-800" };
    if (score >= 70)
      return { text: "Хорошо", color: "bg-blue-100 text-blue-800" };
    if (score >= 50)
      return { text: "Удовл.", color: "bg-yellow-100 text-yellow-800" };
    return { text: "Не сдано", color: "bg-red-100 text-red-800" };
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Результаты обучения
          </h2>
          <p className="text-lg text-gray-600">
            Ваш прогресс и достижения в курсе
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Общий прогресс */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" className="mr-2" />
                  Общий прогресс
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Выполнено {overallProgress.completed} из{" "}
                      {overallProgress.total} лабораторных
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      {overallProgress.percentage}%
                    </span>
                  </div>
                  <Progress
                    value={overallProgress.percentage}
                    className="h-3"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Результаты лабораторных */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Результаты лабораторных работ
              </h3>
              {labResults.map((lab) => (
                <Card key={lab.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Лаб. {lab.id}: {lab.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Завершено: {lab.completedAt}
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold ${getScoreColor(lab.score)}`}
                        >
                          {lab.score > 0 ? `${lab.score}/${lab.maxScore}` : "—"}
                        </div>
                        {lab.score > 0 && (
                          <Badge className={getScoreBadge(lab.score).color}>
                            {getScoreBadge(lab.score).text}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-2" />
                        Время: {lab.timeSpent}
                      </div>
                      <div className="flex items-center">
                        <Icon name="RotateCcw" size={14} className="mr-2" />
                        Попыток: {lab.attempts}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Достижения */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Trophy" className="mr-2" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg border ${
                      achievement.earned
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <Icon
                      name={achievement.icon}
                      className={`h-6 w-6 mr-3 ${
                        achievement.earned ? "text-yellow-600" : "text-gray-400"
                      }`}
                    />
                    <span
                      className={
                        achievement.earned ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {achievement.title}
                    </span>
                    {achievement.earned && (
                      <Icon
                        name="Check"
                        className="h-4 w-4 ml-auto text-green-600"
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" className="mr-2" />
                  Статистика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Всего времени:</span>
                  <span className="font-medium">7.2 часа</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Средний балл:</span>
                  <span className="font-medium">86.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Активных дней:</span>
                  <span className="font-medium">12</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
