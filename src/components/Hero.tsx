import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const courseStats = [
    { label: "Лабораторных работ", value: "8", icon: "FlaskConical" },
    { label: "Теоретических тем", value: "12", icon: "BookOpen" },
    { label: "Виртуальных симуляторов", value: "5", icon: "Monitor" },
    { label: "Часов практики", value: "24", icon: "Clock" },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600">Курс 2024/2025</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Архитектура персональных компьютеров
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Интерактивный курс виртуальных лабораторных работ для изучения
            внутреннего устройства и принципов работы современных ПК
          </p>
          <Button size="lg" className="mr-4">
            <Icon name="Play" size={20} className="mr-2" />
            Начать обучение
          </Button>
          <Button variant="outline" size="lg">
            <Icon name="Download" size={20} className="mr-2" />
            Программа курса
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseStats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Icon name={stat.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
