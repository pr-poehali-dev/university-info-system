import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TheorySection = () => {
  const theoryModules = {
    basics: [
      {
        title: "Введение в архитектуру ПК",
        topics: ["История развития", "Основные принципы", "Классификация"],
        duration: "2 часа",
        completed: true,
      },
      {
        title: "Системы счисления",
        topics: ["Двоичная система", "Шестнадцатеричная", "Операции"],
        duration: "1.5 часа",
        completed: true,
      },
      {
        title: "Логические основы ПК",
        topics: ["Булева алгебра", "Логические элементы", "Схемы"],
        duration: "2.5 часа",
        completed: false,
      },
    ],
    hardware: [
      {
        title: "Центральный процессор",
        topics: ["Архитектура CPU", "Конвейер", "Кэш-память"],
        duration: "3 часа",
        completed: true,
      },
      {
        title: "Материнская плата",
        topics: ["Чипсеты", "Шины данных", "Сокеты"],
        duration: "2 часа",
        completed: false,
      },
      {
        title: "Оперативная память",
        topics: ["Типы RAM", "Тайминги", "Многоканальность"],
        duration: "2.5 часа",
        completed: false,
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Теоретические материалы
          </h2>
          <p className="text-lg text-gray-600">
            Фундаментальные знания по архитектуре компьютеров
          </p>
        </div>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="basics" className="flex items-center space-x-2">
              <Icon name="BookOpen" size={16} />
              <span>Основы</span>
            </TabsTrigger>
            <TabsTrigger
              value="hardware"
              className="flex items-center space-x-2"
            >
              <Icon name="HardDrive" size={16} />
              <span>Аппаратная часть</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {theoryModules.basics.map((module, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      {module.completed ? (
                        <Badge className="bg-green-100 text-green-800">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Изучено
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {module.duration}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Темы:</h4>
                      <div className="space-y-1">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Icon
                              name="ChevronRight"
                              size={14}
                              className="mr-2"
                            />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      variant={module.completed ? "outline" : "default"}
                    >
                      {module.completed ? "Повторить" : "Изучить"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hardware">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {theoryModules.hardware.map((module, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      {module.completed ? (
                        <Badge className="bg-green-100 text-green-800">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Изучено
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {module.duration}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Темы:</h4>
                      <div className="space-y-1">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Icon
                              name="ChevronRight"
                              size={14}
                              className="mr-2"
                            />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      variant={module.completed ? "outline" : "default"}
                    >
                      {module.completed ? "Повторить" : "Изучить"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TheorySection;
