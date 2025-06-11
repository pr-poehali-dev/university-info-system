import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const LabsList = () => {
  const labs = [
    {
      id: 1,
      title: "Изучение материнской платы",
      description: "Компоненты материнской платы, сокеты, чипсеты",
      duration: "3 часа",
      difficulty: "Базовый",
      progress: 100,
      status: "completed",
      simulator: "Виртуальная плата",
      icon: "CircuitBoard",
    },
    {
      id: 2,
      title: "Архитектура процессора",
      description: "Внутреннее устройство CPU, кэш-память, конвейер",
      duration: "4 часа",
      difficulty: "Средний",
      progress: 75,
      status: "in-progress",
      simulator: "CPU Simulator",
      icon: "Cpu",
    },
    {
      id: 3,
      title: "Система памяти",
      description: "RAM, ROM, иерархия памяти, виртуальная память",
      duration: "3 часа",
      difficulty: "Средний",
      progress: 45,
      status: "in-progress",
      simulator: "Memory Inspector",
      icon: "MemoryStick",
    },
    {
      id: 4,
      title: "Системы ввода-вывода",
      description: "Порты, контроллеры, прерывания, DMA",
      duration: "3 часа",
      difficulty: "Средний",
      progress: 0,
      status: "locked",
      simulator: "I/O Controller",
      icon: "HardDrive",
    },
    {
      id: 5,
      title: "Видеоподсистема",
      description: "Видеокарты, GPU архитектура, графические API",
      duration: "4 часа",
      difficulty: "Продвинутый",
      progress: 0,
      status: "locked",
      simulator: "GPU Workbench",
      icon: "Monitor",
    },
    {
      id: 6,
      title: "Сетевые интерфейсы",
      description: "Сетевые карты, протоколы, TCP/IP стек",
      duration: "3 часа",
      difficulty: "Продвинутый",
      progress: 0,
      status: "locked",
      simulator: "Network Analyzer",
      icon: "Wifi",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Базовый":
        return "bg-green-50 text-green-700 border-green-200";
      case "Средний":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-red-50 text-red-700 border-red-200";
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Лабораторные работы
          </h2>
          <p className="text-lg text-gray-600">
            Практические занятия с виртуальными симуляторами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <Card
              key={lab.id}
              className={`hover:shadow-lg transition-all duration-300 ${
                lab.status === "locked" ? "opacity-75" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon name={lab.icon} className="h-8 w-8 text-blue-600" />
                  <div className="flex gap-2">
                    <Badge className={getDifficultyColor(lab.difficulty)}>
                      {lab.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg">
                  Лаб. {lab.id}: {lab.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{lab.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {lab.duration}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Monitor" size={14} className="mr-1" />
                    {lab.simulator}
                  </div>
                </div>

                {lab.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span>{lab.progress}%</span>
                    </div>
                    <Progress value={lab.progress} className="h-2" />
                  </div>
                )}

                <Button
                  className="w-full"
                  disabled={lab.status === "locked"}
                  variant={lab.status === "completed" ? "outline" : "default"}
                >
                  {lab.status === "locked" && (
                    <Icon name="Lock" size={16} className="mr-2" />
                  )}
                  {lab.status === "completed" && (
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                  )}
                  {lab.status === "in-progress" && (
                    <Icon name="Play" size={16} className="mr-2" />
                  )}
                  {lab.status === "locked"
                    ? "Заблокировано"
                    : lab.status === "completed"
                      ? "Повторить"
                      : lab.status === "in-progress"
                        ? "Продолжить"
                        : "Начать"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsList;
